let stackFilter = 'all';

function getStack(p) {
  if (p.stack.includes('Adaptation')) return 'Adaptation';
  if (p.stack.includes('Network')) return 'Network';
  if (p.stack.includes('PHY') || p.stack.includes('MAC')) return 'PHY';
  return 'Application';
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
    <div class="card">
      <div style="font-size:1.75rem;margin-bottom:.6rem">${p.icon}</div>
      <div class="card-eyebrow">${p.standard} · ${p.stack}</div>
      <div class="card-title">${p.name}</div>
      <div class="card-tags">
        ${badge(p.power === 'Very Low' ? '🔋 Ultra Low Power' : p.power === 'Low' ? '🔋 Low Power' : p.power === 'High' ? '⚡ High Power' : `⚡ ${p.power} Power`,'gray')}
        ${badge(p.freq,'gray')}
        ${badge(p.range,'gray')}
      </div>
      <div style="font-size:.82rem;color:var(--muted);margin-bottom:.6rem;font-style:italic">${p.full}</div>
      <div class="card-desc">${p.desc}</div>
    </div>
  `).join('') || '<p style="color:var(--muted);font-family:\'Space Mono\',monospace;font-size:.75rem">No protocols match.</p>';
}

function filterProtos() { renderProtos(); }
function setStack(btn, val) {
  document.querySelectorAll('.filter-group .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  stackFilter = val;
  renderProtos();
}

function renderHeatmap() {
  const { protocols, datasets, data } = HEATMAP;
  let h = `<table class="heatmap-tbl"><thead><tr><th class="rh">Protocol</th>`;
  datasets.forEach(d => { h += `<th>${d.replace('\n','<br>')}</th>`; });
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
  renderProtos(); renderHeatmap();
  initMobileNav(); initFade();
});
