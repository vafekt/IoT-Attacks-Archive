let protoFilter = 'all';

const ATTACK_DIVISIONS_DATA = (window.HUB_DB && window.HUB_DB.attackDivisions) || window.ATTACK_DIVISIONS || [];

const PAGE_ATTACK_DATASET_NAME_ALIAS = {
  'CIC IIoT 2025': 'CIC IIoT 2025 (DataSense)',
  'MU-IoT': 'MU-IoT Dataset',
  'TON_IoT': 'TON_IoT Dataset',
  'BCCC ZWave 2025': 'BCCC-IoTIDS-ZWave-2025',
  'NREL Cyber-Induced Mech. Faults Dataset': 'NREL Cyber Faults Dataset'
};

const PAGE_DATASET_PROTOCOL_NORMALIZATION = {
  'KNXnet/IP': 'KNX/IP',
  'BACnet/IP': 'BACnet',
  'Modbus TCP': 'Modbus',
  'Wi-Fi': 'Wi-Fi (802.11)',
  'TLS': 'HTTPS'
};

const PAGE_DATASET_CATEGORY_PRIORITY = [
  'Brute Force', 'DDoS', 'DoS', 'Reconnaissance', 'Web', 'MITM', 'Malware',
  'Data Integrity', 'Replay', 'Covert Channel', 'Fuzzing', 'Cyber-Physical'
];

function normalizePageAttackDatasetName(name) {
  return PAGE_ATTACK_DATASET_NAME_ALIAS[name] || name;
}

function normalizePageDatasetCategory(rawCategory, divisionTitle, attackName) {
  if (/brute\s*force/i.test(rawCategory)) return 'Brute Force';
  if (/reconnaissance/i.test(rawCategory)) return 'Reconnaissance';
  if (/web-based/i.test(rawCategory)) return 'Web';
  if (/spoofing|mitm/i.test(rawCategory)) return 'MITM';
  if (/malware|botnet/i.test(rawCategory)) return 'Malware';
  if (/fuzzing/i.test(rawCategory)) return 'Fuzzing';
  if (/data\s*integrity/i.test(rawCategory)) return 'Data Integrity';
  if (/covert\s*channel/i.test(rawCategory)) return 'Covert Channel';
  if (/replay/i.test(rawCategory)) return 'Replay';
  if (/cyber-physical/i.test(rawCategory)) return 'Cyber-Physical';
  if (/dos\/ddos/i.test(rawCategory) || /dos\s*\/\s*ddos/i.test(divisionTitle)) {
    if (/mirai/i.test(divisionTitle) || /mirai/i.test(attackName)) return 'Malware';
    return 'DoS/DDoS';
  }
  return rawCategory.split('–')[0].trim();
}

function normalizePageAttackName(attackName) {
  return attackName.replace(/\s*\(Ping Flood\)/i, '').replace(/\s+/g, ' ').trim();
}

function getPageDatasetCategoryPriority(category) {
  const idx = PAGE_DATASET_CATEGORY_PRIORITY.indexOf(category);
  return idx === -1 ? Number.MAX_SAFE_INTEGER : idx;
}

function synchronizeDatasetsWithCentralAttacks() {
  if (!ATTACK_DIVISIONS_DATA.length) return;

  const byDataset = new Map();

  ATTACK_DIVISIONS_DATA.forEach((division) => {
    division.rows.forEach((row) => {
      const baseCategory = normalizePageDatasetCategory(row[0], division.title, row[1]);
      const categories = baseCategory === 'DoS/DDoS' ? ['DoS', 'DDoS'] : [baseCategory];
      const attackName = normalizePageAttackName(row[1]);

      row[3].split(',').map((n) => normalizePageAttackDatasetName(n.trim())).forEach((datasetName) => {
        if (!datasetName) return;
        if (!byDataset.has(datasetName)) {
          byDataset.set(datasetName, {
            attackLabels: new Set(),
            categoryMap: new Map()
          });
        }
        const info = byDataset.get(datasetName);

        categories.forEach((category) => {
          const attackLabel = `${category} – ${attackName}`;
          info.attackLabels.add(attackLabel);
          if (!info.categoryMap.has(category)) {
            info.categoryMap.set(category, new Set());
          }
          info.categoryMap.get(category).add(attackLabel);
        });
      });
    });
  });

  DATASETS.forEach((dataset) => {
    const key = normalizePageAttackDatasetName(dataset.name);
    const info = byDataset.get(key);

    dataset.protocols = sortProtocols(dataset.protocols.map((p) => PAGE_DATASET_PROTOCOL_NORMALIZATION[p] || p));

    if (!info) {
      if (!dataset.attackCats?.length) dataset.attackCats = ['Benign Traffic Only'];
      if (!dataset.attackDetails?.length) dataset.attackDetails = ['No attack records in centralized attack taxonomy.'];
      dataset.attacks = dataset.attackLabels?.length || dataset.attacks || 0;
      dataset.desc = `${dataset.attacks} standardized attacks across ${dataset.attackCats.length} categories. Primary protocols: ${dataset.protocols.join(', ')}.`;
      return;
    }

    dataset.attacks = info.attackLabels.size;

    const orderedCategories = Array.from(info.categoryMap.keys()).sort((a, b) => {
      const p1 = getPageDatasetCategoryPriority(a);
      const p2 = getPageDatasetCategoryPriority(b);
      if (p1 !== p2) return p1 - p2;
      return a.localeCompare(b);
    });

    dataset.attackCats = orderedCategories.map((category) => `${category} (${info.categoryMap.get(category).size})`);
    dataset.attackDetails = orderedCategories.map((category) => Array.from(info.categoryMap.get(category)).sort((a, b) => a.localeCompare(b)).join(', '));
    dataset.desc = `${dataset.attacks} standardized attacks across ${dataset.attackCats.length} categories. Primary protocols: ${dataset.protocols.join(', ')}.`;
  });
}

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
  synchronizeDatasetsWithCentralAttacks();
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
