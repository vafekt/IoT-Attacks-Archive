# IoT Security Hub

An open interactive reference for IoT/IIoT security research — covering datasets, protocols, attack taxonomies, attack tools, and per-protocol device profiles.

**[→ Live Site](https://your-username.github.io/iot-security-hub/)**

---

## Overview

This hub presents a structured comparative analysis of IoT security datasets for training and evaluating machine learning-based intrusion detection systems (IDS). The goal is to build a **unified AI-based IDS** capable of detecting attacks across heterogeneous IoT protocols.

| Metric | Value |
|---|---|
| Datasets reviewed | 16 |
| Attack techniques | 88+ |
| IoT protocols covered | 15 |
| Attack tools catalogued | 37 |
| Years covered | 2020–2025 |
| Testbed types | Physical, Hybrid, Simulated, Cyber Range, Real Home |

---

## Pages

| Page | Description |
|---|---|
| [`index.html`](index.html) | Hub overview with navigation tiles and project description |
| [`datasets.html`](datasets.html) | Searchable/filterable table + expandable cards for all 16 datasets |
| [`protocols.html`](protocols.html) | 15 IoT protocol cards + Protocol × Dataset coverage heatmap |
| [`attacks.html`](attacks.html) | 88+ attack techniques in collapsible categories with dataset attribution |
| [`tools.html`](tools.html) | 37 attack tools with categories, descriptions, and GitHub links |
| [`devices.html`](devices.html) | Real-world devices per protocol (MCUs, SBCs, industrial, medical, consumer) |
| [`ai-models.html`](ai-models.html) | Unified AI-IDS pipeline + planned ML model families (in progress) |

---

## File Structure

```
iot-security-hub/
├── index.html              ← Hub overview
├── datasets.html           ← Datasets reference
├── protocols.html          ← Protocol reference + heatmap
├── attacks.html            ← Attack taxonomy
├── tools.html              ← Attack tools
├── devices.html            ← Devices per protocol
├── ai-models.html          ← AI/ML models (in progress)
├── assets/
│   ├── css/
│   │   └── style.css       ← Shared stylesheet
│   └── js/
│       └── data.js         ← All data + shared utilities
└── README.md
```

**Zero build step required.** Pure HTML/CSS/JS — upload and deploy.

---

## Datasets Covered

| # | Dataset | Year | Protocol Focus |
|---|---|---|---|
| 1 | CIC IoT 2023 | 2023 | Wi-Fi, Zigbee, Z-Wave |
| 2 | CIC IIoT 2025 (DataSense) | 2025 | MQTT, Wi-Fi |
| 3 | CIC IoMT 2024 | 2024 | Wi-Fi, MQTT, BLE |
| 4 | BACnet Attack Dataset | 2024 | BACnet/IP |
| 5 | NREL Cyber Faults | 2023 | BACnet/IP |
| 6 | MU-IoT Dataset | 2024 | MQTT, AMQP, CoAP, XMPP, STOMP |
| 7 | KNXnet/IP IDS Dataset | 2025 | KNXnet/IP |
| 8 | CIC Modbus 2023 | 2023 | Modbus TCP/IP |
| 9 | MQTT-IoT-IDS2020 | 2020 | MQTT |
| 10 | MQTTset | 2020 | MQTT |
| 11 | CRAWDAD cmu/thread-devboards | 2022 | Thread, 6LoWPAN, MLE |
| 12 | CRAWDAD cmu/zigbee-eda | 2021 | Zigbee (IEEE 802.15.4) |
| 13 | ZBDS2023 | 2023 | Zigbee ZLL |
| 14 | ZigBeeNet Dataset | 2024 | Zigbee (benign only) |
| 15 | BCCC-IoTIDS-ZWave-2025 | 2025 | Z-Wave, MQTT, IP |
| 16 | TON_IoT | 2020 | MQTT, Modbus, HTTP |

---

## Deploy to GitHub Pages

### Option A — GitHub UI (simplest)

1. Create a new GitHub repository
2. Upload all files maintaining the folder structure
3. Go to **Settings → Pages**
4. Set source: **Deploy from a branch → main → / (root)**
5. Click **Save** — live in ~1 minute at `https://<username>.github.io/<repo>/`

### Option B — GitHub CLI

```bash
git clone https://github.com/your-username/iot-security-hub.git
cd iot-security-hub
# Copy project files here
git add .
git commit -m "Initial deployment"
git push origin main
# Enable Pages in repo settings
```

### Option C — Local development

No build tools needed. Just open any `.html` file directly in a browser or use a simple HTTP server:

```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

---

## Features

- **Zero dependencies** — pure HTML/CSS/JS, no npm, no build step
- **Multi-page structure** — separate pages per section, shared CSS/JS
- **Interactive tables** — sortable columns, live search, category filters
- **Expandable cards** — click to reveal full dataset/device profiles
- **Protocol heatmap** — visual matrix of protocol × dataset coverage
- **Attack accordion** — 15 collapsible categories with per-technique dataset chips
- **Tool browser** — 37 tools with category filters and GitHub repo links
- **Device gallery** — 100+ devices organized by protocol with type filtering
- **Responsive** — mobile navigation and fluid grid layouts
- **Dark theme** — terminal/monospace cyberpunk aesthetic

---

## Data Sources

All data sourced from published academic datasets and official documentation:

- **CIC (University of New Brunswick)** — CICIoT2023, DataSense, CICIoMT2024, CIC Modbus 2023
- **CRAWDAD (CMU)** — cmu/thread-devboards, cmu/zigbee-eda
- **BCCC (York University)** — BCCC-IoTIDS-ZWave-2025
- **NREL** — Cyber-Induced Mechanical Faults dataset
- **UNSW** — TON_IoT Dataset
- **Manipur University** — MU-IoT Dataset

---

## Contributing

To add or update data, edit `assets/js/data.js` and modify the relevant data arrays (`DATASETS`, `PROTOCOLS`, `ATTACKS`, `TOOLS`, `DEVICES`). The pages render dynamically from these arrays — no HTML edits needed for data updates.
