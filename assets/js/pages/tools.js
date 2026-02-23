let toolCatFilter = 'all';

function renderTools() {
  const q = document.getElementById('toolSearch').value.toLowerCase();
  const visible = TOOLS.filter(t => {
    const mq = !q || t.tool.toLowerCase().includes(q) || t.attacks.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.used.toLowerCase().includes(q);
    const mc = toolCatFilter==='all' || t.cat===toolCatFilter;
    return mq && mc;
  });
  document.getElementById('toolCount').innerHTML = `<span>${visible.length}</span> / ${TOOLS.length}`;
  document.getElementById('toolsTbody').innerHTML = visible.map(t => `
    <tr>
      <td><span class="tool-name">${t.tool}</span></td>
      <td>${badge(t.cat)}</td>
      <td style="font-size:.78rem;color:var(--muted);max-width:220px">${t.attacks}</td>
      <td><span class="tool-desc">${t.desc}</span></td>
      <td>${t.used.split(', ').map(d=>`<span class="ds-chip">${d}</span>`).join(' ')}</td>
      <td>${t.link&&t.link!='#'?`<a class="tool-link" href="${t.link}" target="_blank">→ Repo</a>`:'<span style="color:var(--muted);font-size:.7rem">—</span>'}</td>
    </tr>
  `).join('') || `<tr><td colspan="6" class="no-results">No tools match the current filters.</td></tr>`;
}

function filterTools() { renderTools(); }
function setToolCat(btn, cat) {
  document.querySelectorAll('#toolCatFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  toolCatFilter = cat;
  renderTools();
}

document.addEventListener('DOMContentLoaded', () => {
  renderTools();
  initTableSort('toolsTable');
  initMobileNav(); initFade();
});
