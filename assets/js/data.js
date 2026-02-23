/* ════════════════════════════════════════════
   IoT Security Hub — Shared Data & Utilities
════════════════════════════════════════════ */

// ── DATASETS ──────────────────────────────
const DATASETS = [
  { id:1, name:"CIC IoT 2023", year:2023, format:"PCAP, CSV", protocols:["Wi-Fi","Zigbee","Z-Wave","TCP","UDP","HTTP","MQTT"], attacks:33, benign:"Yes", testbed:"Physical", institution:"UNB / CIC",
    desc:"105 IoT devices in a smart home topology at CIC Lab, University of New Brunswick. 46 CSV flow features extracted per flow. 33 attacks across 7 categories using tools like hping3, nmap, ettercap, DVWA.",
    attackCats:["DDoS (11)","DoS (4)","Reconnaissance (5)","Web-based (6)","Brute Force (1)","Spoofing (2)","Mirai Botnet (3)"],
    attackDetails:["ACK Fragmentation Flood (hping3), UDP Flood, Slowloris, ICMP Flood, RST-FIN/PSH-ACK Flood, HTTP Flood, Mirai variants","TCP Flood, HTTP Flood, SYN Flood, UDP Flood","Ping Sweep, OS Scan, Vulnerability Scan, Port Scan, Host Discovery (nmap)","SQL Injection (DVWA), Command Injection (DVWA), Backdoor (Remot3d), XSS, Browser Hijacking (beef)","Dictionary Brute Force (nmap, thc-hydra)","ARP Spoofing (ettercap), DNS Spoofing (ettercap)","GREIP Flood, GREETH Flood, UDPPlain (Mirai-Source-Code)"],
    devices:"67 IoT devices (Amazon Echo Dot, IP cameras, sensors), 38 Zigbee/Z-Wave devices through 5 hubs, 7 Raspberry Pis",
    link:"https://www.unb.ca/cic/datasets/iotdataset-2023.html" },
  { id:2, name:"CIC IIoT 2025 (DataSense)", year:2025, format:"PCAP, CSV", protocols:["MQTT","Wi-Fi","HTTP","HTTPS","SSH","Telnet","TCP","UDP"], attacks:50, benign:"Yes", testbed:"Physical", institution:"UNB / CIC",
    desc:"Five-layer IIoT architecture with Eclipse Mosquitto broker on Raspberry Pi. 50 attacks across 8 categories. Logs via Filebeat → Elasticsearch. 259,212 benign packets.",
    attackCats:["DDoS (14)","DoS (14)","Reconnaissance (9)","Web (5)","Brute Force (2)","MITM (3)","Malware/Mirai (2)"],
    attackDetails:["MQTT Connect/Publish Flood, HTTP/ICMP/UDP/TCP variants (hping3, golang-httpflood, mqtt-benchmark)","Similar to DDoS variants, single-source origin","Host Discovery (ARP/TCP/UDP Ping), OS Scan, Port Scan, Service Version Detection, Vulnerability Scan","Backdoor Upload (Remot3d), Command Injection, SQL Injection (sqlmap), Blind SQL Injection, XSS","SSH Brute Force (thc-hydra, SecLists), Telnet Brute Force","ARP Spoofing (ettercap), Impersonation (mqtt-benchmark), IP Spoofing (hping3)","Mirai SYN Flood, Mirai UDP Flood"],
    devices:"15+ Arduino-based industrial sensors, surveillance cameras, smart plugs, Raspberry Pi edge device, Dell PowerEdge server",
    link:"https://www.unb.ca/cic/datasets/iiotdataset-2025.html" },
  { id:3, name:"CIC IoMT 2024", year:2024, format:"PCAP, CSV", protocols:["Wi-Fi","MQTT","BLE","TCP","UDP","ICMP","HTTP","DNS","SSH","ARP"], attacks:18, benign:"Yes", testbed:"Hybrid", institution:"UNB / CIC",
    desc:"Healthcare IoMT dataset. 40 devices (25 real + 15 simulated via IoT Flock). Includes Bluetooth Low Energy attacks. Gigamon Network Tap captures all traffic.",
    attackCats:["DDoS (4)","DoS (4)","Reconnaissance (4)","MQTT-specific (5)","Spoofing (1)","Bluetooth DoS (1)"],
    attackDetails:["SYN Flood, TCP Flood, ICMP Flood, UDP Flood (hping3, udp-flood)","SYN Flood, TCP Flood, ICMP Flood, UDP Flood","Ping Sweep, Vulnerability Scan (Nikto), OS Scan, Port Scan","Malformed Data (IoT-Flock), DoS/DDoS Connect Flood (mqtt-stresser), DoS/DDoS Publish Flood","ARP Spoofing (ettercap)","BLE DoS (gattacker, bettercap)"],
    devices:"Heart rate monitors, SpO2 rings, infusion pumps, blood pressure monitors, biomedical sensors",
    link:"https://www.unb.ca/cic/datasets/iomt-dataset-2024.html" },
  { id:4, name:"BACnet Attack Dataset", year:2024, format:"PCAP", protocols:["BACnet/IP"], attacks:5, benign:"Yes", testbed:"Simulated", institution:"Academic",
    desc:"Building automation attacks using BACnet/IP. Simulated AHU and Chiller controllers using real building data from Tampines Hub, Singapore. Python simulation code included.",
    attackCats:["Data Integrity (2)","Covert Channel (3)"],
    attackDetails:["Falsifying Attack (injecting fabricated data), Modifying Attack (altering legitimate data in transit)","Plain Text Covert Channel, Hashed Covert Channel (SHA3-256), Encrypted Covert Channel (AES-256)"],
    devices:"Simulated AHU Controller, Chiller Controller, HVAC sensors and actuators",
    link:"#" },
  { id:5, name:"NREL Cyber Faults Dataset", year:2023, format:"PCAP, CSV", protocols:["BACnet/IP"], attacks:8, benign:"Yes", testbed:"Cyber Range", institution:"NREL / UCF",
    desc:"Cyber-physical attacks causing mechanical faults in buildings. NREL ARIES Cyber Range with Hardware-in-the-Loop simulation at University of Central Florida.",
    attackCats:["Cyber-Physical Rogue Device (8 scenarios)"],
    attackDetails:["Rogue device sends unauthorized BACnet WriteProperty commands to VAV boxes, damper actuators, AHU components, cooling coil valves"],
    devices:"BAS centralized controller, simulated BACnet devices, Alfalfa-simulated building plant",
    link:"#" },
  { id:6, name:"MU-IoT Dataset", year:2024, format:"PCAP, CSV", protocols:["MQTT","AMQP","CoAP","XMPP","STOMP","HTTP","WebSockets"], attacks:16, benign:"Yes", testbed:"Hybrid", institution:"Manipur University",
    desc:"Most protocol-diverse dataset. 34.8M records, 121 flow features, 3 label columns. RabbitMQ handles MQTT/AMQP/STOMP. CoAP via ESP32. Includes rare spyware/keylogging attack.",
    attackCats:["DoS/DDoS (6)","Reconnaissance (2)","Injection (3)","Brute Force (2)","MITM (2)","Spyware (1)"],
    attackDetails:["DNS Amplification, HTTP Flooding, Slowloris, ICMP/TCP/UDP Flooding (hping3, bonesi)","Network Scanning, Vulnerability Scanning (nmap, nikto)","SQL Injection (sqlmap), Upload Attack, XSS (XSStrike)","Brute Force (thc-hydra), Dictionary Attack (thc-hydra, metasploit, legba)","ARP Poisoning (ettercap), Network Sniffing (ettercap)","Keylogging (custom code)"],
    devices:"ESP32 microcontrollers (CoAP), ESP32Cam (WebSockets), emulated IoT devices, RabbitMQ broker, Openfire server",
    link:"#" },
  { id:7, name:"KNXnet/IP IDS Dataset", year:2025, format:"PCAP, CSV", protocols:["KNXnet/IP","KNX"], attacks:8, benign:"Yes", testbed:"Physical", institution:"Academic",
    desc:"8 attack scenarios (KNXA01–KNXA08) targeting KNX building automation (HVAC, lighting, blinds). Physical KNX bus installation with Wireshark captures.",
    attackCats:["Fuzzing (1)","Device Reset (1)","Reconnaissance (2)","Flooding/Unauthorized Access (4)"],
    attackDetails:["M_PropRead Fuzzing (KNXSmartFuzzer) — discovering device properties","M_Reset — forcing unauthorized device resets","Network Scanning (IP), Bus Scanning (KNX bus via KNXnet/IP gateway)","GroupValue Write Flooding (valid), GroupValue Read/Write Flooding (fuzzed), Unauthorized Write/Read"],
    devices:"KNX bus devices (actuators, sensors, controllers), KNXnet/IP gateway/interface",
    link:"#" },
  { id:8, name:"CIC Modbus Dataset 2023", year:2023, format:"PCAP, CSV", protocols:["Modbus TCP/IP"], attacks:9, benign:"Yes", testbed:"Simulated (Docker)", institution:"UNB / CIC",
    desc:"Docker-based ICS simulation aligned with MITRE ICS ATT&CK framework. Attacks from 3 vantage points: external attacker, compromised IED, compromised SCADA HMI.",
    attackCats:["Reconnaissance (1)","Availability/DoS (2)","Integrity (3)","Brute Force (1)","Payload/Execution (1)","Replay (1)"],
    attackDetails:["Network Reconnaissance (pymodbus, nmap, ModTester)","Query Flooding, Delay Response","False Data Injection (voltage values), Modify Length Parameters, Frame Stacking","Brute Force Write (pymodbus, scapy)","Loading Payloads onto IED devices","Baseline Replay of legitimate Modbus traffic"],
    devices:"Docker containers: IED1A, IED1B (attacker), IED4C, SCADA HMI, Attacker node",
    link:"https://www.unb.ca/cic/datasets/modbus-dataset-2023.html" },
  { id:9, name:"MQTT-IoT-IDS2020", year:2020, format:"PCAP, CSV", protocols:["MQTT"], attacks:4, benign:"Yes", testbed:"Simulated", institution:"Academic",
    desc:"MQTT-focused dataset with 3 feature abstraction levels: packet-based, unidirectional flow, bidirectional flow. 5 independent scenarios (1 normal + 4 attacks).",
    attackCats:["Reconnaissance/Scanning (2)","Brute Force (2)"],
    attackDetails:["Nmap Aggressive Scan (OS/version/script/traceroute), Nmap UDP Scan","Sparta SSH Brute Force, MQTT Broker Brute Force"],
    devices:"12 MQTT sensors (simulated), MQTT broker, 1 simulated camera, 1 attacker machine",
    link:"#" },
  { id:10, name:"MQTTset", year:2020, format:"PCAP", protocols:["MQTT"], attacks:5, benign:"Yes", testbed:"Simulated", institution:"Academic",
    desc:"8 simulated IoT sensors on Eclipse Mosquitto v1.6.2 broker. Simulates smart home/office environment. Includes SlowITe — an MQTT-specific slow DoS attack.",
    attackCats:["Denial of Service (2)","Flooding (2)","Brute Force (1)"],
    attackDetails:["DoS Multiple Connections (MQTT-malaria), SlowITe (exploits MQTT keep-alive mechanism)","MQTT Publish Flood (IoT-Flock), Malformed Data (crafted invalid MQTT packets)","Brute Force Authentication (repeated CONNECT attempts)"],
    devices:"Temperature, Humidity, Light, CO-Gas, Motion, Smoke, Door Locker, Fan sensors — Eclipse Mosquitto broker",
    link:"#" },
  { id:11, name:"CRAWDAD cmu/thread-devboards", year:2022, format:"PCAP", protocols:["Thread","6LoWPAN","MLE","DTLS","IEEE 802.15.4"], attacks:6, benign:"Partial", testbed:"Physical", institution:"CMU",
    desc:"Physical Thread mesh network on Adafruit Feather nRF52840 boards. Attacks target Thread commissioning and Sleepy End Device battery life. 19 experiments captured.",
    attackCats:["Energy Depletion (2)","Commissioning Exploitation (4)"],
    attackDetails:["Spoofed MAC Data Request Injection (sleep prevention), MLE Packet Injection with large frame counters","Selective Jamming of Thread Beacons, Commissioner Impersonation, DTLS Key Exchange Exploitation, Joiner Brute Force"],
    devices:"Adafruit Feather nRF52840 Express, ATUSB IEEE 802.15.4 adapter, OpenThread FTD/MTD firmware",
    link:"https://crawdad.org/cmu/thread-devboards/" },
  { id:12, name:"CRAWDAD cmu/zigbee-eda", year:2021, format:"PCAP", protocols:["Zigbee","IEEE 802.15.4","NWK","AES-128"], attacks:8, benign:"Yes", testbed:"Physical", institution:"CMU",
    desc:"SmartThings Hub as Trust Center/Coordinator. WIDS sensors (HiveGuard on Raspberry Pi). USRP N210 SDR for PHY-layer I/Q capture. AES-128 CCM* NWK encryption.",
    attackCats:["DoS/Energy Depletion (2)","Spoofing (3)","Network Disruption (3+)"],
    attackDetails:["Energy Depletion (selective jamming + spoofed NWK packets), MAC ACK Spoofing","NWK Frame Spoofing, MAC Acknowledgment Spoofing, Beacon Spoofing","PAN ID Conflict Attack, Selective Jamming of Network Update Commands, Jamming of Rejoin Responses"],
    devices:"Samsung SmartThings Hub v3, Motion Sensor, Yale door locks, Smart Bulb, OSRAM Lightify, Sengled bulbs",
    link:"https://crawdad.org/cmu/zigbee-eda/" },
  { id:13, name:"ZBDS2023 Zigbee Dataset", year:2023, format:"PCAP", protocols:["Zigbee","IEEE 802.15.4","ZLL"], attacks:"Multi", benign:"Yes", testbed:"Real Home", institution:"Academic",
    desc:"10-day capture in a real occupied 100m² smart home. Zigbee Light Link profile on Philips Hue. RSSI from TI CC2531 firmware replaces FCS bytes for spoofing detection.",
    attackCats:["Spoofing/Impersonation","Flooding/DoS","Replay"],
    attackDetails:["Forged IEEE 802.15.4 frames with legitimate device addresses (killerbee, Z3sec, zigator)","Repeated spoofed frames causing resource depletion (killerbee)","Retransmission of previously captured legitimate frames (killerbee, Z3sec)"],
    devices:"10 Philips Hue devices: Bridge (coordinator), bulbs, dimmer switches, motion sensor",
    link:"#" },
  { id:14, name:"ZigBeeNet Dataset", year:2024, format:"PCAP", protocols:["Zigbee","IEEE 802.15.4","NWK"], attacks:0, benign:"Yes (all)", testbed:"Real Home", institution:"Academic",
    desc:"Benign-only baseline. 20 days of normal Zigbee smart home traffic. Fully decrypted — network key provided. 15 Philips Hue devices. Useful as normality baseline.",
    attackCats:["None — Benign Traffic Only"],
    attackDetails:["Intended as normal traffic baseline to pair with attack datasets like ZBDS2023"],
    devices:"Philips Hue Bridge, Smart Plug, White & Color Ambiance Play Light Bars, Hue Go, various bulbs and sensors",
    link:"#" },
  { id:15, name:"BCCC-IoTIDS-ZWave-2025", year:2025, format:"PCAP, CSV", protocols:["Z-Wave","MQTT","TCP","UDP","IP"], attacks:88, benign:"Yes", testbed:"Physical", institution:"York University",
    desc:"Most comprehensive Z-Wave security dataset. 50+ IoT devices, 5-month capture at York University. 401+ features via IoT-ZwaveNetLyzer. 81 IP + 24 Z-Wave attack classes.",
    attackCats:["DDoS","DoS","Reconnaissance","Brute Force","Spoofing","Web-based","Mirai","MITM","Z-Wave-specific (24 classes)","MQTT-specific"],
    attackDetails:["SYN/UDP/ICMP/HTTP/TCP Flood variants","Slowloris, SlowHTTPTest, GoldenEye, RUDY","Port Scanning, OS Fingerprinting, Vulnerability Scanning","SSH/FTP/Telnet Brute Force, Dictionary Attacks","ARP/DNS/IP Spoofing","SQL Injection, XSS, Command Injection","Mirai Scanning, Infection, DDoS variants","Man-in-the-Middle attacks","Z-Wave Replay, Jamming, Spoofing, Flooding, Unauthorized Command Injection, Network Disruption, Downgrade Attack","MQTT Flooding, Unauthorized Access, Message Injection, Spoofing"],
    devices:"Z-Wave sensors (door, motion, temp, humidity, water, smoke), actuators, smart plugs, IP cameras, Zigbee devices, Raspberry Pis",
    link:"#" },
  { id:16, name:"TON_IoT Dataset", year:2020, format:"PCAP, CSV, logs", protocols:["MQTT","Modbus TCP/IP","HTTP","TCP/IP","UDP","ICMP"], attacks:9, benign:"Yes", testbed:"Hybrid", institution:"UNSW",
    desc:"Three-layer edge/fog/cloud architecture. Node-RED, Mosquitto MQTT, Zeek/Bro IDS. 7 IoT sensor types. Extensively labelled (binary + 10-class). Kali Linux attack VMs.",
    attackCats:["DoS/DDoS (2)","Reconnaissance (1)","Web-based (2)","Credential (1)","MITM (1)","Malware (2)"],
    attackDetails:["DoS, DDoS (Nmap, Hping3, GoldenEye)","Scanning (Nmap, Xprobe2)","XSS, SQL/Command Injection (Node-RED, DVWA)","Password cracking / brute force (Metasploit, Hydra)","Man-in-the-Middle","Backdoor (persistent remote access), Ransomware (data encryption)"],
    devices:"Weather sensor, Fridge sensor, Garage door sensor, GPS tracker, Modbus IIoT sensor, Motion-light sensor, Thermostat sensor",
    link:"https://research.unsw.edu.au/projects/toniot-datasets" }
];

// ── PROTOCOLS ─────────────────────────────
const PROTOCOLS = [
  { icon:"📡", name:"MQTT", full:"Message Queuing Telemetry Transport", stack:"Application Layer", standard:"OASIS Standard", freq:"Any (IP-based)", range:"Internet-scale", power:"Low", desc:"Lightweight publish/subscribe protocol designed for constrained devices and unreliable networks. Operates over TCP/IP. QoS levels 0–2. Widely used across smart home, healthcare, and industrial IoT. Primary protocol in 6 of 16 datasets." },
  { icon:"🏭", name:"Modbus TCP/IP", full:"Modbus over TCP/IP (Port 502)", stack:"Application Layer", standard:"Modbus.org", freq:"Ethernet", range:"LAN/WAN", power:"N/A", desc:"Industrial serial communication protocol adapted for TCP/IP. Client/server model. No built-in authentication or encryption — highly vulnerable to unauthenticated commands. Backbone of SCADA/ICS environments." },
  { icon:"🏢", name:"BACnet/IP", full:"Building Automation and Control Networks (ASHRAE 135)", stack:"Application Layer", standard:"ASHRAE 135", freq:"Ethernet", range:"LAN/WAN", power:"N/A", desc:"ANSI/ASHRAE standard for building automation covering HVAC, fire safety, lighting, and access control. Runs natively over IP. Vulnerable to data integrity attacks and unauthorized WriteProperty commands." },
  { icon:"🏠", name:"KNX/IP", full:"KNX over IP (EN 50090 / ISO 22510)", stack:"Application Layer", standard:"KNX Association", freq:"Ethernet", range:"LAN", power:"N/A", desc:"European building automation standard allowing KNX bus topology to integrate with IP networks via KNXnet/IP gateways. Used in lighting, HVAC, blinds, and energy management. Susceptible to fuzzing, scanning, flooding." },
  { icon:"🐝", name:"Zigbee", full:"Zigbee (IEEE 802.15.4 + Zigbee PRO)", stack:"MAC+Network+Application", standard:"Zigbee Alliance / CSA", freq:"2.4 GHz ISM", range:"10–100m", power:"Very Low", desc:"Low-power wireless mesh network protocol. AES-128 CCM* encryption at NWK layer. MAC layer security disabled per Zigbee PRO spec. Vulnerable to energy depletion, MAC/NWK spoofing, jamming, PAN ID conflict attacks." },
  { icon:"📻", name:"Z-Wave", full:"Z-Wave (ITU-T G.9959)", stack:"MAC+Network+Application", standard:"Z-Wave Alliance / CSA", freq:"868/900 MHz", range:"30–100m", power:"Very Low", desc:"Sub-GHz mesh protocol for smart home automation. S2 security framework uses AES-128 and Curve25519 ECDH. Most extensively covered in BCCC-ZWave-2025 with 24 Z-Wave-specific attack classes." },
  { icon:"🧵", name:"Thread", full:"Thread (over IEEE 802.15.4)", stack:"MAC+Network+Application", standard:"Thread Group / CSA", freq:"2.4 GHz ISM", range:"10–30m", power:"Very Low", desc:"IPv6-based low-power wireless mesh designed for smart home reliability. Uses DTLS for commissioning security with J-PAKE passphrase. Vulnerable to commissioner impersonation, MAC spoofing, and Sleepy End Device energy depletion." },
  { icon:"🔵", name:"BLE", full:"Bluetooth Low Energy (Bluetooth 4.0+)", stack:"PHY+MAC+L2CAP+ATT/GATT", standard:"Bluetooth SIG", freq:"2.4 GHz ISM", range:"1–100m", power:"Very Low", desc:"Short-range wireless protocol for personal area networks. Extensively used in wearables and healthcare IoMT devices. CICIoMT2024 includes BLE DoS attacks using gattacker and bettercap against GATT services." },
  { icon:"📦", name:"CoAP", full:"Constrained Application Protocol (RFC 7252)", stack:"Application Layer", standard:"IETF RFC 7252", freq:"Any (UDP)", range:"Internet-scale", power:"Low", desc:"RESTful protocol for constrained IoT devices, analogous to HTTP but over UDP. Supports multicast and asynchronous message exchange. Featured in MU-IoT via ESP32 server. DTLS for security." },
  { icon:"🐇", name:"AMQP", full:"Advanced Message Queuing Protocol", stack:"Application Layer", standard:"OASIS AMQP 1.0", freq:"Any (TCP)", range:"Internet-scale", power:"High", desc:"Enterprise-grade message-oriented middleware protocol. More heavyweight than MQTT — not suitable for battery-powered sensors. Featured in MU-IoT via RabbitMQ broker alongside MQTT and STOMP." },
  { icon:"💬", name:"XMPP", full:"Extensible Messaging and Presence Protocol", stack:"Application Layer", standard:"IETF RFC 6120", freq:"Any (TCP)", range:"Internet-scale", power:"High", desc:"XML-based messaging protocol adapted for IoT in some scenarios. Requires substantial resources — not suitable for constrained devices. Featured in MU-IoT via Openfire server. Rarely seen in IoT security datasets." },
  { icon:"⚡", name:"STOMP", full:"Simple Text Oriented Messaging Protocol", stack:"Application Layer", standard:"STOMP spec", freq:"Any (TCP/WebSocket)", range:"Internet-scale", power:"Medium", desc:"Simple publish/subscribe text protocol, subset of AMQP functionality. Text-based framing makes it easy to implement. Featured in MU-IoT via RabbitMQ. Underrepresented in IoT security research." },
  { icon:"🌐", name:"Wi-Fi (802.11)", full:"IEEE 802.11 WLAN", stack:"PHY+MAC", standard:"IEEE 802.11", freq:"2.4/5/6 GHz", range:"30–100m", power:"Medium-High", desc:"Dominant wireless LAN standard for IoT. Used in CICIoT2023 (smart home), CICIoMT2024 (healthcare), and DataSense (IIoT). Typically the carrier network for TCP/IP-based IoT protocols. WPA3 for modern security." },
  { icon:"🔢", name:"6LoWPAN", full:"IPv6 over Low-Power Wireless PANs (RFC 4944)", stack:"Adaptation Layer", standard:"IETF RFC 4944", freq:"868MHz/2.4GHz", range:"10–30m", power:"Very Low", desc:"Adaptation layer enabling IPv6 over IEEE 802.15.4 radio. Used as the network layer for Thread. Provides header compression to fit IPv6 packets within 802.15.4 127-byte frames. Featured in CMU Thread dataset." },
  { icon:"🔗", name:"RPL", full:"Routing Protocol for Low-Power Lossy Networks (RFC 6550)", stack:"Network Layer", standard:"IETF RFC 6550", freq:"802.15.4", range:"Mesh", power:"Very Low", desc:"IPv6 distance-vector routing protocol for constrained networks. Forms Destination-Oriented Directed Acyclic Graphs (DODAGs). Used in smart metering, environmental monitoring, and industrial wireless sensor networks." }
];

// ── ATTACK TAXONOMY ───────────────────────
const ATTACKS = [
  { cat:"DDoS", color:"red", attacks:[
    { tech:"Volume Flooding (SYN / UDP / ICMP / TCP / HTTP / ACK / RST-FIN / PSH-ACK)", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"MQTT Connect / Publish Flood", ds:["DataSense","CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"Fragmentation Flooding (ACK / UDP / ICMP Fragmentation)", ds:["CICIoT2023","DataSense"] },
    { tech:"Mirai DDoS (GREIP / GREETH / UDPPlain / SYN variants)", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] }
  ]},
  { cat:"DoS", color:"amber", attacks:[
    { tech:"TCP / UDP / HTTP / SYN / ICMP Flood (single-source)", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Slowloris / SlowHTTPTest / GoldenEye / RUDY (slow-rate application DoS)", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"MQTT DoS — Connect Flood / Publish Flood / SlowITe (keep-alive abuse)", ds:["CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"Modbus Query Flooding / Delay Response Attack", ds:["CIC Modbus2023"] },
    { tech:"KNX Flooding — GroupValue Write/Read (valid & fuzzed)", ds:["KNXnet/IP"] },
    { tech:"BLE Denial of Service (gattacker / bettercap)", ds:["CICIoMT2024"] }
  ]},
  { cat:"Reconnaissance", color:"purple", attacks:[
    { tech:"Port Scan, OS Scan, Ping Sweep, Host Discovery (Nmap: TCP SYN/ACK/UDP/stealth variants)", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","MQTT-IDS2020","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Vulnerability Scan (Nmap + Vulscan / Nikto)", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025"] },
    { tech:"Modbus Network Reconnaissance (pymodbus, ModTester, Nmap)", ds:["CIC Modbus2023"] },
    { tech:"KNX Network & Bus Scanning (KNXSmartFuzzer, knxmap)", ds:["KNXnet/IP"] },
    { tech:"Thread Commissioning Exploitation (beacon/discovery scanning)", ds:["Thread (CMU)"] }
  ]},
  { cat:"Brute Force / Credential", color:"cyan", attacks:[
    { tech:"SSH Brute Force (Hydra / Sparta / SecLists)", ds:["CICIoT2023","DataSense","MQTT-IDS2020","BCCC-ZWave2025"] },
    { tech:"MQTT Broker Authentication Brute Force", ds:["MQTT-IDS2020","MQTTset","BCCC-ZWave2025"] },
    { tech:"Telnet / FTP Brute Force (Hydra)", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"Dictionary / Credential Stuffing (Hydra, Metasploit, legba)", ds:["CICIoT2023","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Modbus Register Brute Force Write", ds:["CIC Modbus2023"] }
  ]},
  { cat:"Web-based Attacks", color:"green", attacks:[
    { tech:"SQL Injection (DVWA / sqlmap / payload lists / blind variants)", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Cross-Site Scripting — XSS (DVWA / XSStrike / payload lists)", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Command Injection (DVWA / command-injection-payload-list)", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"Backdoor / Malware Upload (DVWA, Remot3d)", ds:["CICIoT2023","DataSense","TON_IoT"] },
    { tech:"File Upload Attack / Browser Hijacking (BeEF)", ds:["CICIoT2023","MU-IoT"] }
  ]},
  { cat:"Spoofing", color:"amber", attacks:[
    { tech:"ARP Spoofing / Poisoning (ettercap)", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025"] },
    { tech:"DNS Spoofing (ettercap)", ds:["CICIoT2023","BCCC-ZWave2025"] },
    { tech:"IP Spoofing (hping3)", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"MQTT Impersonation (mqtt-benchmark)", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"Zigbee MAC / NWK / Beacon Spoofing, Frame Forging (killerbee, Z3sec)", ds:["Zigbee-EDA","ZBDS2023"] },
    { tech:"Thread Spoofed MAC Data Request / MLE Packet Injection", ds:["Thread (CMU)"] }
  ]},
  { cat:"MITM / Interception", color:"purple", attacks:[
    { tech:"Man-in-the-Middle (ARP-based session hijacking)", ds:["DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Network Sniffing / Traffic Interception (ettercap)", ds:["MU-IoT"] },
    { tech:"Thread Commissioner Impersonation / Joiner Hijacking (DTLS)", ds:["Thread (CMU)"] }
  ]},
  { cat:"Malware / Ransomware / Botnet", color:"red", attacks:[
    { tech:"Mirai Botnet (scanning, infection, C2-driven DDoS)", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Ransomware (data encryption and ransom demand)", ds:["TON_IoT"] },
    { tech:"Backdoor (persistent unauthorized remote access)", ds:["TON_IoT"] },
    { tech:"Spyware / Keylogging (custom code)", ds:["MU-IoT"] }
  ]},
  { cat:"Data Integrity / False Data Injection", color:"amber", attacks:[
    { tech:"Modbus False Data Injection (voltage/sensor values), Frame Length Manipulation, Frame Stacking", ds:["CIC Modbus2023"] },
    { tech:"BACnet Falsifying / Modifying Attack (injecting or altering data in transit)", ds:["BACnet Atk"] },
    { tech:"Cyber-Physical Rogue Device (unauthorized BACnet WriteProperty to building actuators)", ds:["CyberFaults"] }
  ]},
  { cat:"Replay Attacks", color:"cyan", attacks:[
    { tech:"Modbus Baseline Replay (replaying captured legitimate Modbus traffic)", ds:["CIC Modbus2023"] },
    { tech:"Zigbee Frame Replay (retransmission of captured frames, killerbee)", ds:["ZBDS2023"] },
    { tech:"Z-Wave Replay Attack", ds:["BCCC-ZWave2025"] }
  ]},
  { cat:"Covert Channel", color:"green", attacks:[
    { tech:"BACnet Covert Channel — Plain Text, Hashed (SHA3-256), Encrypted (AES-256)", ds:["BACnet Atk"] }
  ]},
  { cat:"Energy Depletion", color:"amber", attacks:[
    { tech:"Thread Sleepy End Device Battery Drain (spoofed MAC Data Request / MLE frame counter injection)", ds:["Thread (CMU)"] },
    { tech:"Zigbee Energy Depletion (selective jamming + spoofed NWK packets with inflated frame counters)", ds:["Zigbee-EDA"] }
  ]},
  { cat:"Jamming / RF Interference", color:"red", attacks:[
    { tech:"Selective Jamming of IEEE 802.15.4 frames (Thread beacons, MLE, discovery responses)", ds:["Thread (CMU)"] },
    { tech:"Zigbee Selective Jamming (Data Requests, Network Update Commands, Rejoin Responses)", ds:["Zigbee-EDA"] }
  ]},
  { cat:"Fuzzing", color:"purple", attacks:[
    { tech:"KNX M_PropRead Fuzzing (KNXSmartFuzzer) — device property discovery/exploitation", ds:["KNXnet/IP"] },
    { tech:"KNX GroupValue Write/Read Fuzzing (malformed KNX bus messages)", ds:["KNXnet/IP"] },
    { tech:"Malformed MQTT Packet Injection (crafted invalid packets to crash broker)", ds:["MQTTset"] }
  ]},
  { cat:"Unauthorized Access / Device Control", color:"amber", attacks:[
    { tech:"KNX Unauthorized GroupValue Write (manipulating lighting/HVAC/blinds without authorization)", ds:["KNXnet/IP"] },
    { tech:"KNX M_Reset (forced device reset disrupting availability)", ds:["KNXnet/IP"] },
    { tech:"Modbus Payload Execution (loading malicious payloads onto IED devices)", ds:["CIC Modbus2023"] }
  ]},
  { cat:"Wireless Network Disruption", color:"cyan", attacks:[
    { tech:"Zigbee PAN ID Conflict Attack (beacon spoofing triggers coordinator PAN ID change)", ds:["Zigbee-EDA"] },
    { tech:"Z-Wave Network Disruption (targeting pairing/inclusion), Jamming, Flooding", ds:["BCCC-ZWave2025"] }
  ]}
];

// ── TOOLS ─────────────────────────────────
const TOOLS = [
  { tool:"hping3",       cat:"Network",      link:"http://www.hping.org/", attacks:"SYN/ICMP/UDP/TCP Flood, IP Spoofing, Fragmentation Flooding", used:"CICIoT2023, DataSense, CICIoMT2024, MU-IoT, BCCC-ZWave2025", desc:"Network packet generator and analyzer. De-facto standard for crafting custom TCP/IP packets for flooding attacks." },
  { tool:"nmap",         cat:"Recon",        link:"https://nmap.org/", attacks:"Port Scan, OS Detection, Service Version, Vuln Scan, Host Discovery (+ NSE scripts)", used:"CICIoT2023, DataSense, CICIoMT2024, MU-IoT, BCCC-ZWave2025, TON_IoT", desc:"The industry-standard network scanner. NSE scripts extend it to vulnerability detection. Used in virtually every IoT dataset for reconnaissance." },
  { tool:"thc-hydra",    cat:"Brute Force",  link:"https://github.com/vanhauser-thc/thc-hydra", attacks:"SSH Brute Force, Telnet/FTP Brute Force, Dictionary Attack", used:"CICIoT2023, DataSense, MU-IoT, BCCC-ZWave2025, TON_IoT", desc:"Fast and flexible online password cracking tool supporting 50+ protocols. Used across multiple datasets for SSH, Telnet, and FTP credential attacks." },
  { tool:"ettercap",     cat:"MITM",         link:"https://www.ettercap-project.org/", attacks:"ARP Spoofing, DNS Spoofing, Network Sniffing, MITM", used:"CICIoT2023, DataSense, CICIoMT2024, MU-IoT, BCCC-ZWave2025", desc:"Comprehensive suite for MITM attacks. Supports ARP poisoning, DNS spoofing, and traffic interception. Used in 5 datasets." },
  { tool:"metasploit",   cat:"Brute Force",  link:"https://www.metasploit.com/", attacks:"Credential Attacks, Password Cracking, Exploit Framework", used:"MU-IoT, BCCC-ZWave2025, TON_IoT", desc:"The world's most widely used penetration testing framework. Used in IoT datasets primarily for credential attacks and auxiliary scanning modules." },
  { tool:"sqlmap",       cat:"Web",          link:"https://sqlmap.org/", attacks:"Automated SQL Injection, Blind SQL Injection, Database Enumeration", used:"DataSense, MU-IoT, BCCC-ZWave2025", desc:"Automatic SQL injection and database takeover tool. Supports detection of all major SQL injection techniques including blind and time-based." },
  { tool:"DVWA",         cat:"Web",          link:"https://dvwa.co.uk/", attacks:"SQL Injection, Command Injection, XSS, File Upload, Backdoor", used:"CICIoT2023, DataSense, TON_IoT", desc:"Damn Vulnerable Web Application — a PHP/MySQL web app used as a target for web-based attack demonstrations in IoT network testbeds." },
  { tool:"slowloris",    cat:"Network",      link:"https://github.com/gkbrk/slowloris", attacks:"Slow HTTP DoS (keeps connections open indefinitely)", used:"CICIoT2023, MU-IoT", desc:"Slow-rate DoS tool that holds many concurrent HTTP connections open by sending partial requests, exhausting server connection pools." },
  { tool:"golang-httpflood", cat:"Network",  link:"https://github.com/nicowillis/golang-httpflood", attacks:"HTTP Flood (DDoS/DoS) at high packet rates", used:"CICIoT2023, DataSense", desc:"High-performance Go-based HTTP flooding tool used to generate volumetric HTTP-layer DDoS traffic in CIC datasets." },
  { tool:"Mirai-Source-Code", cat:"Network", link:"https://github.com/jgamblin/Mirai-Source-Code", attacks:"GREIP Flood, GREETH Flood, UDPPlain, Mirai SYN/UDP variants", used:"CICIoT2023, DataSense, BCCC-ZWave2025", desc:"Leaked source code of the Mirai botnet. Used in datasets to generate authentic Mirai-style C2-driven DDoS traffic patterns." },
  { tool:"mqtt-benchmark", cat:"IoT Protocol", link:"https://github.com/krylovsk/mqtt-benchmark", attacks:"MQTT Connect Flood, MQTT Publish Flood, MQTT Impersonation", used:"DataSense, CICIoMT2024, BCCC-ZWave2025", desc:"MQTT performance benchmark tool repurposed as a stress-testing and impersonation attack tool for MQTT brokers." },
  { tool:"IoT-Flock",    cat:"IoT Protocol", link:"https://github.com/Fernerkundung/IoT-Flock", attacks:"Malformed MQTT Data, MQTT Publish Flood, Simulated IoT Traffic", used:"CICIoMT2024, MQTTset", desc:"IoT traffic generator supporting MQTT and CoAP. Used both for generating benign IoT traffic and malformed/flooding attack traffic." },
  { tool:"mqtt-stresser", cat:"IoT Protocol",link:"https://github.com/inovex/mqtt-stresser", attacks:"MQTT Connect Flood (DoS/DDoS)", used:"CICIoMT2024", desc:"MQTT broker stress-testing tool that generates concurrent CONNECT floods to overwhelm Eclipse Mosquitto and similar brokers." },
  { tool:"MQTT-malaria", cat:"IoT Protocol", link:"https://github.com/remakeelectric/mqtt-malaria", attacks:"DoS via many simultaneous MQTT connections", used:"MQTTset", desc:"MQTT load testing tool that opens many simultaneous broker connections, exhausting connection limits for DoS purposes." },
  { tool:"gattacker",    cat:"Wireless",     link:"https://github.com/securing/gattacker", attacks:"BLE MITM, GATT service manipulation, BLE DoS", used:"CICIoMT2024", desc:"Node.js-based BLE GATT attack tool allowing impersonation and relay attacks against Bluetooth Low Energy devices and services." },
  { tool:"bettercap",    cat:"MITM",         link:"https://www.bettercap.org/", attacks:"BLE DoS, Wi-Fi MITM, ARP spoofing, Network Reconnaissance", used:"CICIoMT2024", desc:"Modern network attack and surveillance framework. Swiss-army knife of MITM and sniffing attacks, supporting Wi-Fi, BLE, and wired networks." },
  { tool:"killerbee",    cat:"Wireless",     link:"https://github.com/riverloopsec/killerbee", attacks:"Zigbee/802.15.4 Spoofing, Flooding, Replay, Frame Injection", used:"ZBDS2023", desc:"Framework for attacking and auditing ZigBee and IEEE 802.15.4 networks. Supports packet injection, replay, and sniffing with compatible USB adapters." },
  { tool:"Z3sec",        cat:"Wireless",     link:"https://github.com/IoTsec/Z3sec", attacks:"Zigbee Security Analysis, Spoofing, Replay", used:"ZBDS2023", desc:"Python-based Zigbee security evaluation tool for analyzing and testing Zigbee network security including frame injection and spoofing." },
  { tool:"zigator",      cat:"Wireless",     link:"https://github.com/akestoridis/zigator", attacks:"Zigbee Frame Injection, Spoofing Analysis", used:"ZBDS2023", desc:"Security analysis tool for Zigbee networks supporting packet injection, traffic analysis, and attack evaluation against IEEE 802.15.4 networks." },
  { tool:"KNXSmartFuzzer", cat:"IoT Protocol", link:"https://github.com/isteps-sps-lab/bf-for-iot", attacks:"KNX M_PropRead Fuzzing, M_Reset, GroupValue Flooding", used:"KNXnet/IP", desc:"KNX-specific fuzzing framework designed to discover vulnerabilities in KNX building automation devices through malformed message injection." },
  { tool:"knxmap",       cat:"Recon",        link:"https://github.com/ernw/knxmap", attacks:"KNX Network Scanning, Device Discovery, Service Enumeration", used:"KNXnet/IP", desc:"KNXnet/IP scanning and exploitation toolkit for discovering KNX gateways, interfaces, and bus devices on IP networks." },
  { tool:"pymodbus",     cat:"ICS/OT",       link:"https://github.com/pymodbus-dev/pymodbus", attacks:"Modbus Reconnaissance, Brute Force Write, False Data Injection, Replay", used:"CIC Modbus2023", desc:"Full-featured Modbus protocol implementation in Python. Used both for legitimate ICS development and for crafting Modbus attack traffic in research." },
  { tool:"ModTester",    cat:"ICS/OT",       link:"#", attacks:"Modbus Testing, Payload Execution, Protocol-layer Attacks", used:"CIC Modbus2023", desc:"Modbus protocol testing tool used alongside pymodbus and nmap for reconnaissance, payload execution, and fuzzing of Modbus TCP/IP devices." },
  { tool:"scapy",        cat:"Network",      link:"https://scapy.net/", attacks:"Modbus Frame Manipulation, Custom Packet Crafting, Protocol Fuzzing", used:"CIC Modbus2023", desc:"Powerful Python packet manipulation library. Used for custom Modbus frame construction, length parameter manipulation, and frame stacking attacks." },
  { tool:"bacpypes",     cat:"ICS/OT",       link:"https://bacpypes.readthedocs.io/", attacks:"BACnet Falsifying, Modifying, Covert Channel Attacks", used:"BACnet Atk", desc:"Pure-Python BACnet protocol stack. Used to implement custom BACnet attack scripts including data falsification, modification, and covert channel injection." },
  { tool:"BAC0",         cat:"ICS/OT",       link:"https://bac0.readthedocs.io/", attacks:"BACnet Testing and Attack Scripting", used:"BACnet Atk", desc:"Python scripting library for BACnet device interaction. Used alongside bacpypes for building BACnet attack automation scripts in testbed environments." },
  { tool:"vulscan",      cat:"Recon",        link:"https://github.com/scipag/vulscan", attacks:"Vulnerability Scanning via Nmap NSE", used:"CICIoT2023, DataSense, CICIoMT2024, MU-IoT", desc:"Nmap NSE script that cross-references service version scan results against offline vulnerability databases including CVE, OSVDB, and Exploit-DB." },
  { tool:"nikto",        cat:"Recon",        link:"https://cirt.net/Nikto2", attacks:"Web Vulnerability Scanning, Outdated Software Detection", used:"CICIoMT2024, MU-IoT, DataSense", desc:"Open-source web server scanner performing comprehensive tests for dangerous files, outdated software, and web application misconfigurations." },
  { tool:"XSStrike",     cat:"Web",          link:"https://github.com/s0md3v/XSStrike", attacks:"Advanced XSS Detection, WAF Bypass, DOM XSS", used:"MU-IoT", desc:"Advanced XSS detection suite with fuzzing, crawler, and payload generation. Designed to find and exploit XSS vulnerabilities that scanners miss." },
  { tool:"beef",         cat:"Web",          link:"https://beefproject.com/", attacks:"Browser Hijacking, XSS Exploitation, Hook Propagation", used:"CICIoT2023", desc:"The Browser Exploitation Framework. Focuses on web browser vulnerabilities via XSS hooks to execute commands in victim browsers." },
  { tool:"Remot3d",      cat:"Web",          link:"https://github.com/Moham3dRiahi/Th3inspector", attacks:"Backdoor / Malware Upload via Web Interfaces", used:"CICIoT2023, DataSense", desc:"Web backdoor upload tool used in CIC datasets to simulate malware upload attacks against vulnerable IoT device web interfaces." },
  { tool:"Sparta",       cat:"Brute Force",  link:"https://github.com/SECFORCE/sparta", attacks:"SSH Brute Force (within penetration testing framework)", used:"MQTT-IDS2020", desc:"Penetration testing framework featuring automated scanning and service enumeration. Used in MQTT-IDS2020 for SSH brute force attacks." },
  { tool:"legba",        cat:"Brute Force",  link:"https://github.com/evilsocket/legba", attacks:"Multi-protocol credential testing (SSH, HTTP, MQTT, FTP)", used:"MU-IoT", desc:"Modern multi-protocol credentials brute-forcing tool written in Rust. Supports SSH, HTTP, MQTT, FTP, and many more services." },
  { tool:"bonesi",       cat:"Network",      link:"https://github.com/Markus-Go/bonesi", attacks:"DDoS Botnet Simulation, ICMP/UDP/TCP Flooding with spoofed IPs", used:"MU-IoT", desc:"DDoS botnet simulator that generates distributed flooding traffic with spoofed source IP addresses to simulate real botnet-driven DDoS attacks." },
  { tool:"GoldenEye",    cat:"Network",      link:"https://github.com/jseidl/GoldenEye", attacks:"HTTP DoS (Layer 7) — floods keep-alive connections", used:"BCCC-ZWave2025, TON_IoT", desc:"HTTP DoS tool that uses keep-alive connections and cache control bypass to exhaust web server resources at the application layer." },
  { tool:"Xprobe2",      cat:"Recon",        link:"#", attacks:"OS Fingerprinting via ICMP, TCP, UDP probes", used:"TON_IoT", desc:"Active OS fingerprinting tool using fuzzy signature matching across ICMP, TCP, and UDP protocol responses to identify remote operating systems." },
  { tool:"udp-flood",    cat:"Network",      link:"#", attacks:"UDP Flood", used:"CICIoT2023, DataSense, CICIoMT2024", desc:"Simple UDP flooding tool used to generate high-volume UDP traffic for DDoS/DoS attack simulation in IoT testbeds." }
];

// ── DEVICES ───────────────────────────────
const DEVICES = [
  { protocol:"MQTT", color:"cyan",
    devices:[
      { name:"ESP32 / ESP8266", type:"Microcontroller", desc:"Most popular MQTT-capable microcontrollers. Built-in Wi-Fi. Widely used in DIY IoT and commercial smart home products. Support TLS 1.2 for secure MQTT." },
      { name:"Raspberry Pi (all models)", type:"SBC", desc:"Single-board computer running full Linux OS. Commonly used as MQTT brokers (Eclipse Mosquitto) or as capable IoT gateways bridging sensors to cloud." },
      { name:"Arduino (with Wi-Fi/Ethernet shield)", type:"Microcontroller", desc:"Classic microcontroller platform. With ESP8266/W5500 shields, supports MQTT via PubSubClient library. Widely deployed in educational IoT projects." },
      { name:"Industrial PLCs (Siemens S7, Allen-Bradley)", type:"Industrial", desc:"Programmable Logic Controllers with MQTT support via firmware modules or edge gateways. Used in IIoT for reporting sensor data to SCADA/cloud." },
      { name:"Smart Home Hubs (Home Assistant, OpenHAB)", type:"Platform", desc:"Central controllers for smart home automation. Act as MQTT brokers or clients, connecting Zigbee/Z-Wave/BLE devices to IP networks." },
      { name:"AWS IoT Core / Azure IoT Hub", type:"Cloud Platform", desc:"Cloud-scale MQTT brokers supporting millions of concurrent device connections. Provide device management, authentication, and message routing." },
      { name:"Smartphones (iOS/Android)", type:"Mobile", desc:"Use MQTT client apps (MQTT Explorer, IoT MQTT Panel) for monitoring and control. Also act as publishers for location or sensor data." }
    ]
  },
  { protocol:"Modbus TCP/IP", color:"amber",
    devices:[
      { name:"Industrial PLCs (Schneider Modicon, Siemens S7)", type:"Industrial", desc:"Primary Modbus TCP/IP masters. Control actuators, read sensors, and communicate with SCADA HMIs. Critical infrastructure components." },
      { name:"HMI Panels (Weintek, Weincloud, Ignition)", type:"Industrial", desc:"Human-Machine Interface terminals providing operator control. Act as Modbus TCP/IP masters reading from IEDs and PLCs." },
      { name:"SCADA Servers (OSIsoft PI, Wonderware)", type:"Industrial", desc:"Supervisory Control and Data Acquisition systems acting as Modbus masters, polling IEDs for real-time process data at substation level." },
      { name:"Modbus TCP/IP Gateways (Moxa MGate)", type:"Gateway", desc:"Protocol converters bridging legacy serial Modbus devices (RTU/ASCII) to Modbus TCP/IP networks. Common in brownfield deployments." },
      { name:"Energy Monitoring Devices (Carlo Gavazzi, Janitza)", type:"Metering", desc:"Smart energy meters and power analyzers communicating via Modbus TCP/IP to BMS or SCADA systems for real-time energy data." },
      { name:"Raspberry Pi (with pymodbus)", type:"SBC", desc:"Used in research testbeds (including CIC Modbus 2023) to simulate IED behavior and as attacker nodes running pymodbus-based attack scripts." },
      { name:"Industrial Ethernet Switches (Hirschmann)", type:"Networking", desc:"Managed switches designed for OT environments supporting Modbus TCP/IP traffic monitoring and VLAN segmentation." }
    ]
  },
  { protocol:"BACnet", color:"amber",
    devices:[
      { name:"Building Controllers (Johnson Controls, Siemens, Honeywell)", type:"BAS", desc:"Primary BACnet devices managing HVAC, fire safety, and access control. Typically run as BACnet servers exposing device objects, analog inputs/outputs." },
      { name:"HVAC Systems (VAV Controllers, AHU Controllers)", type:"HVAC", desc:"Variable Air Volume boxes and Air Handling Unit controllers. Main targets in NREL Cyber Faults dataset — rogue BACnet WriteProperty commands manipulate damper positions." },
      { name:"Lighting Controllers (Lutron, DALI-to-BACnet gateways)", type:"Lighting", desc:"Lighting control systems exposed via BACnet objects. Allow reading occupancy/light levels and writing dimmer setpoints." },
      { name:"Fire Alarm Panels (Notifier, Siemens Cerberus)", type:"Safety", desc:"Life-safety systems with BACnet integration for central monitoring. Unauthorized access can trigger false alarms or mask real events." },
      { name:"Access Control Systems (Lenel, Genetec)", type:"Security", desc:"Physical security systems integrated via BACnet for door lock/unlock commands and occupancy status reporting." },
      { name:"Energy Meters (Siemens SENTRON, ABB M2M)", type:"Metering", desc:"Smart power meters with BACnet/IP interfaces providing real-time energy consumption data to building management systems." },
      { name:"BACnet IP Routers (Contemporary Controls)", type:"Networking", desc:"Dedicated BACnet routers/gateways that segment BACnet networks and provide IP-to-MS/TP or IP-to-IP routing for building automation." }
    ]
  },
  { protocol:"CoAP", color:"green",
    devices:[
      { name:"Nordic nRF52 series", type:"Microcontroller", desc:"Ultra-low-power 32-bit ARM Cortex-M4 SoC with IEEE 802.15.4/BLE. Popular for CoAP implementations over 6LoWPAN. Runs OpenThread or Contiki-NG." },
      { name:"STM32 microcontrollers (STMicroelectronics)", type:"Microcontroller", desc:"ARM Cortex-M series with low power modes. Run CoAP stacks like libcoap on RIOT OS or bare-metal. Used in industrial wireless sensor nodes." },
      { name:"Contiki-OS / Contiki-NG devices", type:"RTOS Platform", desc:"Reference operating system for constrained IoT nodes. Native CoAP over 6LoWPAN stack. Runs on Tmote Sky, Z1 motes, and similar hardware." },
      { name:"RIOT OS nodes (various platforms)", type:"RTOS Platform", desc:"Open-source IoT OS supporting CoAP via nanocoap/gcoap. Runs on STM32, MSP430, AVR, and native Linux for development." },
      { name:"Smart City Sensors (traffic, environmental, parking)", type:"Sensor", desc:"Multi-parameter urban sensors using CoAP for RESTful HTTP-like access to sensor resources over Low-Power Wide-Area or 6LoWPAN networks." },
      { name:"Industrial Wireless Sensors (ISA-100.11a)", type:"Industrial", desc:"Process automation wireless sensors using CoAP for diagnostic and process value access. Deployed in oil/gas, chemical, and utilities." },
      { name:"6LoWPAN Devices (TI CC2652, Silicon Labs EFR32)", type:"Microcontroller", desc:"IEEE 802.15.4 modules running 6LoWPAN adaptation layer, enabling CoAP over compressed IPv6. Featured in MU-IoT via ESP32 CoAP server." }
    ]
  },
  { protocol:"Matter", color:"purple",
    devices:[
      { name:"Matter-certified Smart Bulbs (Philips Hue, Nanoleaf)", type:"Lighting", desc:"Color and white tunable smart bulbs supporting Matter 1.x over Thread or Wi-Fi. Certified by CSA for interoperability across Apple/Google/Amazon ecosystems." },
      { name:"Matter Smart Plugs & Outlets", type:"Power", desc:"In-wall and plug-in power outlets reporting energy consumption. Support Matter on/off cluster over Thread or Wi-Fi 802.11b/g/n." },
      { name:"Matter Smart Locks (Yale, Schlage)", type:"Security", desc:"Deadbolt locks with Matter connectivity providing remote lock/unlock. Use Thread for low-power persistent connectivity or Wi-Fi for direct IP." },
      { name:"Matter Thermostats (ecobee, Honeywell Home)", type:"HVAC", desc:"Smart thermostats supporting Matter thermostat cluster for setpoint and mode control. Wi-Fi or Thread connectivity depending on model." },
      { name:"Matter Sensors (contact, motion, temperature)", type:"Sensor", desc:"Low-power sensors using Thread for battery-efficient mesh connectivity. Report via Matter Boolean State, Occupancy Sensing, or Measurement clusters." },
      { name:"Thread Border Routers (Apple TV 4K, Google Nest Hub)", type:"Gateway", desc:"Critical infrastructure connecting Thread mesh to IP networks. Apple TV 4K, Google Nest Hub Max, and HomePod mini act as dual-radio border routers." },
      { name:"ESP32-based Matter devices (Espressif Matter SDK)", type:"Microcontroller", desc:"Espressif provides Matter SDK for ESP32-H2 (Thread) and ESP32-C3/S3 (Wi-Fi). Enables rapid development of certified Matter devices." }
    ]
  },
  { protocol:"KNX/IP", color:"amber",
    devices:[
      { name:"KNX Actuators (ABB, Siemens, Schneider Electric)", type:"Actuator", desc:"Switch actuators, blind/shutter actuators, dimmer actuators for controlling lights, blinds, heating valves. Core bus devices in smart building installations." },
      { name:"KNX Sensors (Gira, Jung, ABB)", type:"Sensor", desc:"Push-button interfaces, binary inputs, temperature sensors, presence detectors, weather stations. Send KNX telegrams on GroupValue changes." },
      { name:"KNX/IP Gateways (Hager, MDT, Weinzierl)", type:"Gateway", desc:"Critical device bridging KNX TP (Twisted Pair) bus to KNXnet/IP over Ethernet. Entry point for all network-based KNX attacks." },
      { name:"Touch Panels (Gira, Busch-Jaeger, JUNG)", type:"HMI", desc:"Capacitive touch screens providing direct building control. Run KNX client software connecting to KNXnet/IP for visualization and control." },
      { name:"Weather Stations (ABB, Thermokon)", type:"Sensor", desc:"Outdoor sensors measuring wind speed, rain, temperature, brightness. Publish telegrams to KNX bus to trigger automated blind/lighting scenes." },
      { name:"Energy Meters (ABB B-series, Siemens ALPHA)", type:"Metering", desc:"Electricity consumption meters with KNX interfaces providing real-time energy data for load management and building energy optimization." },
      { name:"KNX USB Interfaces (Weinzierl KNX USB, Siemens 5WG1 148)", type:"Interface", desc:"USB-to-KNX adapters for programming with ETS software. Also used by attack tools like knxmap for direct KNX bus access." }
    ]
  },
  { protocol:"AMQP", color:"gray",
    devices:[
      { name:"Enterprise Servers (Linux/Windows)", type:"Server", desc:"AMQP brokers like RabbitMQ typically run on Linux/Windows server-grade hardware. Not designed for embedded or constrained devices." },
      { name:"Industrial Gateways (high-end Linux SBCs)", type:"Gateway", desc:"Powerful edge gateways running RabbitMQ or ActiveMQ to aggregate AMQP messages from industrial systems before forwarding to cloud backends." },
      { name:"Data Center Equipment", type:"Infrastructure", desc:"AMQP is extensively used in data center message queuing — between microservices, between IoT platforms and backend processing pipelines." },
      { name:"Azure Service Bus", type:"Cloud Platform", desc:"Microsoft's cloud AMQP 1.0 broker supporting high-throughput enterprise messaging. Used for IoT device-to-cloud telemetry at scale." },
      { name:"AWS Amazon MQ", type:"Cloud Platform", desc:"Managed Apache ActiveMQ and RabbitMQ service on AWS. Supports AMQP 1.0 for enterprise IoT integrations." },
      { name:"High-end Embedded Linux Systems (Raspberry Pi 4+)", type:"SBC", desc:"The most constrained device that can reasonably run a full AMQP client. Not suitable for battery-powered sensors." }
    ]
  },
  { protocol:"XMPP", color:"gray",
    devices:[
      { name:"Linux-based IoT Gateways", type:"Gateway", desc:"IoT gateways running XMPP clients to bridge local sensor networks to XMPP-based messaging platforms. Requires sufficient RAM for XML processing." },
      { name:"Smartphones (iOS/Android)", type:"Mobile", desc:"XMPP originated in instant messaging (Jabber). Smartphone IoT apps occasionally use XMPP for device presence and command messaging." },
      { name:"Desktop Clients (Linux, Windows, macOS)", type:"Desktop", desc:"Standard XMPP clients (Pidgin, Gajim) used in IoT contexts for monitoring and remote device command — especially in early IoT deployments." },
      { name:"Some Smart Home Systems (older generations)", type:"Platform", desc:"Older smart home platforms like certain Philips bridges used XMPP for push notifications. Largely replaced by HTTP webhooks and MQTT." }
    ]
  },
  { protocol:"HTTP/REST", color:"green",
    devices:[
      { name:"Smartphones & Tablets (iOS/Android)", type:"Mobile", desc:"Universal HTTP/REST clients. Primary way users interact with IoT cloud platforms via mobile apps consuming RESTful APIs." },
      { name:"Raspberry Pi", type:"SBC", desc:"Runs Python Flask, Node.js Express, or similar HTTP servers for local IoT control APIs. Also acts as HTTP REST gateway for lower-protocol devices." },
      { name:"ESP32 (with embedded HTTP server)", type:"Microcontroller", desc:"ESP-IDF includes an HTTPS server. ESP32 can host lightweight REST APIs for configuration and data retrieval over local Wi-Fi." },
      { name:"Cloud Servers & Enterprise Gateways", type:"Server", desc:"IoT platform backends (AWS IoT, Particle, ThingSpeak) expose RESTful APIs for device management, OTA updates, and data ingestion." },
      { name:"IP Cameras (Axis, Hikvision, Dahua)", type:"Camera", desc:"Network cameras expose ONVIF-compatible REST/SOAP interfaces and RTSP streams. Common targets in IoT security testbeds." },
      { name:"Smart Thermostats (Nest, ecobee, Sensi)", type:"HVAC", desc:"Wi-Fi connected thermostats with cloud REST APIs. Used in smart home automation (Home Assistant, IFTTT integrations)." }
    ]
  },
  { protocol:"6LoWPAN", color:"purple",
    devices:[
      { name:"Contiki-OS / Contiki-NG Devices", type:"RTOS Platform", desc:"Reference 6LoWPAN/IPv6 implementation. Runs on platforms like Tmote Sky, Z1 Mote, and OpenMote providing constrained network stacks." },
      { name:"RIOT OS Nodes", type:"RTOS Platform", desc:"Modern IoT OS with native 6LoWPAN/IPv6 support. Runs on STM32, MSP430, and simulated native targets for development and research." },
      { name:"Thread-based Devices", type:"Platform", desc:"Thread protocol uses 6LoWPAN as its network adaptation layer for IPv6 over IEEE 802.15.4. Every Thread device implements 6LoWPAN." },
      { name:"Nordic nRF52 with 802.15.4 (nRF52840)", type:"Microcontroller", desc:"nRF52840 supports both BLE and IEEE 802.15.4, enabling 6LoWPAN networking. Popular in Thread Border Router reference designs." },
      { name:"TI CC2652 / CC1352 Modules", type:"Microcontroller", desc:"Texas Instruments dual-band (Sub-GHz + 2.4GHz) IEEE 802.15.4 SoCs. Support 6LoWPAN for IPv6 mesh in smart metering and industrial applications." },
      { name:"Zigbee IP Products (limited)", type:"Wireless", desc:"Zigbee IP (now largely deprecated in favor of Thread/Matter) used 6LoWPAN to provide IPv6 connectivity to IEEE 802.15.4 mesh networks." }
    ]
  },
  { protocol:"RPL", color:"purple",
    devices:[
      { name:"6LoWPAN-enabled Sensors (Tmote Sky, OpenMote)", type:"Sensor", desc:"Low-power sensor motes running Contiki-NG or RIOT OS with RPL as the default routing protocol for multi-hop IEEE 802.15.4 mesh networks." },
      { name:"Thread Devices", type:"Platform", desc:"Thread uses a modified version of RPL for routing within Thread mesh networks, though Thread's implementation is not directly interoperable with standard RPL." },
      { name:"Industrial Wireless Sensor Networks (ISA-100.11a)", type:"Industrial", desc:"Process automation wireless networks using RPL-based routing for reliable multi-hop connectivity in industrial facilities." },
      { name:"Smart Meters (AMI networks)", type:"Metering", desc:"Advanced Metering Infrastructure using 6LoWPAN+RPL mesh for meter-to-collector communication in utility smart grid deployments." },
      { name:"Environmental Monitoring Nodes", type:"Sensor", desc:"Outdoor sensor arrays for air quality, weather, and habitat monitoring using RPL-routed mesh for data relay over wide areas." }
    ]
  },
  { protocol:"Zigbee", color:"green",
    devices:[
      { name:"Philips Hue Smart Bulbs & Bridge", type:"Lighting", desc:"The most deployed Zigbee consumer ecosystem. Hue Bridge acts as Zigbee coordinator; bulbs are router/end devices. Used in ZBDS2023 and ZigBeeNet datasets." },
      { name:"Ecobee Thermostats (Zigbee variant)", type:"HVAC", desc:"Smart thermostats using Zigbee for integration with SmartThings and similar platforms. Report temperature and accept setpoint control via Zigbee clusters." },
      { name:"Smart Locks (Yale, Kwikset)", type:"Security", desc:"Zigbee-enabled deadbolts providing remote lock/unlock. Battery-powered — vulnerable to energy depletion attacks. Used in CIC IoT 2023 testbed." },
      { name:"Motion/Door Sensors (SmartThings, Aqara)", type:"Sensor", desc:"Battery-powered Zigbee end devices. Sleep between reports — making them targets for energy depletion via spoofed Data Request jamming." },
      { name:"TI CC2652 / Silicon Labs EFR32", type:"Microcontroller", desc:"Primary Zigbee SoC platforms for commercial products and research. TI CC2652 used in ATUSB adapters for Zigbee packet capture and injection." },
      { name:"Smart Plugs (IKEA Tradfri, Sengled)", type:"Power", desc:"Zigbee smart plugs acting as routing nodes in the mesh. Provide on/off and energy monitoring. Deployed in CRAWDAD Zigbee-EDA testbed." },
      { name:"Industrial Zigbee Sensors (Digi XBee, HARTING)", type:"Industrial", desc:"Industrial-grade Zigbee sensors for factory automation. Use Zigbee PRO with application-layer security. Higher TX power for industrial environments." }
    ]
  },
  { protocol:"Z-Wave", color:"purple",
    devices:[
      { name:"Smart Locks (Yale YRD, Schlage Connect)", type:"Security", desc:"Most popular Z-Wave application. S2 security with Curve25519 ECDH key exchange. Used extensively in BCCC-ZWave-2025 testbed at York University." },
      { name:"Honeywell / Resideo Z-Wave Thermostats", type:"HVAC", desc:"Z-Wave thermostats for setpoint and mode control. Used in smart home hubs (SmartThings, Home Assistant, Fibaro) for HVAC automation." },
      { name:"GE/Jasco Smart Switches & Dimmers", type:"Lighting", desc:"In-wall light switches and dimmers. Z-Wave routing devices (always-powered). Largest category of Z-Wave devices by unit volume." },
      { name:"Door/Window/Motion Sensors (Fibaro, Aeotec)", type:"Sensor", desc:"Battery-powered Z-Wave sensors. Sleepy end-point devices. Send unsolicited reports on state change via Z-Wave command class Binary Sensor." },
      { name:"SmartThings / Home Assistant Hubs", type:"Platform", desc:"Popular Z-Wave controllers/gateways. SmartThings uses proprietary Z-Wave chip; Home Assistant uses external USB sticks (Aeotec Z-Stick, Zooz ZST10)." },
      { name:"Garage Door Controllers (GoControl, Ecolink)", type:"Actuator", desc:"Z-Wave garage door opener controllers. Enable remote open/close and status monitoring. Security concern: replay and injection attacks." },
      { name:"Sirens & Notification Devices (Dome, Aeotec)", type:"Actuator", desc:"Z-Wave audible alarms and sirens. Act as notification endpoints in security systems. Can be spoofed or triggered by unauthorized commands." }
    ]
  },
  { protocol:"BLE", color:"cyan",
    devices:[
      { name:"Fitbit / Garmin Fitness Trackers", type:"Wearable", desc:"Consumer fitness devices using BLE for smartphone sync. Advertise via GATT profiles (Heart Rate, Battery Service). Studied in CICIoMT2024." },
      { name:"Apple Watch", type:"Wearable", desc:"Uses BLE alongside Wi-Fi. BLE used for accessory pairing, health sensor sync, and home automation control. Nordic nRF52-based accessories pair via BLE." },
      { name:"Medical Heart Rate / SpO2 Monitors", type:"Medical", desc:"Healthcare IoMT devices like pulse oximeters and ECG patches. BLE-connected. Key devices in CICIoMT2024 dataset alongside infusion pumps." },
      { name:"Blood Glucose Meters (Dexcom G7, FreeStyle Libre 3)", type:"Medical", desc:"Continuous glucose monitors transmitting readings via BLE to smartphones. Critical medical devices where data integrity is patient-safety critical." },
      { name:"Smart Locks (August, Level Lock)", type:"Security", desc:"BLE-primary smart locks for proximity unlock. Vulnerable to BLE relay attacks extending range beyond physical proximity expectations." },
      { name:"iBeacon / Eddystone Beacons (Nordic, Radius Networks)", type:"Beacon", desc:"BLE advertising-only devices for indoor positioning and asset tracking. No active connection — only broadcast. Cannot be directly attacked via GATT." },
      { name:"Nordic nRF52 Series / TI CC2640 / Dialog DA14xxx", type:"Microcontroller", desc:"Primary BLE SoC platforms. Nordic nRF52840 supports both BLE and IEEE 802.15.4. TI CC2640 used in industrial BLE sensor nodes. Dialog DA14xxx in wearables." }
    ]
  },
  { protocol:"Thread", color:"cyan",
    devices:[
      { name:"Apple HomePod mini (Thread Border Router)", type:"Border Router", desc:"Acts as a Thread Border Router when updated. Provides reliable, always-on Thread ↔ IP routing. Required for Matter over Thread ecosystems." },
      { name:"Google Nest Hub Max / Nest Wi-Fi Pro", type:"Border Router", desc:"Google devices serving as Thread Border Routers. Connect Thread mesh to home IP network for cloud access and Matter ecosystem integration." },
      { name:"Thread Smart Bulbs (Nanoleaf Essentials, LIFX)", type:"Lighting", desc:"Matter over Thread bulbs using low-power mesh connectivity. Thread routing devices (FTDs) contributing to mesh resilience." },
      { name:"Thread Smart Locks (Eve, Yale)", type:"Security", desc:"Battery-powered Thread end devices. Use Sleepy End Device (SED) mode for battery efficiency — making them targets for energy depletion attacks." },
      { name:"Thread Sensors (Eve Aqua, Aqara presence)", type:"Sensor", desc:"Matter over Thread sensors for occupancy, temperature, humidity, and contact. Low-power MTD devices in Thread mesh." },
      { name:"Nordic nRF52840 (OpenThread reference)", type:"Microcontroller", desc:"Primary Thread research and development platform. Used in CRAWDAD cmu/thread-devboards with Adafruit Feather nRF52840 Express boards." },
      { name:"Silicon Labs EFR32MG / NXP KW41Z", type:"Microcontroller", desc:"Commercial Thread SoCs. EFR32MG used in Ember/Silicon Labs-based commercial Thread products. NXP KW41Z in border router reference designs." }
    ]
  },
  { protocol:"Wi-Fi (802.11)", color:"cyan",
    devices:[
      { name:"ESP32 / ESP8266 (Wi-Fi MCUs)", type:"Microcontroller", desc:"Dual-core ESP32 integrates Wi-Fi 802.11 b/g/n and BLE. The most popular Wi-Fi IoT platform. ESP8266 (Wi-Fi only) still widely used in cost-sensitive products." },
      { name:"Amazon Echo / Echo Dot", type:"Smart Speaker", desc:"Alexa-powered smart speakers using Wi-Fi for cloud connectivity. Used as real IoT devices in CIC IoT 2023 testbed's smart home topology." },
      { name:"Google Home / Nest (smart speakers/displays)", type:"Smart Speaker", desc:"Wi-Fi connected voice assistants and smart displays. Thread Border Router in Nest Hub. Traffic patterns used in smart home dataset generation." },
      { name:"IP Cameras (Axis, Hikvision, Reolink)", type:"Camera", desc:"Network cameras streaming over RTSP/HTTP. Significant traffic source in IoT datasets. Frequent target for IoT botnets (Mirai). Used in CIC testbeds." },
      { name:"Nest / Ecobee Wi-Fi Thermostats", type:"HVAC", desc:"Wi-Fi connected smart thermostats with cloud APIs. Generate predictable traffic patterns used for IoT device fingerprinting and classification." },
      { name:"Smartphones & Tablets", type:"Mobile", desc:"Primary consumer Wi-Fi devices. Used as attack sources (Kali NetHunter) and as legitimate IoT controllers generating background network traffic." },
      { name:"Raspberry Pi (all models with Wi-Fi)", type:"SBC", desc:"Raspberry Pi 3B+ and 4 have onboard Wi-Fi 802.11ac. Used as attack launchers, data collectors, and WIDS sensors in most academic IoT testbeds." }
    ]
  }
];

// ── HEATMAP DATA ──────────────────────────
const HEATMAP = {
  protocols: ["MQTT","Modbus TCP","KNX","Thread","CoAP","Zigbee","Z-Wave","AMQP","XMPP","BACnet","Wi-Fi","Ethernet","BLE","6LoWPAN","HTTP/HTTPS"],
  datasets: ["CICIoT\n2023","DataSense\nIIoT25","CICIoMT\n2024","BACnet\nAtk","Cyber\nFaults","MU-IoT","KNXnet\n/IP","CIC\nModbus","MQTT\nIDS20","MQTTset","Thread\nCMU","Zigbee\nEDA","ZBDS\n2023","ZigBee\nNet†","ZWave\n2025","TON_IoT"],
  data: [
    ["✗","✓","✓","✗","✗","✓","✗","✗","✓","✓","✗","✗","✗","✗","✓","✓"],
    ["✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✓"],
    ["✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["!","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✓","†","✗","✗"],
    ["!","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗"],
    ["✗","✗","✗","✗","✗","†","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","†","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✓","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["!","✓","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓"],
    ["✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗"],
    ["✓","✓","✓","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓"]
  ]
};

// ── SHARED UTILITY FUNCTIONS ──────────────

// Navigation active state
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
  MQTT:'cyan', 'Modbus TCP/IP':'amber', 'BACnet/IP':'amber', 'KNXnet/IP':'amber', KNX:'amber',
  Zigbee:'green', 'Z-Wave':'purple', Thread:'cyan', BLE:'purple', CoAP:'green',
  AMQP:'gray', XMPP:'gray', STOMP:'gray', 'Wi-Fi':'cyan', '6LoWPAN':'purple',
  Physical:'green', Simulated:'amber', Hybrid:'purple', 'Simulated (Docker)':'amber',
  'Cyber Range':'red', 'Real Home':'cyan',
  Network:'cyan', Recon:'purple', 'Brute Force':'red', MITM:'amber', Web:'green',
  'IoT Protocol':'cyan', Wireless:'purple', 'ICS/OT':'amber',
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
