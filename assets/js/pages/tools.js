let toolCatFilter = 'all';

const DATASET_NAME_NORMALIZATION = {
  CICIoT2023: 'CIC IoT 2023',
  DataSense: 'CIC IIoT 2025 (DataSense)',
  CICIoMT2024: 'CIC IoMT 2024',
  'CIC Modbus2023': 'CIC Modbus Dataset 2023',
  'MQTT-IDS2020': 'MQTT-IoT-IDS2020',
  'Thread (CMU)': 'CRAWDAD cmu/thread-devboards',
  'Zigbee-EDA': 'CRAWDAD cmu/zigbee-eda',
  BACnetAtk: 'BACnet Attack Dataset',
  'BACnet Atk': 'BACnet Attack Dataset',
  CyberFaults: 'NREL Cyber Faults Dataset',
  'KNXnet/IP': 'KNXnet/IP IDS Dataset',
  BCCCZWave2025: 'BCCC-IoTIDS-ZWave-2025',
  'BCCC-ZWave2025': 'BCCC-IoTIDS-ZWave-2025'
};

function normalizeToolEntry(tool) {
  const used = tool.used
    .split(',')
    .map(item => item.trim())
    .map(item => DATASET_NAME_NORMALIZATION[item] || item)
    .join(', ');
  return { ...tool, used };
}

const NORMALIZED_TOOLS = TOOLS.map(normalizeToolEntry);

function renderTools() {
  const q = document.getElementById('toolSearch').value.toLowerCase();
  const visible = NORMALIZED_TOOLS.filter(t => {
    const mq = !q || t.tool.toLowerCase().includes(q) || t.attacks.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || t.used.toLowerCase().includes(q);
    const mc = toolCatFilter==='all' || t.cat===toolCatFilter;
    return mq && mc;
  });
  document.getElementById('toolCount').innerHTML = `<span>${visible.length}</span> / ${NORMALIZED_TOOLS.length}`;
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
