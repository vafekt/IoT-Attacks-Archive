const DATASETS = [
  { id:1, name:"CIC IoT 2023", year:2023, format:"PCAP, CSV", protocols:["Wi-Fi","Zigbee","Z-Wave","TCP","UDP","ARP","IP","ICMP","HTTP","SSH"], attacks:32, benign:"Yes", testbed:"Physical", institution:"Canadian Institute for Cybersecurity, Canada",
    desc:"105 IoT devices in a smart home topology at CIC Lab, University of New Brunswick. 46 CSV flow features extracted per flow. 33 attacks across 7 categories using tools like hping3, nmap, ettercap, DVWA.",
    attackCats:["DDoS (11)","DoS (4)","Reconnaissance (5)","Web-based (6)","Brute Force (1)","Spoofing (2)","Mirai Malware (3)"],
    attackDetails:["ACK Fragmentation Flood (hping3), UDP Flood, Slowloris, ICMP Flood, RST-FIN/PSH-ACK Flood, HTTP Flood, Mirai variants","TCP Flood, HTTP Flood, SYN Flood, UDP Flood","Ping Sweep, OS Scan, Vulnerability Scan, Port Scan, Host Discovery (nmap)","SQL Injection (DVWA), Command Injection (DVWA), Backdoor (Remot3d), XSS, Browser Hijacking (beef)","Dictionary Brute Force (nmap, thc-hydra)","ARP Spoofing (ettercap), DNS Spoofing (ettercap)","GREIP Flood, GREETH Flood, UDPPlain (Mirai-Source-Code)"],
    devices:"67 IoT devices (Amazon Echo Dot, IP cameras, sensors), 38 Zigbee/Z-Wave devices through 5 hubs, 7 Raspberry Pis",
    link:"https://www.unb.ca/cic/datasets/iotdataset-2023.html" },
  { id:2, name:"CIC IIoT 2025 (DataSense)", year:2025, format:"PCAP, CSV", protocols:["MQTT","Wi-Fi","TCP","UDP","HTTP","HTTPS","SSH","Telnet","TLS","ARP","JSON", "IP"], attacks:49, benign:"Yes", testbed:"Physical", institution:"Canadian Institute for Cybersecurity, Canada",
    desc:"Five-layer IIoT architecture with Eclipse Mosquitto broker on Raspberry Pi. 50 attacks across 8 categories. Logs via Filebeat → Elasticsearch. 259,212 benign packets.",
    attackCats:["DDoS (14)","DoS (14)","Reconnaissance (9)","Web-based (5)","Brute Force (2)","MITM (3)","Mirai Malware (2)"],
    attackDetails:["MQTT Connect/Publish Flood, HTTP/ICMP/UDP/TCP variants (hping3, golang-httpflood, mqtt-benchmark)","Similar to DDoS variants, single-source origin","Host Discovery (ARP/TCP/UDP Ping), OS Scan, Port Scan, Service Version Detection, Vulnerability Scan","Backdoor Upload (Remot3d), Command Injection, SQL Injection (sqlmap), Blind SQL Injection, XSS","SSH Brute Force (thc-hydra, SecLists), Telnet Brute Force","ARP Spoofing (ettercap), Impersonation (mqtt-benchmark), IP Spoofing (hping3)","Mirai SYN Flood, Mirai UDP Flood"],
    devices:"15+ Arduino-based industrial sensors, surveillance cameras, smart plugs, Raspberry Pi edge device, Dell PowerEdge server",
    link:"https://www.unb.ca/cic/datasets/iiot-dataset-2025.html" },
  { id:3, name:"CIC IoMT 2024", year:2024, format:"PCAP, CSV", protocols:["Wi-Fi","MQTT","BLE","TCP","UDP","ICMP","HTTP","DNS","SSH","ARP", "TLS","IP"], attacks:19, benign:"Yes", testbed:"Hybrid", institution:"Canadian Institute for Cybersecurity, Canada",
    desc:"Healthcare IoMT dataset. 40 devices (25 real + 15 simulated via IoT Flock). Includes Bluetooth Low Energy attacks. Gigamon Network Tap captures all traffic.",
    attackCats:["DDoS (4)","DoS (4)","Reconnaissance (4)","MQTT-specific (5)","Spoofing (1)","BLE-specific (1)"],
    attackDetails:["SYN Flood, TCP Flood, ICMP Flood, UDP Flood (hping3, udp-flood)","SYN Flood, TCP Flood, ICMP Flood, UDP Flood","Ping Sweep, Vulnerability Scan (Nikto), OS Scan, Port Scan","Malformed Data (IoT-Flock), DoS/DDoS Connect Flood (mqtt-stresser), DoS/DDoS Publish Flood","ARP Spoofing (ettercap)","BLE DoS (gattacker, bettercap)"],
    devices:"Heart rate monitors, SpO2 rings, infusion pumps, blood pressure monitors, biomedical sensors",
    link:"https://www.unb.ca/cic/datasets/iomt-dataset-2024.html" },
  { id:4, name:"BACnet Attack Dataset", year:2024, format:"PCAP", protocols:["BACnet/IP","UDP", "ARP","IP"], attacks:5, benign:"Yes", testbed:"Simulated", institution:"Islamic Azad University, Iran",
    desc:"Building automation attacks using BACnet/IP. Simulated AHU and Chiller controllers using real building data from Tampines Hub, Singapore. Python simulation code included.",
    attackCats:["Data Integrity (2)","Covert Channel (3)"],
    attackDetails:["Falsifying Attack (injecting fabricated data), Modifying Attack (altering legitimate data in transit)","Plain Text Covert Channel, Hashed Covert Channel (SHA3-256), Encrypted Covert Channel (AES-256)"],
    devices:"Simulated AHU Controller, Chiller Controller, HVAC sensors and actuators",
    link:"https://www.kaggle.com/datasets/78eb45aeaac481853135d90738672111e46fe2a4ce653573e8856fc920f3da68" },
  { id:5, name:"NREL Cyber Faults Dataset", year:2023, format:"PCAP, CSV", protocols:["BACnet/IP", "TCP", "UDP", "HTTP", "ARP", "ICMP","IP"], attacks:1, benign:"Yes", testbed:"Simulated", institution:"U.S. Department of Energy, USA",
    desc:"Cyber-physical attacks causing mechanical faults in buildings. NREL ARIES Cyber Range with Hardware-in-the-Loop simulation at University of Central Florida.",
    attackCats:["Cyber-Physical Rogue Device (1 attack in 8 scenarios)"],
    attackDetails:["Rogue device sends unauthorized BACnet WriteProperty commands to VAV boxes, damper actuators, AHU components, cooling coil valves"],
    devices:"BAS centralized controller, simulated BACnet devices, Alfalfa-simulated building plant",
    link:"https://data.nrel.gov/submissions/210" },
  { id:6, name:"MU-IoT Dataset", year:2024, format:"PCAP, CSV", protocols:["MQTT","AMQP","CoAP","XMPP","STOMP","HTTP","WebSockets","TCP","UDP","ARP","DNS","FTP","RTP","H.264","IP"], attacks:16, benign:"Yes", testbed:"Hybrid", institution:"Manipur University, India",
    desc:"Most protocol-diverse dataset. 34.8M records, 121 flow features, 3 label columns. RabbitMQ handles MQTT/AMQP/STOMP. CoAP via ESP32. Includes rare spyware/keylogging attack.",
    attackCats:["DDoS (6)","Reconnaissance (2)","Injection (3)","Brute Force (2)","MITM (2)","Spyware (1)"],
    attackDetails:["DNS Amplification, HTTP Flooding, Slowloris, ICMP/TCP/UDP Flooding (hping3, bonesi)","Network Scanning, Vulnerability Scanning (nmap, nikto)","SQL Injection (sqlmap), Upload Attack, XSS (XSStrike)","Brute Force (thc-hydra), Dictionary Attack (thc-hydra, metasploit, legba)","ARP Poisoning (ettercap), Network Sniffing (ettercap)","Keylogging (custom code)"],
    devices:"ESP32 microcontrollers (CoAP), ESP32Cam (WebSockets), emulated IoT devices, RabbitMQ broker, Openfire server",
    link:"https://manipuruniv.ac.in/CSDmuIOTdataset/" },
  { id:7, name:"KNXnet/IP IDS Dataset", year:2025, format:"PCAP, CSV", protocols:["KNXnet/IP","UDP", "IP", "MDNS"], attacks:8, benign:"Yes", testbed:"Physical", institution:"AI4CYBER project, Greek",
    desc:"8 attack scenarios (KNXA01-KNXA08) targeting KNX building automation (HVAC, lighting, blinds). Physical KNX bus installation with Wireshark captures.",
    attackCats:["Fuzzing (1)","Device Reset (1)","Reconnaissance (2)","DoS (4)"],
    attackDetails:["M_PropRead Fuzzing (KNXSmartFuzzer) for discovering device properties","M_Reset for forcing unauthorized device resets","Network Scanning (IP), Bus Scanning (KNX bus via KNXnet/IP gateway)","GroupValue Write Flooding (valid), GroupValue Read/Write Flooding (fuzzed), Unauthorized Write/Read"],
    devices:"KNX bus devices (actuators, sensors, controllers), KNXnet/IP gateway/interface",
    link:"https://zenodo.org/records/16957517" },
  { id:8, name:"CIC Modbus Dataset 2023", year:2023, format:"PCAP, CSV", protocols:["Modbus TCP", "TCP", "UDP", "RMI", "ARP"], attacks:9, benign:"Yes", testbed:"Simulated", institution:"Canadian Institute for Cybersecurity, Canada",
    desc:"Docker-based ICS simulation aligned with MITRE ICS ATT&CK framework. Attacks from 3 vantage points: external attacker, compromised IED, compromised SCADA HMI.",
    attackCats:["Reconnaissance (1)","DoS (2)","Data Integrity (3)","Brute Force (1)","Payload/Execution (1)","Replay (1)"],
    attackDetails:["Network Reconnaissance (pymodbus, nmap, ModTester)","Query Flooding, Delay Response","False Data Injection (voltage values), Modify Length Parameters, Frame Stacking","Brute Force Write (pymodbus, scapy)","Loading Payloads onto IED devices","Baseline Replay of legitimate Modbus traffic"],
    devices:"Docker containers: IED1A, IED1B (attacker), IED4C, SCADA HMI, Attacker node",
    link:"https://www.unb.ca/cic/datasets/modbus-2023.html" },
  { id:9, name:"MQTT-IoT-IDS2020", year:2020, format:"PCAP, CSV", protocols:["MQTT", "TCP", "UDP", "ICMP", "IP", "DNS", "H.264", "MPEG"], attacks:4, benign:"Yes", testbed:"Simulated", institution:"Division of Cyber Security, Scotland",
    desc:"MQTT-focused dataset with 3 feature abstraction levels: packet-based, unidirectional flow, bidirectional flow. 5 independent scenarios (1 normal + 4 attacks).",
    attackCats:["Reconnaissance (2)","Brute Force (2)"],
    attackDetails:["Nmap Aggressive Scan (OS/version/script/traceroute), Nmap UDP Scan","Sparta SSH Brute Force, MQTT Broker Brute Force"],
    devices:"12 MQTT sensors (simulated), MQTT broker, 1 simulated camera, 1 attacker machine",
    link:"https://github.com/aaaastark/Intrusion-Detection-System-MQTT-Enabled-IoT" },
  { id:10, name:"MQTTset", year:2020, format:"PCAP", protocols:["MQTT", "TCP", "IP"], attacks:5, benign:"Yes", testbed:"Simulated", institution:"IEIIT Institute, Italy",
    desc:"8 simulated IoT sensors on Eclipse Mosquitto v1.6.2 broker. Simulates smart home/office environment. Includes SlowITe attack an MQTT-specific slow DoS attack.",
    attackCats:["DoS (2)","DoS (2)","Brute Force (1)"],
    attackDetails:["DoS Multiple Connections (MQTT-malaria), SlowITe (exploits MQTT keep-alive mechanism)","MQTT Publish Flood (IoT-Flock), Malformed Data (crafted invalid MQTT packets)","Brute Force Authentication (repeated CONNECT attempts)"],
    devices:"Temperature, Humidity, Light, CO-Gas, Motion, Smoke, Door Locker, Fan sensors at Eclipse Mosquitto broker",
    link:"https://www.kaggle.com/datasets/cnrieiit/mqttset" },
  { id:11, name:"CRAWDAD cmu/thread-devboards", year:2022, format:"PCAP", protocols:["Thread","6LoWPAN","MLE", "IEEE 802.15.4", "IPv6"], attacks:6, benign:"Yes", testbed:"Physical", institution:"Carnegie Mellon University, USA",
    desc:"Physical Thread mesh network on Adafruit Feather nRF52840 boards. Attacks target Thread commissioning and Sleepy End Device battery life. 19 experiments captured.",
    attackCats:["Energy Depletion (2)","Commissioning Exploitation (4)"],
    attackDetails:["Spoofed MAC Data Request Injection (sleep prevention), MLE Packet Injection with large frame counters","Selective Jamming of Thread Beacons, Commissioner Impersonation, DTLS Key Exchange Exploitation, Joiner Brute Force"],
    devices:"Adafruit Feather nRF52840 Express, ATUSB IEEE 802.15.4 adapter, OpenThread FTD/MTD firmware",
    link:"https://ieee-dataport.org/open-access/crawdad-cmuthread-devboards" },
  { id:12, name:"CRAWDAD cmu/zigbee-eda", year:2021, format:"PCAP", protocols:["Zigbee","IEEE 802.15.4"], attacks:8, benign:"Yes", testbed:"Physical", institution:"Carnegie Mellon University, USA",
    desc:"SmartThings Hub as Trust Center/Coordinator. WIDS sensors (HiveGuard on Raspberry Pi). USRP N210 SDR for PHY-layer I/Q capture. AES-128 CCM* NWK encryption.",
    attackCats:["Energy Depletion (2)","Spoofing (3)","Jamming (3)"],
    attackDetails:["Energy Depletion (selective jamming + spoofed NWK packets), MAC ACK Spoofing","NWK Frame Spoofing, MAC Acknowledgment Spoofing, Beacon Spoofing","PAN ID Conflict Attack, Selective Jamming of Network Update Commands, Jamming of Rejoin Responses"],
    devices:"Samsung SmartThings Hub v3, Motion Sensor, Yale door locks, Smart Bulb, OSRAM Lightify, Sengled bulbs",
    link:"https://ieee-dataport.org/open-access/crawdad-cmuzigbee-eda" },
  { id:13, name:"ZBDS2023 Zigbee Dataset", year:2023, format:"PCAP", protocols:["Zigbee","IEEE 802.15.4"], attacks:3, benign:"Yes", testbed:"Physical", institution:"Universite de Lille, France",
    desc:"10-day capture in a real occupied smart home. Zigbee Light Link profile on Philips Hue. RSSI from TI CC2531 firmware replaces FCS bytes for spoofing detection.",
    attackCats:["Spoofing (1)","DoS (1)","Replay (1)"],
    attackDetails:["Forged IEEE 802.15.4 frames with legitimate device addresses (killerbee, Z3sec, zigator)","Repeated spoofed frames causing resource depletion (killerbee)","Retransmission of previously captured legitimate frames (killerbee, Z3sec)"],
    devices:"10 Philips Hue devices: Bridge (coordinator), bulbs, dimmer switches, motion sensor",
    link:"https://entrepot.recherche.data.gouv.fr/dataset.xhtml?persistentId=doi:10.57745/NDW74U" },
  { id:14, name:"ZigBeeNet Dataset", year:2024, format:"PCAP", protocols:["Zigbee","IEEE 802.15.4"], attacks:0, benign:"Yes", testbed:"Physical", institution:"Polish Academy of Sciences, Poland",
    desc:"Benign-only baseline. 20 days of normal Zigbee smart home traffic. Fully decrypted with network key provided. 15 Philips Hue devices. Useful as normality baseline.",
    attackCats:["Benign Traffic Only"],
    attackDetails:["Intended as normal traffic baseline to pair with attack datasets like ZBDS2023"],
    devices:"Philips Hue Bridge, Smart Plug, White & Color Ambiance Play Light Bars, Hue Go, various bulbs and sensors",
    link:"https://zenodo.org/records/13957307" },
  { id:15, name:"BCCC-IoTIDS-ZWave-2025", year:2025, format:"PCAP, CSV", protocols:["Z-Wave","MQTT","TCP","UDP","IP"], attacks:38, benign:"Yes", testbed:"Physical", institution:"York University, Canada",
    desc:"Most comprehensive Z-Wave security dataset. 50+ IoT devices, 5-month capture at York University. 401+ features via IoT-ZwaveNetLyzer. 81 IP + 24 Z-Wave attack classes.",
    attackCats:["DDoS (5)","DoS (4)","Reconnaissance (4)","Brute Force (4)","Spoofing (3)","Web-based (3)","Mirai Malware (2)","MITM (1)","Z-Wave-specific (8)","MQTT-specific (4)"],
    attackDetails:["SYN/UDP/ICMP/HTTP/TCP Flood variants","Slowloris, SlowHTTPTest, GoldenEye, RUDY","Port Scanning, OS Fingerprinting, Vulnerability Scanning","SSH/FTP/Telnet Brute Force, Dictionary Attacks","ARP/DNS/IP Spoofing","SQL Injection, XSS, Command Injection","Mirai Scanning, Infection, DDoS variants","Man-in-the-Middle attacks","Z-Wave Replay, Jamming, Spoofing, Flooding, Unauthorized Command Injection, Network Disruption, Downgrade Attack","MQTT Flooding, Unauthorized Access, Message Injection, Spoofing"],
    devices:"Z-Wave sensors (door, motion, temp, humidity, water, smoke), actuators, smart plugs, IP cameras, Zigbee devices, Raspberry Pis",
    link:"https://bccc.laps.yorku.ca/BCCC-IoTIDS-ZWave-2025/" },
  { id:16, name:"TON_IoT Dataset", year:2020, format:"PCAP, CSV, logs", protocols:["MQTT","HTTP","TCP","UDP","ICMP","IP", "ARP", "DNS", "TLS"], attacks:9, benign:"Yes", testbed:"Hybrid", institution:"University of New South Wales, Australia",
    desc:"Three-layer edge/fog/cloud architecture. Node-RED, Mosquitto MQTT, Zeek/Bro IDS. 7 IoT sensor types. Extensively labelled (binary + 10-class). Kali Linux attack VMs.",
    attackCats:["DoS (1)", "DDoS (1)", "Reconnaissance (1)","Web-based (2)","Credential (1)","MITM (1)","Malware (2)"],
    attackDetails:["DoS, DDoS (Nmap, Hping3, GoldenEye)","Scanning (Nmap, Xprobe2)","XSS, SQL/Command Injection (Node-RED, DVWA)","Password cracking / brute force (Metasploit, Hydra)","Man-in-the-Middle","Backdoor (persistent remote access), Ransomware (data encryption)"],
    devices:"Weather sensor, Fridge sensor, Garage door sensor, GPS tracker, Modbus IIoT sensor, Motion-light sensor, Thermostat sensor",
    link:"https://research.unsw.edu.au/projects/toniot-datasets" }
];

const IOT_PROTOCOL_PRIORITY = [
  "MQTT",
  "CoAP",
  "AMQP",
  "XMPP",
  "STOMP",
  "Zigbee",
  "Z-Wave",
  "Thread",
  "BLE",
  "BACnet/IP",
  "KNXnet/IP",
  "Modbus TCP",
  "6LoWPAN",
  "IEEE 802.15.4",
  "MLE",
  "WebSockets",
  "RMI"
];

const ATTACK_CATEGORY_PRIORITY = [
  "DDoS",
  "DoS",
  "Reconnaissance",
  "Brute Force",
  "Spoofing",
  "MITM",
  "Web-based",
  "Data Integrity",
  "Replay",
  "Malware",
  "MQTT-specific",
  "BLE-specific",
  "Z-Wave-specific",
  "Energy Depletion",
  "Commissioning Exploitation",
  "Fuzzing",
  "Device Reset",
  "Jamming",
  "Covert Channel",
  "Payload/Execution",
  "Cyber-Physical Rogue Device",
  "Benign Traffic Only"
];

const ATTACK_CATEGORY_NORMALIZATION = {
  "Credential": "Brute Force",
  "Injection": "Web-based",
  "Mirai Malware": "Malware",
  "Spyware": "Malware"
};

function sortProtocols(protocols) {
  const getPriority = (protocol) => {
    const index = IOT_PROTOCOL_PRIORITY.findIndex((name) => name.toLowerCase() === protocol.toLowerCase().trim());
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };

  return [...protocols].sort((a, b) => {
    const aPriority = getPriority(a);
    const bPriority = getPriority(b);
    if (aPriority !== bPriority) return aPriority - bPriority;
    return a.localeCompare(b);
  });
}

function sortAttackCategories(attackCats, attackDetails) {
  const getCategoryBase = (category) => category.split("(")[0].trim();
  const normalizeCategory = (category) => {
    const base = getCategoryBase(category);
    const normalized = ATTACK_CATEGORY_NORMALIZATION[base] || base;
    return category.replace(base, normalized);
  };
  const getPriority = (category) => {
    const base = getCategoryBase(normalizeCategory(category));
    const index = ATTACK_CATEGORY_PRIORITY.findIndex((name) => name.toLowerCase() === base.toLowerCase());
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };

  const pairs = attackCats.map((category, index) => ({
    category: normalizeCategory(category),
    detail: attackDetails[index] ?? "",
    priority: getPriority(category),
    base: getCategoryBase(normalizeCategory(category))
  }));

  pairs.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.base.localeCompare(b.base);
  });

  return {
    attackCats: pairs.map((item) => item.category),
    attackDetails: pairs.map((item) => item.detail)
  };
}

for (const dataset of DATASETS) {
  dataset.protocols = sortProtocols(dataset.protocols);
  const sortedAttacks = sortAttackCategories(dataset.attackCats, dataset.attackDetails);
  dataset.attackCats = sortedAttacks.attackCats;
  dataset.attackDetails = sortedAttacks.attackDetails;
}

window.DATASETS = DATASETS;
