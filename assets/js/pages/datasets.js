let protoFilter = 'all';

const TESTBED_IMAGE_FILES = new Set([
  'BACnet Attack Dataset.png',
  'BCCC-IoTIDS-ZWave-2025.png',
  'CIC IIoT 2025 (DataSense).png',
  'CIC IoMT 2024.png',
  'CIC IoT 2023.png',
  'CIC Modbus Dataset 2023.png',
  'KNXnetIP IDS Dataset.png',
  'MQTT-IoT-IDS2020.png',
  'MQTTset.png',
  'MU-IoT Dataset.png',
  'TON_IoT Dataset.png',
  'ZBDS2023 Zigbee Dataset.png',
  'ZigBeeNet Dataset.png'
]);

const TESTBED_IMAGE_FILE_OVERRIDES = {
  'KNXnet/IP IDS Dataset': 'KNXnetIP IDS Dataset.png'
};

const TESTBED_OVERLAY_ID = 'dataset-testbed-overlay';
let testbedOverlayKeydownHandler = null;

const PROTOCOL_PAGE_NAMES = new Set([
  'MQTT','Modbus TCP','BACnet/IP','KNX/IP','Zigbee','Z-Wave','Thread','BLE','CoAP','AMQP','XMPP','Wi-Fi (802.11)','6LoWPAN','RPL'
]);

const PROTOCOL_PAGE_ALIAS = {
  'Wi-Fi': 'Wi-Fi (802.11)',
  'KNXnet/IP': 'KNX/IP',
  'Modbus': 'Modbus TCP',
  'BACnet': 'BACnet/IP'
};

function getProtocolPageTarget(protocolName) {
  if (PROTOCOL_PAGE_NAMES.has(protocolName)) return protocolName;
  return PROTOCOL_PAGE_ALIAS[protocolName] || null;
}

function renderPrimaryProtocolLinks(protocols) {
  return protocols.map((protocol) => {
    const target = getProtocolPageTarget(protocol);
    if (!target) return badge(protocol);
    const color = BADGE_COLORS[protocol] || BADGE_COLORS[target] || 'gray';
    return `<a href="protocols.html?protocol=${encodeURIComponent(target)}" class="badge b-${color}" style="text-decoration:none">${protocol}</a>`;
  }).join(' ');
}

function getTestbedImageFile(dataset) {
  const override = TESTBED_IMAGE_FILE_OVERRIDES[dataset.name];
  const candidate = override || `${dataset.name}.png`;
  return TESTBED_IMAGE_FILES.has(candidate) ? candidate : null;
}

function closeTestbedImageOverlay() {
  const overlay = document.getElementById(TESTBED_OVERLAY_ID);
  if (!overlay) return;
  overlay.remove();
  document.body.style.overflow = '';
  if (testbedOverlayKeydownHandler) {
    document.removeEventListener('keydown', testbedOverlayKeydownHandler);
    testbedOverlayKeydownHandler = null;
  }
}

function openTestbedImage(encodedImageFileName, event) {
  if (event) event.stopPropagation();
  const imageFileName = decodeURIComponent(encodedImageFileName);
  closeTestbedImageOverlay();

  const overlay = document.createElement('div');
  overlay.id = TESTBED_OVERLAY_ID;
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .95);
    z-index: 10000;
    padding: 1rem;
    cursor: pointer;
  `;

  const image = document.createElement('img');
  image.src = `assets/images/testbeds/${imageFileName}`;
  image.alt = `${imageFileName.replace('.png', '')} Testbed`;
  image.style.cssText = `
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
    cursor: default;
  `;

  image.addEventListener('click', (e) => e.stopPropagation());
  overlay.addEventListener('click', closeTestbedImageOverlay);
  overlay.appendChild(image);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  testbedOverlayKeydownHandler = (e) => {
    if (e.key === 'Escape') closeTestbedImageOverlay();
  };
  document.addEventListener('keydown', testbedOverlayKeydownHandler);
}

function renderTestbedCell(dataset) {
  const imageFile = getTestbedImageFile(dataset);
  if (!imageFile) return badge(dataset.testbed);

  return `<button type="button" class="testbed-trigger" onclick="openTestbedImage('${encodeURIComponent(imageFile)}', event)" style="background:none;border:none;padding:0;cursor:pointer">${badge(dataset.testbed)}</button>`;
}

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
      <td>${renderPrimaryProtocolLinks(d.protocols)}</td>
      <td><strong style="font-family:'Space Mono',monospace;color:var(--green)">${d.attacks}</strong></td>
      <td>${d.benign==='Yes'?'<span class="check-y">✓</span>':d.benign==='Partial'?'<span class="check-p">~</span>':'<span class="check-n">✗</span>'}</td>
      <td>${renderTestbedCell(d)}</td>
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
    <div class="card" data-dataset-id="${d.id}">
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

window.openTestbedImage = openTestbedImage;

document.addEventListener('DOMContentLoaded', () => {
  renderTable(); renderCards();
  initTableSort('dsTable');
  initMobileNav(); initFade();
  
  // Handle scroll to dataset from Protocols page
  const params = new URLSearchParams(window.location.search);
  const scrollToId = params.get('scrollToId');
  if (scrollToId) {
    // Switch to cards view
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
      if (btn.textContent.includes('Cards')) {
        btn.classList.add('active');
        document.getElementById('cardsPanel').classList.add('active');
      } else {
        btn.classList.remove('active');
        document.getElementById('tablePanel').classList.remove('active');
      }
    });
    // Wait for render and scroll to dataset
    setTimeout(() => {
      const card = document.querySelector(`[data-dataset-id="${scrollToId}"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.boxShadow = '0 0 20px rgba(0,229,255,.4)';
        setTimeout(() => { card.style.boxShadow = ''; }, 2000);
      }
    }, 100);
  }
});
