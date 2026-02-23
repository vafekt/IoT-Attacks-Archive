let protoFilter = 'all';

function matchDs(d) {
  const q = document.getElementById('dsSearch').value.toLowerCase();
  const matchQ = !q || d.name.toLowerCase().includes(q) || d.protocols.join(' ').toLowerCase().includes(q) || d.institution.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q);
  const matchP = protoFilter === 'all' || d.protocols.some(p => p.toLowerCase().includes(protoFilter.toLowerCase()));
  return matchQ && matchP;
}

function renderTable() {
  const tb = document.getElementById('dsTbody');
  const visible = DATASETS.filter(matchDs);
  tb.innerHTML = visible.map(d => `
    <tr>
      <td class="mono">${String(d.id).padStart(2,'0')}</td>
      <td><strong>${d.name}</strong></td>
      <td>${badge(String(d.year),'cyan')}</td>
      <td class="mono">${d.format}</td>
      <td>${protoBadges(d.protocols)}</td>
      <td><strong style="font-family:'Space Mono',monospace;color:var(--green)">${d.attacks}</strong></td>
      <td>${d.benign==='Yes'?'<span class="check-y">✓</span>':d.benign==='Partial'?'<span class="check-p">~</span>':'<span class="check-n">✗</span>'}</td>
      <td>${badge(d.testbed)}</td>
      <td class="mono" style="font-size:.72rem">${d.institution}</td>
      <td>${d.link&&d.link!='#'?`<a href="${d.link}" target="_blank" style="color:var(--cyan);font-family:'Space Mono',monospace;font-size:.68rem">→ Link</a>`:'<span style="color:var(--muted);font-size:.7rem">—</span>'}</td>
    </tr>
  `).join('') || `<tr><td colspan="10" class="no-results">No datasets match the current filters.</td></tr>`;
  document.getElementById('dsCount').innerHTML = `<span>${visible.length}</span> / ${DATASETS.length}`;
}

function renderCards() {
  const grid = document.getElementById('dsCards');
  const visible = DATASETS.filter(matchDs);
  grid.innerHTML = visible.map(d => {
    const cats = d.attackCats.map((c,i) => `<li><div class="bullet-dot"></div><div><strong>${c}</strong>${d.attackDetails[i]?' — '+d.attackDetails[i]:''}</div></li>`).join('');
    return `
    <div class="card">
      <div class="card-eyebrow">DATASET ${String(d.id).padStart(2,'0')} · ${d.year} · ${d.institution}</div>
      <div class="card-title">${d.name}</div>
      <div class="card-tags">${protoBadges(d.protocols,5)} ${badge(d.testbed)}</div>
      <div class="card-desc">${d.desc}</div>
      <div class="card-meta">
        <div class="card-meta-item">Attacks<br><span class="val">${d.attacks}</span></div>
        <div class="card-meta-item">Format<br><span class="val" style="font-size:.68rem">${d.format}</span></div>
        <div class="card-meta-item">Benign<br><span class="val">${d.benign}</span></div>
        <div class="card-meta-item">Testbed<br><span class="val">${d.testbed}</span></div>
      </div>
      <div class="card-more">
        <div class="card-more-inner">
          <div class="card-section-label cyan">ATTACK CATEGORIES</div>
          <ul class="bullet-list">${cats}</ul>
          <div class="card-section-label amber" style="margin-top:.75rem">DEVICES</div>
          <p style="font-size:.78rem;color:var(--muted);line-height:1.6">${d.devices}</p>
          ${d.link&&d.link!='#'?`<a class="card-link" href="${d.link}" target="_blank">→ Dataset Link</a>`:''}
        </div>
      </div>
      <button class="expand-btn" onclick="toggleCard(this)">▼ EXPAND DETAILS</button>
    </div>`;
  }).join('') || '<p style="color:var(--muted);font-family:\'Space Mono\',monospace;font-size:.75rem">No datasets match.</p>';
}

function toggleCard(btn) {
  const card = btn.closest('.card');
  card.classList.toggle('open');
  btn.textContent = card.classList.contains('open') ? '▲ COLLAPSE' : '▼ EXPAND DETAILS';
}

function filterDs() { renderTable(); renderCards(); }
function setProtoFilter(btn, val) {
  document.querySelectorAll('#protoFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  protoFilter = val;
  filterDs();
}
function setView(btn, view) {
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tablePanel').classList.toggle('active', view==='table');
  document.getElementById('cardsPanel').classList.toggle('active', view==='cards');
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(); renderCards();
  initTableSort('dsTable');
  initMobileNav(); initFade();
});
