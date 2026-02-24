const ATTACKS = [
  { cat:"DDoS", color:"red", attacks:[
    { tech:"UDP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"ICMP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"TCP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"HTTP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"ACK Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"RST-FIN Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"PSH-ACK Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"MQTT Connect Flood", ds:["DataSense","CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"MQTT Publish Flood", ds:["DataSense","CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"ACK Fragmentation Flood", ds:["CICIoT2023","DataSense"] },
    { tech:"UDP Fragmentation Flood", ds:["CICIoT2023","DataSense"] },
    { tech:"ICMP Fragmentation Flood", ds:["CICIoT2023","DataSense"] },
    { tech:"GREIP Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"GREETH Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"UDPPlain Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Mirai SYN Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Mirai UDP Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] }
  ]},
  { cat:"DoS", color:"amber", attacks:[
    { tech:"TCP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"UDP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"HTTP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"ICMP Flood", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Slowloris", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"SlowHTTPTest", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"GoldenEye", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"RUDY", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"MQTT Connect Flood", ds:["DataSense","CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"MQTT Publish Flood", ds:["DataSense","CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"SlowITe", ds:["CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"Modbus Query Flooding", ds:["CIC Modbus2023"] },
    { tech:"Modbus Delay Response Attack", ds:["CIC Modbus2023"] },
    { tech:"KNX GroupValue Write Flooding", ds:["KNXnet/IP"] },
    { tech:"KNX GroupValue Read/Write Flooding", ds:["KNXnet/IP"] },
    { tech:"BLE Denial of Service", ds:["CICIoMT2024"] }
  ]},
  { cat:"Reconnaissance", color:"purple", attacks:[
    { tech:"Port Scan", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","MQTT-IDS2020","BCCC-ZWave2025","TON_IoT"] },
    { tech:"OS Scan", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","MQTT-IDS2020","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Ping Sweep", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","MQTT-IDS2020","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Host Discovery", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","MQTT-IDS2020","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Vulnerability Scan", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025"] },
    { tech:"Modbus Network Reconnaissance", ds:["CIC Modbus2023"] },
    { tech:"KNX Network Scanning", ds:["KNXnet/IP"] },
    { tech:"KNX Bus Scanning", ds:["KNXnet/IP"] }
  ]},
  { cat:"Brute Force", color:"cyan", attacks:[
    { tech:"SSH Brute Force", ds:["CICIoT2023","DataSense","MQTT-IDS2020","BCCC-ZWave2025"] },
    { tech:"MQTT Broker Brute Force", ds:["MQTT-IDS2020","MQTTset","BCCC-ZWave2025"] },
    { tech:"Telnet Brute Force", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"FTP Brute Force", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"Dictionary Attack", ds:["CICIoT2023","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Credential Stuffing", ds:["CICIoT2023","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Password Cracking", ds:["TON_IoT"] },
    { tech:"Modbus Register Brute Force Write", ds:["CIC Modbus2023"] }
  ]},
  { cat:"Web-based", color:"green", attacks:[
    { tech:"SQL Injection", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Cross-Site Scripting (XSS)", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Command Injection", ds:["CICIoT2023","DataSense","MU-IoT","BCCC-ZWave2025"] },
    { tech:"File Upload Attack", ds:["CICIoT2023","MU-IoT"] },
    { tech:"Browser Hijacking", ds:["CICIoT2023"] }
  ]},
  { cat:"Spoofing", color:"amber", attacks:[
    { tech:"ARP Spoofing", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025"] },
    { tech:"ARP Poisoning", ds:["CICIoT2023","DataSense","CICIoMT2024","MU-IoT","BCCC-ZWave2025"] },
    { tech:"DNS Spoofing", ds:["CICIoT2023","BCCC-ZWave2025"] },
    { tech:"IP Spoofing", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"MQTT Impersonation", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"Zigbee MAC Spoofing", ds:["Zigbee-EDA","ZBDS2023"] },
    { tech:"Zigbee NWK Spoofing", ds:["Zigbee-EDA","ZBDS2023"] },
    { tech:"Zigbee Beacon Spoofing", ds:["Zigbee-EDA","ZBDS2023"] },
    { tech:"Zigbee Frame Forging", ds:["Zigbee-EDA","ZBDS2023"] },
    { tech:"Thread Spoofed MAC Data Request", ds:["Thread (CMU)"] },
    { tech:"Thread MLE Packet Injection", ds:["Thread (CMU)"] }
  ]},
  { cat:"MITM", color:"purple", attacks:[
    { tech:"Man-in-the-Middle (ARP-based)", ds:["DataSense","MU-IoT","BCCC-ZWave2025","TON_IoT"] },
    { tech:"Network Sniffing", ds:["MU-IoT"] }
  ]},
  { cat:"Malware", color:"red", attacks:[
    { tech:"Mirai Scanning", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Mirai Infection", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Mirai C2-Driven DDoS", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Mirai SYN Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Mirai UDP Flood", ds:["CICIoT2023","DataSense","BCCC-ZWave2025"] },
    { tech:"Ransomware", ds:["TON_IoT"] },
    { tech:"Backdoor", ds:["TON_IoT"] },
    { tech:"Spyware", ds:["MU-IoT"] },
    { tech:"Keylogging", ds:["MU-IoT"] },
    { tech:"Malware Upload", ds:["CICIoT2023","DataSense","TON_IoT"] }
  ]},
  { cat:"Data Integrity", color:"amber", attacks:[
    { tech:"Modbus False Data Injection", ds:["CIC Modbus2023"] },
    { tech:"Modbus Frame Length Manipulation", ds:["CIC Modbus2023"] },
    { tech:"Modbus Frame Stacking", ds:["CIC Modbus2023"] },
    { tech:"BACnet Falsifying Attack", ds:["BACnet Atk"] },
    { tech:"BACnet Modifying Attack", ds:["BACnet Atk"] },
    { tech:"Unauthorized Command Modification", ds:["BACnet Atk","CIC Modbus2023"] }
  ]},
  { cat:"Cyber-Physical Rogue Device", color:"amber", attacks:[
    { tech:"Unauthorized BACnet WriteProperty", ds:["CyberFaults"] }
  ]},
  { cat:"Replay", color:"cyan", attacks:[
    { tech:"Modbus Baseline Replay", ds:["CIC Modbus2023"] },
    { tech:"Zigbee Frame Replay", ds:["ZBDS2023"] },
    { tech:"Z-Wave Replay", ds:["BCCC-ZWave2025"] }
  ]},
  { cat:"Covert Channel", color:"green", attacks:[
    { tech:"BACnet Covert Channel (Plain Text)", ds:["BACnet Atk"] },
    { tech:"BACnet Covert Channel (Hashed)", ds:["BACnet Atk"] },
    { tech:"BACnet Covert Channel (Encrypted)", ds:["BACnet Atk"] }
  ]},
  { cat:"Energy Depletion", color:"amber", attacks:[
    { tech:"Thread Sleepy End Device Battery Drain", ds:["Thread (CMU)"] },
    { tech:"Zigbee Energy Depletion", ds:["Zigbee-EDA"] }
  ]},
  { cat:"Commissioning Exploitation", color:"purple", attacks:[
    { tech:"Thread Commissioner Impersonation", ds:["Thread (CMU)"] },
    { tech:"Thread Joiner Hijacking", ds:["Thread (CMU)"] },
    { tech:"Thread DTLS Key Exchange Exploitation", ds:["Thread (CMU)"] },
    { tech:"Thread Join Brute Force", ds:["Thread (CMU)"] }
  ]},
  { cat:"Jamming", color:"red", attacks:[
    { tech:"Selective Jamming of IEEE 802.15.4 Frames", ds:["Thread (CMU)"] },
    { tech:"Zigbee Selective Jamming", ds:["Zigbee-EDA"] }
  ]},
  { cat:"Fuzzing", color:"purple", attacks:[
    { tech:"KNX M_PropRead Fuzzing", ds:["KNXnet/IP"] },
    { tech:"KNX GroupValue Write/Read Fuzzing", ds:["KNXnet/IP"] },
    { tech:"Malformed MQTT Packet Injection", ds:["MQTTset"] }
  ]},
  { cat:"Device Reset", color:"amber", attacks:[
    { tech:"KNX M_Reset", ds:["KNXnet/IP"] },
    { tech:"Unauthorized KNX Reset/Control Commands", ds:["KNXnet/IP"] }
  ]},
  { cat:"Payload/Execution", color:"amber", attacks:[
    { tech:"Modbus Payload Execution", ds:["CIC Modbus2023"] }
  ]},
  { cat:"MQTT-specific", color:"cyan", attacks:[
    { tech:"Malformed MQTT Data Injection", ds:["CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"Malformed MQTT Message Injection", ds:["CICIoMT2024","MQTTset","BCCC-ZWave2025"] },
    { tech:"MQTT Unauthorized Access", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"MQTT Spoofing", ds:["DataSense","BCCC-ZWave2025"] },
    { tech:"MQTT Impersonation", ds:["DataSense","BCCC-ZWave2025"] }
  ]},
  { cat:"BLE-specific", color:"purple", attacks:[
    { tech:"BLE DoS", ds:["CICIoMT2024"] }
  ]},
  { cat:"Z-Wave-specific", color:"cyan", attacks:[
    { tech:"Z-Wave Replay", ds:["BCCC-ZWave2025"] },
    { tech:"Z-Wave Jamming", ds:["BCCC-ZWave2025"] },
    { tech:"Z-Wave Spoofing", ds:["BCCC-ZWave2025"] },
    { tech:"Z-Wave Flooding", ds:["BCCC-ZWave2025"] },
    { tech:"Z-Wave Unauthorized Command Injection", ds:["BCCC-ZWave2025"] },
    { tech:"Z-Wave Downgrade Attack", ds:["BCCC-ZWave2025"] },
    { tech:"Z-Wave Network Disruption", ds:["BCCC-ZWave2025"] }
  ]}
];
window.ATTACKS = ATTACKS;
