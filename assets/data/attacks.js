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
    { tech:"MQTT DoS â€” Connect Flood / Publish Flood / SlowITe (keep-alive abuse)", ds:["CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"Modbus Query Flooding / Delay Response Attack", ds:["CIC Modbus2023"] },
    { tech:"KNX Flooding â€” GroupValue Write/Read (valid & fuzzed)", ds:["KNXnet/IP"] },
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
    { tech:"Cross-Site Scripting â€” XSS (DVWA / XSStrike / payload lists)", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
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
    { tech:"BACnet Covert Channel â€” Plain Text, Hashed (SHA3-256), Encrypted (AES-256)", ds:["BACnet Atk"] }
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
    { tech:"KNX M_PropRead Fuzzing (KNXSmartFuzzer) â€” device property discovery/exploitation", ds:["KNXnet/IP"] },
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
window.ATTACKS = ATTACKS;
