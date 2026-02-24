function setNavActive(page) {
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
}

// Mobile nav toggle
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target))
      links.classList.remove('open');
  });
}

// Fade-in on scroll
function initFade() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade').forEach(el => obs.observe(el));
}

// Table sort
function initTableSort(tableId) {
  const tbl = document.getElementById(tableId);
  if (!tbl) return;
  tbl.querySelectorAll('thead th[data-sort]').forEach((th, col) => {
    th.addEventListener('click', () => {
      const tbody = tbl.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('tr:not(.hidden-row)'));
      const asc = th.dataset.dir !== 'asc';
      tbl.querySelectorAll('thead th').forEach(t => { t.classList.remove('sorted'); delete t.dataset.dir; });
      th.classList.add('sorted');
      th.dataset.dir = asc ? 'asc' : 'desc';
      rows.sort((a, b) => {
        const va = a.cells[col]?.textContent.trim() || '';
        const vb = b.cells[col]?.textContent.trim() || '';
        const na = parseFloat(va), nb = parseFloat(vb);
        return (!isNaN(na) && !isNaN(nb)) ? (asc ? na-nb : nb-na) : (asc ? va.localeCompare(vb) : vb.localeCompare(va));
      });
      rows.forEach(r => tbody.appendChild(r));
    });
  });
}

// Badge helpers
const BADGE_COLORS = {
  MQTT:'cyan', 'Modbus TCP':'amber', 'BACnet/IP':'amber', 'KNXnet/IP':'amber', KNX:'amber',
  Zigbee:'green', 'Z-Wave':'purple', Thread:'cyan', BLE:'purple', CoAP:'green',
  'IEEE 802.15.4':'purple', AMQP:'cyan', XMPP:'green', STOMP:'amber', 'Wi-Fi':'cyan', '6LoWPAN':'purple',
  Physical:'green', Simulated:'amber', Hybrid:'purple', 'Simulated (Docker)':'amber',
  'Cyber Range':'red', 'Real Home':'cyan',
  Network:'cyan', Recon:'purple', 'Brute Force':'red', MITM:'amber', Web:'green',
  MQTT:'cyan', KNX:'amber', BACnet:'amber', BLE:'purple', Zigbee:'green', Modbus:'amber',
  red:'red', amber:'amber', cyan:'cyan', green:'green', purple:'purple', gray:'gray'
};
function badge(text, colorKey) {
  const c = colorKey || BADGE_COLORS[text] || 'gray';
  return `<span class="badge b-${c}">${text}</span>`;
}
function protoBadges(arr, max = 4) {
  return arr.slice(0, max).map(p => badge(p)).join(' ');
}

// Update results count
function updateCount(containerId, countId, total, visible) {
  const el = document.getElementById(countId);
  if (el) el.innerHTML = `<span>${visible}</span> / ${total}`;
}
