let devTypeFilter = 'all';

const DEVICE_TYPE_COLORS = {
  Microcontroller:'cyan', SBC:'green', Industrial:'amber', Medical:'purple',
  Security:'red', Platform:'cyan', Cloud:'cyan', 'Cloud Platform':'cyan',
  Gateway:'amber', RTOS:'gray', 'RTOS Platform':'gray', Camera:'gray',
  BAS:'amber', HVAC:'amber', Lighting:'green', 'Smart Speaker':'cyan',
  'Border Router':'purple', Wearable:'purple', Beacon:'gray',
  Metering:'amber', Server:'gray', Networking:'gray', Mobile:'cyan',
  Infrastructure:'gray', Desktop:'gray', Sensor:'green', Actuator:'amber'
};

function getTypeColor(type) { return DEVICE_TYPE_COLORS[type] || 'gray'; }

function getProtoInfo(name) { return PROTOCOLS.find(p => p.name === name) || {icon:'📡',full:name}; }

function renderDevices() {
  const q = document.getElementById('devSearch').value.toLowerCase();
  const container = document.getElementById('deviceSections');
  let totalDevices = 0;
  let html = '';
  DEVICES.forEach(entry => {
    const protoInfo = getProtoInfo(entry.protocol);
    const visDevices = entry.devices.filter(d => {
      const mq = !q || d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || entry.protocol.toLowerCase().includes(q);
      const mt = devTypeFilter==='all' || d.type===devTypeFilter || d.type.includes(devTypeFilter);
      return mq && mt;
    });
    if (visDevices.length === 0) return;
    totalDevices += visDevices.length;
    const devCards = visDevices.map(d => `
      <div class="device-card">
        <div class="device-name">${d.name}</div>
        <span class="device-type">${badge(d.type, getTypeColor(d.type))}</span>
        <div class="device-desc">${d.desc}</div>
      </div>
    `).join('');
    html += `
    <div class="proto-section">
      <div class="proto-header">
        <div class="proto-icon">${protoInfo.icon || '📡'}</div>
        <div>
          <div class="proto-hname">${entry.protocol} ${badge(entry.protocol, entry.color)}</div>
          <div class="proto-hfull">${protoInfo.full || entry.protocol}</div>
        </div>
        <span style="margin-left:auto;font-family:'Space Mono',monospace;font-size:.65rem;color:var(--muted)">${visDevices.length} device${visDevices.length!==1?'s':''}</span>
      </div>
      <div class="device-grid">${devCards}</div>
    </div>`;
  });
  container.innerHTML = html || '<p style="color:var(--muted);font-family:\'Space Mono\',monospace;font-size:.75rem;padding:2rem 0">No devices match the current filters.</p>';
  document.getElementById('devCount').innerHTML = `<span>${totalDevices}</span> devices shown`;
}

function filterDevices() { renderDevices(); }
function setDevType(btn, val) {
  document.querySelectorAll('#devTypeFilter .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  devTypeFilter = val;
  renderDevices();
}

document.addEventListener('DOMContentLoaded', () => {
  renderDevices();
  initMobileNav(); initFade();
});
