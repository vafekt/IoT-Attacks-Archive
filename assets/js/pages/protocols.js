let stackFilter = 'all';
let expandedProto = null;

function updateHeroProtocolSummary() {
  const count = PROTOCOLS.length;
  const countEl = document.getElementById('heroProtoCount');
  const descEl = document.getElementById('heroProtoDesc');
  if (countEl) countEl.textContent = count;
  if (descEl) {
    descEl.textContent = `${count} IoT and IIoT communication protocols with technical details, security properties, and coverage across the 16 datasets.`;
  }
}

function getStack(p) {
  if (p.stack.includes('Adaptation')) return 'Adaptation';
  if (p.stack.includes('Network')) return 'Network';
  if (p.stack.includes('PHY') || p.stack.includes('MAC')) return 'PHY';
  return 'Application';
}

function toggleProtoExpand(name) {
  expandedProto = expandedProto === name ? null : name;
  renderProtos();
}

function openFullscreen(imgSrc, e) {
  e.stopPropagation();
  const overlay = document.createElement('div');
  overlay.id = 'fullscreen-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0;
    background: rgba(0,0,0,.95);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000;
    cursor: pointer;
  `;
  const img = document.createElement('img');
  img.src = imgSrc;
  img.style.cssText = `
    width: 98vw; height: 98vh;
    max-width: 98vw; max-height: 98vh;
    object-fit: contain;
    cursor: default;
  `;
  img.onclick = (e) => e.stopPropagation();
  overlay.appendChild(img);
  overlay.onclick = () => overlay.remove();
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('fullscreen-overlay')) {
      document.getElementById('fullscreen-overlay').remove();
    }
  }, { once: true });
  document.body.appendChild(overlay);
}

function renderProtos() {
  const q = document.getElementById('protoSearch').value.toLowerCase();
  const visible = PROTOCOLS.filter(p => {
    const mq = !q || p.name.toLowerCase().includes(q) || p.full.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const ms = stackFilter==='all' || getStack(p)===stackFilter;
    return mq && ms;
  });
  document.getElementById('protoCount').innerHTML = `<span>${visible.length}</span> / ${PROTOCOLS.length}`;
  document.getElementById('protoGrid').innerHTML = visible.map(p => `
    <div class="card proto-card ${expandedProto === p.name ? 'expanded' : ''}" data-protocol="${p.name}" onclick="toggleProtoExpand('${p.name}')">
      <div style="font-size:1.75rem;margin-bottom:.6rem">${p.icon}</div>
      <div class="card-eyebrow">${p.standard} · ${p.stack}</div>
      <div class="card-title" style="cursor:pointer">${p.name}</div>
      <div class="card-tags">
        ${badge(p.power === 'Very Low' ? '🔋 Ultra Low Power' : p.power === 'Low' ? '🔋 Low Power' : p.power === 'High' ? '⚡ High Power' : `⚡ ${p.power} Power`,'gray')}
        ${badge(p.freq,'gray')}
        ${badge(p.range,'gray')}
      </div>
      <div style="font-size:.82rem;color:var(--muted);margin-bottom:.6rem;font-style:italic">${p.full}</div>
      <div class="card-desc" style="overflow:hidden">${p.desc.startsWith('<div') ? p.desc : p.desc.split('\n').join('<br>')}</div>
      ${expandedProto === p.name && p.image ? `
        <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border)">
          <img src="assets/images/protocols/${p.image}" style="width:100%;max-height:300px;object-fit:contain;border-radius:6px;cursor:pointer;transition:opacity .2s;opacity:.85" onclick="openFullscreen('assets/images/protocols/${p.image}', event)" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='.85'" alt="${p.name} Architecture">
        </div>
      ` : ''}
    </div>
  `).join('') || '<p style="color:var(--muted);font-family:var(--font-mono);font-size:.75rem">No protocols match.</p>';
}

function filterProtos() { renderProtos(); }
function setStack(btn, val) {
  document.querySelectorAll('.filter-group .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  stackFilter = val;
  renderProtos();
}

function collapseExpandedProtoOnOutsideClick(e) {
  if (!expandedProto) return;
  if (e.target.closest('.proto-card')) return;
  expandedProto = null;
  renderProtos();
}

function openProtocolFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const target = params.get('protocol');
  if (!target) return;

  const normalized = target.trim().toLowerCase();
  const match = PROTOCOLS.find((protocol) => protocol.name.toLowerCase() === normalized);
  if (!match) return;

  expandedProto = match.name;
  renderProtos();

  setTimeout(() => {
    const cards = Array.from(document.querySelectorAll('.proto-card'));
    const targetCard = cards.find((card) => card.dataset.protocol === match.name);
    if (!targetCard) return;
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    targetCard.style.boxShadow = '0 0 20px rgba(0,229,255,.4)';
    setTimeout(() => { targetCard.style.boxShadow = ''; }, 2000);
  }, 80);
}

function renderHeatmap() {
  const { protocols, datasets, data } = HEATMAP;
  let h = `<table class="heatmap-tbl"><thead><tr><th class="rh">Protocol</th>`;
  datasets.forEach(d => { h += `<th><a href="datasets.html?scrollToId=${d.id}" style="color:var(--text);text-decoration:none;cursor:pointer;transition:color .2s" onmouseover="this.style.color='var(--cyan)'" onmouseout="this.style.color='var(--text)'" title="${d.name}">${d.display.replace('\n','<br>')}</a></th>`; });
  h += `</tr></thead><tbody>`;
  protocols.forEach((proto, i) => {
    h += `<tr><th class="rh">${proto}</th>`;
    data[i].forEach(v => {
      const cls = v==='✓'?'cell-y':v==='!'?'cell-p':v==='†'?'cell-d':'cell-n';
      h += `<td class="${cls}">${v}</td>`;
    });
    h += `</tr>`;
  });
  h += `</tbody></table>`;
  document.getElementById('heatmapWrap').innerHTML = h;
}

document.addEventListener('DOMContentLoaded', () => {
  updateHeroProtocolSummary();
  renderProtos(); renderHeatmap();
  openProtocolFromQuery();
  initMobileNav(); initFade();
  document.addEventListener('click', collapseExpandedProtoOnOutsideClick);
});
