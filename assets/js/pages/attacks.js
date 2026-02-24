let catFilter = 'all';
const CAT_FILTER_MAP = {
  DDoS:['DDoS'], DoS:['DoS'],
  Recon:['Reconnaissance'], Brute:['Brute Force'],
  Web:['Web-based','MQTT-specific'], Spoof:['Spoofing'],
  MITM:['MITM'],
  Others:['Energy Depletion','Jamming','Replay','Covert Channel','Fuzzing','BLE-specific','Z-Wave-specific','Commissioning Exploitation','Device Reset']
};

function matchCat(cat) {
  if (catFilter === 'all') return true;
  const allowed = CAT_FILTER_MAP[catFilter] || [];
  return allowed.includes(cat) || allowed.some(a => cat.includes(a.split(' ')[0]));
}

function renderAccordion() {
  const q = document.getElementById('atkSearch').value.toLowerCase();
  const accordion = document.getElementById('atkAccordion');
  let totalVisible = 0;
  accordion.innerHTML = ATTACKS.filter(cat => matchCat(cat.cat)).map((cat, i) => {
    const visRows = cat.attacks.filter(a =>
      !q || a.tech.toLowerCase().includes(q) || a.ds.join(' ').toLowerCase().includes(q)
    );
    if (visRows.length === 0) return '';
    totalVisible += visRows.length;
    const rows = visRows.map(a => `
      <div class="acc-row">
        <div class="acc-tech">${a.tech}</div>
        <div class="ds-chips">${a.ds.map(d=>`<span class="ds-chip">${d}</span>`).join('')}</div>
      </div>
    `).join('');
    return `
    <div class="acc-item${i<3?' open':''}" id="acc_${i}">
      <div class="acc-header" onclick="this.closest('.acc-item').classList.toggle('open')">
        <div class="acc-header-left">${badge(cat.cat, cat.color)}</div>
        <div class="acc-header-right">
          <span class="acc-count">${visRows.length} technique${visRows.length!==1?'s':''}</span>
          <span class="chevron">▼</span>
        </div>
      </div>
      <div class="acc-body">${rows}</div>
    </div>`;
  }).join('');
  document.getElementById('atkCount').innerHTML = `<span>${totalVisible}</span> techniques shown`;
}

function filterAtks() { renderAccordion(); }
function setCatFilter(btn, val) {
  document.querySelectorAll('#atkCatFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  catFilter = val;
  renderAccordion();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAccordion();
  initMobileNav(); initFade();
});
