const ATTACK_DIVISIONS = [
  {
    id: 1,
    title: "DoS / DDoS – Network & Transport Layer Floods",
    rows: [
      ["DoS/DDoS – Net/Transport", "TCP SYN Flood", "Sends large volumes of TCP SYN packets without completing the 3-way handshake, exhausting the victim's half-open connection state table until legitimate connections are refused.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, TON_IoT, BCCC ZWave 2025", "hping3, Mirai-Source-Code"],
      ["DoS/DDoS – Net/Transport", "TCP Flood (ACK Flood)", "Floods the target with high-rate generic TCP packets (typically ACK-flagged), overwhelming the network stack and stateful firewall tables without exploiting the handshake. Distinct from TCP SYN Flood: uses established-connection packets to bypass SYN-cookie defenses. Appears as a separate attack alongside SYN Flood in CIC datasets.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, MU-IoT, TON_IoT, BCCC ZWave 2025", "hping3"],
      ["DoS/DDoS – Net/Transport", "TCP ACK Fragmentation Flood", "Floods target with intentionally fragmented TCP ACK packets, overwhelming IP reassembly buffers and increasing CPU load.", "CIC IoT 2023, CIC IIoT 2025", "hping3"],
      ["DoS/DDoS – Net/Transport", "TCP ACK-PSH Flood", "Sends TCP packets with both PSH and ACK flags set at high rate, forcing the target to immediately process and deliver data to the application layer, exhausting server resources.", "CIC IoT 2023, CIC IIoT 2025", "hping3"],
      ["DoS/DDoS – Net/Transport", "TCP RST-FIN Flood", "Floods the target with TCP RST and FIN packets to forcibly terminate existing TCP connections, causing session disruption and denial of service for active users.", "CIC IoT 2023, CIC IIoT 2025", "hping3"],
      ["DoS/DDoS – Net/Transport", "TCP Synonymous IP Flood", "TCP SYN flood variant that uses spoofed synonymous (closely related) IP addresses to complicate backscatter analysis and evade basic IP-reputation filters.", "CIC IoT 2023, CIC IIoT 2025", "hping3"],
      ["DoS/DDoS – Net/Transport", "UDP Flood", "Sends a large volume of UDP datagrams to random ports, exhausting bandwidth and forcing the victim to generate many ICMP Port Unreachable responses, consuming additional resources.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, MU-IoT, BCCC ZWave 2025", "udp-flood, hping3, bonesi"],
      ["DoS/DDoS – Net/Transport", "UDP Fragmentation Flood", "Floods the target with intentionally fragmented UDP packets, overwhelming the reassembly engine and consuming memory/CPU for incomplete datagram reconstruction.", "CIC IoT 2023, CIC IIoT 2025", "udp-flood"],
      ["DoS/DDoS – Net/Transport", "ICMP Flood (Ping Flood)", "Sends high-rate ICMP Echo Request packets to exhaust the victim's inbound bandwidth and force CPU time spent generating Echo Reply responses.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, MU-IoT", "hping3, fping, bonesi"],
      ["DoS/DDoS – Net/Transport", "ICMP Fragmentation Flood", "Floods target with fragmented ICMP packets, specifically targeting reassembly buffer capacity.", "CIC IIoT 2025", "hping3"],
      ["DoS/DDoS – Net/Transport", "DNS Amplification", "Sends small DNS queries with a spoofed victim source IP to open DNS resolvers; the amplified responses are directed at the victim, overwhelming bandwidth (amplification factor up to 70x).", "MU-IoT", "hping3"]
    ]
  },
  {
    id: 2,
    title: "DoS / DDoS – Application Layer & Slow Attacks",
    rows: [
      ["DoS/DDoS – App Layer", "HTTP Flood", "Sends a massive number of seemingly legitimate HTTP GET or POST requests to exhaust web server thread pools, memory, and CPU, rendering the service unavailable.", "CIC IoT 2023, CIC IIoT 2025, MU-IoT, TON_IoT, BCCC ZWave 2025", "golang-httpflood, hping3"],
      ["DoS/DDoS – App Layer", "HTTP Slowloris", "Opens many partial HTTP connections to a web server and keeps them alive by sending incomplete headers at minimum rate, monopolizing server threads without requiring high bandwidth.", "CIC IoT 2023, CIC IIoT 2025, MU-IoT, BCCC ZWave 2025", "slowloris"],
      ["DoS/DDoS – App Layer", "SlowHTTPTest / RUDY", "Slow HTTP POST attack (R-U-Dead-Yet) that sends POST body bytes at a very low rate to hold connections open and exhaust server resources.", "BCCC ZWave 2025", "SlowHTTPTest"],
      ["DoS/DDoS – App Layer", "GoldenEye", "HTTP DoS tool that generates persistent, randomized HTTP requests with varying headers to evade caching and overwhelm web servers.", "BCCC ZWave 2025, TON_IoT", "GoldenEye"]
    ]
  },
  {
    id: 3,
    title: "DoS / DDoS – Mirai Botnet Flood Variants",
    rows: [
      ["DoS/DDoS – Botnet/Mirai", "Mirai GREIP Flood", "Mirai botnet-generated volumetric flood that encapsulates IP packets within GRE tunnels to evade simple packet-filtering rules and amplify attack volume.", "CIC IoT 2023", "Mirai-Source-Code"],
      ["DoS/DDoS – Botnet/Mirai", "Mirai GREETH Flood", "Mirai botnet GRE-encapsulated Ethernet-level flood variant, targeting Layer 2 of the network stack via GRE tunnels.", "CIC IoT 2023", "Mirai-Source-Code"],
      ["DoS/DDoS – Botnet/Mirai", "Mirai UDPPlain Flood", "Plain UDP flood generated by the Mirai botnet without fragmentation, used for high-volume bandwidth exhaustion attacks.", "CIC IoT 2023", "Mirai-Source-Code"],
      ["DoS/DDoS – Botnet/Mirai", "Mirai Botnet DDoS Variants", "Full Mirai botnet lifecycle: scanning for vulnerable IoT devices with default credentials, infecting them, and coordinating multi-vector DDoS floods (SYN, UDP, etc.) from the botnet.", "BCCC ZWave 2025", "Mirai-Source-Code"]
    ]
  },
  {
    id: 4,
    title: "DoS / DDoS – MQTT Protocol-Specific Attacks",
    rows: [
      ["DoS/DDoS – MQTT", "MQTT Publish Flood", "Overwhelms an MQTT broker with a massive volume of PUBLISH packets, exhausting broker processing capacity and preventing legitimate IoT sensor messages from being delivered.", "CIC IIoT 2025, CIC IoMT 2024, MQTTset", "mqtt-benchmark, IoT-Flock"],
      ["DoS/DDoS – MQTT", "MQTT Connect Flood", "Floods the MQTT broker with repeated CONNECT requests, exhausting connection-handling threads and forcing the broker to reject legitimate device connections.", "CIC IIoT 2025, CIC IoMT 2024", "mqtt-benchmark, mqtt-stresser"],
      ["DoS/DDoS – MQTT", "MQTT Multiple Connections DoS", "Opens a very large number of simultaneous MQTT connections to overwhelm broker file descriptor limits and memory, effectively denying service to legitimate clients.", "MQTTset", "MQTT-malaria"],
      ["DoS/DDoS – MQTT", "MQTT SlowITe", "Slow DoS attack specific to MQTT: sends CONNECT packets with the keep_alive field set to its maximum value, compelling the broker to hold connections open indefinitely and exhaust resources without high traffic volume.", "MQTTset", "MQTT_SlowITe"],
      ["DoS/DDoS – MQTT", "Malformed MQTT Flood", "Sends crafted invalid/malformed MQTT packets to crash or disrupt the broker, exploiting insufficient input validation in MQTT implementations.", "MQTTset, CIC IoMT 2024", "IoT-Flock"]
    ]
  },
  {
    id: 5,
    title: "DoS / DDoS – KNX/IP Protocol-Specific Attacks",
    rows: [
      ["DoS/DDoS – KNX", "KNX Valid GroupValue Write Flood (KNXA05)", "Floods the KNX bus with well-formed GroupValue Write messages at high rate, overwhelming KNX devices and preventing them from processing legitimate building-automation commands.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer"],
      ["DoS/DDoS – KNX", "KNX Malformed GroupValue Write Flood (KNXA06)", "Floods KNX devices with fuzzed/malformed GroupValue Write messages, attempting to cause device crashes, undefined behavior, or resource exhaustion through protocol violations.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer"],
      ["DoS/DDoS – KNX", "KNX Malformed GroupValue Read Flood (KNXA07)", "Floods KNX devices with malformed GroupValue Read messages, disrupting their ability to respond to legitimate queries and potentially triggering error states.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer"],
      ["DoS/DDoS – KNX", "KNX Unauthorized GroupValue Write / Access (KNXA08)", "Sends unauthorized GroupValue Write commands to KNX group addresses to manipulate building-automation functions (e.g. lighting, HVAC) without proper access credentials.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer"],
      ["DoS/DDoS – KNX", "KNX M_Reset – Device Reset Attack (KNXA02)", "Sends unauthorized M_Reset requests to KNX devices via the KNXnet/IP gateway, forcing them to reboot and disrupting building-automation availability.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer"]
    ]
  },
  {
    id: 6,
    title: "DoS / DDoS – ICS / Modbus Protocol-Specific Attacks",
    rows: [
      ["DoS/DDoS – ICS/Modbus", "Modbus Query Flooding", "Floods Modbus TCP/IP slave devices (IEDs) with a high rate of Modbus read/write queries, overwhelming their processing capacity and causing them to become unresponsive to legitimate SCADA commands.", "CIC Modbus Dataset 2023", "pymodbus, ModTester"],
      ["DoS/DDoS – ICS/Modbus", "Modbus Delay Response Attack", "Intercepts Modbus traffic and artificially delays responses from IEDs to the SCADA master, causing timeout errors, incorrect state assumptions, and potential operational disruption.", "CIC Modbus Dataset 2023", "pymodbus, scapy"]
    ]
  },
  {
    id: 7,
    title: "DoS / DDoS – Wireless & IoT Physical-Layer Attacks",
    rows: [
      ["DoS/DDoS – Wireless", "BLE Denial of Service", "Disrupts Bluetooth Low Energy (BLE) devices by flooding or interfering with BLE communication, preventing IoMT devices from transmitting health sensor data.", "CIC IoMT 2024", "gattacker, bettercap"],
      ["DoS/DDoS – Wireless", "Zigbee Energy Depletion (Data Request Jamming)", "Selectively jams MAC-layer Data Request packets from battery-powered Zigbee End Devices, then injects spoofed 127-byte NWK packets with inflated frame counters (2,600,000) to force continuous unnecessary AES-128 cryptographic computation, rapidly draining device batteries.", "CRAWDAD cmu/zigbee-eda", "USRP N210 SDR"],
      ["DoS/DDoS – Wireless", "Zigbee Jamming of Network Update Commands", "Selectively jams Zigbee NWK-layer network update command frames, preventing the network from propagating routing updates and causing connectivity degradation.", "CRAWDAD cmu/zigbee-eda", "—"],
      ["DoS/DDoS – Wireless", "Zigbee Jamming of Rejoin Responses", "Jams Rejoin Response frames sent by the Zigbee coordinator, preventing disconnected end devices from re-associating with the network and forcing them into energy-wasting retry loops.", "CRAWDAD cmu/zigbee-eda", "—"],
      ["DoS/DDoS – Wireless", "Zigbee Jamming of Beacons with New PAN ID", "Jams beacon frames that broadcast a new PAN ID after a PAN ID conflict resolution, preventing devices from adopting the new network identifier and disrupting network operation.", "CRAWDAD cmu/zigbee-eda", "—"],
      ["DoS/DDoS – Wireless", "Thread Energy Depletion – Spoofed MAC Data Request Injection", "Injects spoofed MAC-layer Data Request frames targeting Thread Sleepy End Devices, preventing them from returning to sleep state and forcing continuous unnecessary cryptographic processing, depleting battery life.", "CRAWDAD cmu/thread-devboards", "—"],
      ["DoS/DDoS – Wireless", "Thread Energy Depletion – Spoofed MLE Packet Injection", "Injects spoofed MLE (Mesh Link Establishment) frames into the Thread network, forcing devices to waste energy on cryptographic authentication operations for illegitimate packets. Attack intensity is configurable.", "CRAWDAD cmu/thread-devboards", "—"],
      ["DoS/DDoS – Wireless", "Z-Wave Jamming", "Disrupts Z-Wave (908 MHz) communication by jamming the radio frequency channel used by Z-Wave smart home devices, preventing commands from reaching actuators.", "BCCC ZWave 2025", "—"],
      ["DoS/DDoS – Wireless", "Z-Wave Flooding", "Floods the Z-Wave network with a high rate of Z-Wave frames to exhaust mesh-routing capacity and prevent legitimate device control traffic.", "BCCC ZWave 2025", "—"],
      ["DoS/DDoS – Wireless", "Zigbee Flooding / DoS (ZBDS2023)", "Repeated spoofed IEEE 802.15.4 frames sent at high rate to cause resource depletion on Zigbee devices and degrade network throughput.", "ZBDS2023 Zigbee Dataset", "killerbee"]
    ]
  },
  {
    id: 8,
    title: "Reconnaissance / Scanning",
    rows: [
      ["Reconnaissance", "Ping Sweep", "Sends ICMP Echo Requests to a range of IP addresses to discover which hosts are active on the network.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024", "nmap"],
      ["Reconnaissance", "Host Discovery – ARP Ping", "Uses ARP requests to identify live hosts on the local network segment, bypassing ICMP filtering.", "CIC IIoT 2025", "nmap"],
      ["Reconnaissance", "Host Discovery – TCP ACK / SYN Ping", "Sends TCP ACK or SYN probe packets to determine if a host is alive, useful when ICMP is blocked by firewalls.", "CIC IIoT 2025", "nmap"],
      ["Reconnaissance", "Host Discovery – TCP SYN Stealth", "Performs a half-open TCP SYN scan to enumerate live hosts without completing the 3-way handshake, reducing the chance of detection in logs.", "CIC IIoT 2025", "nmap"],
      ["Reconnaissance", "Host Discovery – UDP Ping", "Sends UDP probes to discover hosts that may not respond to ICMP or TCP-based probes.", "CIC IIoT 2025", "nmap"],
      ["Reconnaissance", "Port Scan", "Systematically probes a host's TCP/UDP ports to determine which services are running and identify potential attack surfaces.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, TON_IoT, BCCC ZWave 2025", "nmap"],
      ["Reconnaissance", "OS Scan (OS Fingerprinting)", "Sends specially crafted probe packets and analyzes responses to identify the operating system and version running on a target host.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, TON_IoT, BCCC ZWave 2025", "nmap, Xprobe2"],
      ["Reconnaissance", "Vulnerability Scan", "Uses automated tools to probe services for known CVEs, misconfigurations, and weaknesses, generating a prioritized list of exploitable vulnerabilities.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, MU-IoT, TON_IoT, BCCC ZWave 2025", "nmap, vulscan, nikto"],
      ["Reconnaissance", "Network Scanning", "Broad active discovery of hosts, services, and topology within an IP network to map the environment prior to targeted attacks.", "MU-IoT, TON_IoT, BCCC ZWave 2025", "nmap"],
      ["Reconnaissance", "Nmap Aggressive Scan", "Comprehensive nmap scan combining OS detection, service version detection, script scanning, and traceroute in a single pass.", "MQTT-IoT-IDS2020", "nmap"],
      ["Reconnaissance", "Nmap UDP Scan", "Probes UDP ports on a target host to identify open UDP services, which are often overlooked and more difficult to enumerate.", "MQTT-IoT-IDS2020", "nmap"],
      ["Reconnaissance", "KNX Network Scanning (KNXA03)", "Scans the IP network to discover active KNXnet/IP gateways and interfaces, mapping the accessible building-automation infrastructure.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer, knxmap"],
      ["Reconnaissance", "KNX Bus Scanning (KNXA04)", "Scans the KNX bus through the KNXnet/IP gateway to discover and enumerate individual KNX devices, group addresses, and their functions.", "KNXnet/IP IDS Dataset", "KNXSmartFuzzer"],
      ["Reconnaissance", "Modbus Network Reconnaissance", "Probes Modbus TCP/IP devices to discover slave addresses, supported function codes, and register maps, identifying targets for further exploitation.", "CIC Modbus Dataset 2023", "pymodbus, nmap, ModTester"]
    ]
  },
  {
    id: 9,
    title: "Web-based Attacks",
    rows: [
      ["Web-based", "SQL Injection", "Inserts malicious SQL statements into input fields to manipulate the backend database: extract sensitive data, bypass authentication, or execute administrative operations.", "CIC IoT 2023, CIC IIoT 2025, MU-IoT, TON_IoT, BCCC ZWave 2025", "DVWA, sqlmap, sql-injection-payload-list"],
      ["Web-based", "Blind SQL Injection", "SQL injection variant where query results are not directly visible; the attacker infers data by observing differences in application behavior or response timing.", "CIC IIoT 2025", "sqlmap, sql-injection-payload-list"],
      ["Web-based", "Command Injection", "Injects OS shell commands into application inputs that are passed to a system shell, achieving arbitrary command execution on the server.", "CIC IoT 2023, CIC IIoT 2025, MU-IoT, TON_IoT, BCCC ZWave 2025", "DVWA, command-injection-payload-list"],
      ["Web-based", "Cross-Site Scripting (XSS)", "Injects malicious JavaScript into web pages served to other users, enabling session hijacking, credential theft, or malicious redirects.", "CIC IoT 2023, CIC IIoT 2025, MU-IoT, TON_IoT, BCCC ZWave 2025", "DVWA, XSStrike, xss-payload-list"],
      ["Web-based", "File Upload / Backdoor Upload Attack", "Exploits insufficient file-type validation to upload malicious files (web shells, backdoors) to a server, enabling persistent unauthorized remote access.", "CIC IoT 2023, CIC IIoT 2025, MU-IoT, TON_IoT", "DVWA, Remot3d"],
      ["Web-based", "Browser Hijacking", "Uses browser exploitation frameworks to hook victim browsers via XSS, enabling remote control, credential harvesting, and pivot attacks.", "CIC IoT 2023", "BeEF (Browser Exploitation Framework)"]
    ]
  },
  {
    id: 10,
    title: "Brute Force / Credential Attacks",
    rows: [
      ["Brute Force / Credential", "Dictionary / Password Brute Force", "Attempts authentication by systematically trying passwords from a wordlist or exhaustively through all possible combinations.", "CIC IoT 2023, MU-IoT, BCCC ZWave 2025", "thc-hydra, nmap, metasploit, legba"],
      ["Brute Force / Credential", "SSH Brute Force", "Repeatedly attempts SSH login with different credential pairs to gain unauthorized shell access to IoT gateways or edge devices.", "CIC IIoT 2025, MQTT-IoT-IDS2020, BCCC ZWave 2025", "thc-hydra, SecLists, Sparta"],
      ["Brute Force / Credential", "Telnet Brute Force", "Brute-forces Telnet authentication, which is common on legacy IoT devices that still expose unencrypted remote management.", "CIC IIoT 2025, BCCC ZWave 2025", "thc-hydra, SecLists"],
      ["Brute Force / Credential", "FTP Brute Force", "Repeatedly attempts FTP authentication to gain unauthorized access to file storage on IoT devices or management servers.", "BCCC ZWave 2025", "thc-hydra"],
      ["Brute Force / Credential", "MQTT Brute Force Authentication", "Repeatedly attempts MQTT broker authentication with different username/password combinations to gain unauthorized publish/subscribe access.", "MQTT-IoT-IDS2020, MQTTset", "—"],
      ["Brute Force / Credential", "Modbus Brute Force Write", "Writes arbitrary values to a range of Modbus holding registers to identify writeable registers and determine their effect on industrial processes.", "CIC Modbus Dataset 2023", "pymodbus, ModTester, scapy"],
      ["Brute Force / Credential", "Thread J-PAKE Password Guessing (Commissioning Exploit)", "Exploits the Thread commissioning window to make multiple J-PAKE password guesses by repeatedly re-triggering the DTLS commissioning handshake, bypassing single-attempt lockouts.", "CRAWDAD cmu/thread-devboards", "—"]
    ]
  },
  {
    id: 11,
    title: "Spoofing / Man-in-the-Middle (MITM)",
    rows: [
      ["Spoofing / MITM", "ARP Spoofing / ARP Poisoning", "Sends forged ARP Reply packets to associate the attacker's MAC address with a legitimate IP (e.g., the gateway), redirecting traffic through the attacker for interception, modification, or session hijacking.", "CIC IoT 2023, CIC IIoT 2025, CIC IoMT 2024, MU-IoT, BCCC ZWave 2025", "ettercap"],
      ["Spoofing / MITM", "DNS Spoofing", "Sends forged DNS responses to redirect domain name lookups to malicious IP addresses, enabling phishing, traffic interception, or service impersonation.", "CIC IoT 2023, BCCC ZWave 2025", "ettercap"],
      ["Spoofing / MITM", "IP Spoofing", "Crafts packets with a forged source IP address to impersonate a trusted host, bypass IP-based access controls, or amplify reflected attack traffic.", "CIC IIoT 2025, BCCC ZWave 2025", "hping3"],
      ["Spoofing / MITM", "MQTT Impersonation", "Connects to an MQTT broker using the credentials or Client ID of a legitimate IoT device to inject false sensor data, intercept messages, or disrupt device communication.", "CIC IIoT 2025, BCCC ZWave 2025", "mqtt-benchmark"],
      ["Spoofing / MITM", "Network Sniffing (Passive Interception)", "Passively captures network traffic in a shared medium or after ARP poisoning to extract plaintext credentials, sensor data, and communication patterns.", "MU-IoT", "ettercap"],
      ["Spoofing / MITM", "Man-in-the-Middle (MITM)", "Positions the attacker between two communicating parties (e.g., IoT device and gateway) to intercept, read, or modify traffic in real time.", "TON_IoT, BCCC ZWave 2025", "—"],
      ["Spoofing / MITM", "Zigbee MAC ACK Spoofing", "Spoofs MAC-layer Acknowledgement frames for jammed Data Request packets, deceiving the sender into thinking its frames were successfully received.", "CRAWDAD cmu/zigbee-eda", "USRP N210 SDR"],
      ["Spoofing / MITM", "Zigbee NWK Frame Spoofing", "Injects spoofed NWK-layer Zigbee packets with fabricated security headers and elevated frame counters to desynchronize sequence number state and prevent legitimate frames from being accepted.", "CRAWDAD cmu/zigbee-eda", "USRP N210 SDR"],
      ["Spoofing / MITM", "Zigbee Beacon Spoofing / PAN ID Conflict Attack", "Spoofs Zigbee beacon frames with the same PAN ID but a different Extended PAN ID (EPID), triggering a PAN ID conflict that forces the coordinator to change the network's PAN ID and causing temporary network disruption.", "CRAWDAD cmu/zigbee-eda, ZBDS2023", "killerbee, Z3sec"],
      ["Spoofing / MITM", "Thread Commissioner Impersonation / Joiner Hijacking", "Impersonates a legitimate Thread commissioner during the DTLS commissioning handshake (aided by selectively jamming real beacon/discovery responses), redirecting new joiners to accept the attacker's network credentials.", "CRAWDAD cmu/thread-devboards", "—"],
      ["Spoofing / MITM", "Z-Wave Spoofing", "Forges Z-Wave protocol frames with a legitimate device's source Node ID to inject unauthorized commands or impersonate trusted smart home devices.", "BCCC ZWave 2025", "—"]
    ]
  },
  {
    id: 12,
    title: "Malware / Botnet",
    rows: [
      ["Malware / Botnet", "Backdoor / Remote Access Trojan", "Installs persistent unauthorized remote-access capability on a compromised device, enabling long-term covert access, data exfiltration, and use as a pivot point.", "CIC IoT 2023, TON_IoT", "DVWA, Remot3d"],
      ["Malware / Botnet", "Ransomware", "Encrypts files on a compromised host and demands payment for the decryption key, disrupting IoT/IIoT data availability.", "TON_IoT", "Metasploit"],
      ["Malware / Botnet", "Keylogging (Spyware)", "Records keystrokes on a compromised IoT device or management console to capture credentials, commands, and sensitive operational data.", "MU-IoT", "Author's own code"]
    ]
  },
  {
    id: 13,
    title: "Fuzzing",
    rows: [
      ["Fuzzing", "KNX M_PropRead Fuzzing (KNXA01)", "Sends large numbers of fuzzed M_PropRead service requests to KNX devices to discover undocumented device properties, trigger parsing errors, and uncover exploitable vulnerabilities in KNX device firmware.", "KNXnet/IP IDS Dataset", "knxmap, KNXSmartFuzzer"]
    ]
  },
  {
    id: 14,
    title: "Data Integrity / False Data Injection",
    rows: [
      ["Data Integrity", "BACnet Falsifying Attack", "Injects fabricated BACnet data objects (e.g., false chiller temperature readings) into the building-automation network, causing controllers to make incorrect decisions based on non-existent sensor values.", "BACnet Attack Dataset", "bacpypes, BAC0"],
      ["Data Integrity", "BACnet Modifying Attack (Data in Transit)", "Intercepts legitimate BACnet traffic and alters sensor values or control commands in transit before they reach the controller, manipulating building system behaviour covertly.", "BACnet Attack Dataset", "bacpypes, BAC0"],
      ["Data Integrity", "Modbus False Data Injection", "Writes false voltage, current, or sensor values to Modbus holding registers to corrupt the process view maintained by the SCADA HMI, potentially causing unsafe control decisions.", "CIC Modbus Dataset 2023", "pymodbus, scapy"],
      ["Data Integrity", "Modbus Modify Length Parameters", "Alters the byte-count and quantity fields in Modbus frame headers to cause misinterpretation of register data or trigger errors in Modbus slave implementations.", "CIC Modbus Dataset 2023", "pymodbus, scapy"],
      ["Data Integrity", "Modbus Frame Stacking", "Packs multiple Modbus PDUs within a single TCP payload to exploit ambiguities in frame-boundary parsing, potentially causing slaves to execute unintended commands.", "CIC Modbus Dataset 2023", "pymodbus, scapy"],
      ["Data Integrity", "Modbus Loading Payloads", "Transfers malicious code or configuration payloads to Modbus-connected field devices to alter device behaviour or establish persistence.", "CIC Modbus Dataset 2023", "pymodbus, scapy"],
      ["Data Integrity", "Z-Wave Unauthorized Command Injection", "Injects unauthorized Z-Wave control commands (e.g., lock/unlock, switch on/off) to manipulate smart home actuators without user authorization.", "BCCC ZWave 2025", "—"],
      ["Data Integrity", "Z-Wave Device Tampering", "Modifies Z-Wave device configuration (e.g., association tables, security keys) through unauthorized frames to alter device behavior or degrade security.", "BCCC ZWave 2025", "—"]
    ]
  },
  {
    id: 15,
    title: "Covert Channel",
    rows: [
      ["Covert Channel", "BACnet Plain Text Covert Channel", "Embeds hidden messages within normal-looking BACnet property values in plain text, exfiltrating data through the building-automation network without obvious anomalies.", "BACnet Attack Dataset", "bacpypes, BAC0"],
      ["Covert Channel", "BACnet Hashed Covert Channel (SHA3-256)", "Encodes exfiltrated data as SHA3-256 hash values embedded in BACnet traffic, making the covert channel harder to detect or decode without knowledge of the scheme.", "BACnet Attack Dataset", "bacpypes, BAC0"],
      ["Covert Channel", "BACnet Encrypted Covert Channel (AES-256)", "Hides exfiltrated data encrypted with AES-256 within BACnet property traffic, providing confidentiality and resistance to content-based detection of the covert channel.", "BACnet Attack Dataset", "bacpypes, BAC0"]
    ]
  },
  {
    id: 16,
    title: "Replay Attacks",
    rows: [
      ["Replay", "Modbus Baseline Replay", "Captures legitimate Modbus command sequences and retransmits them at a later time to reproduce prior operational states, potentially causing incorrect actuation or masking attack activity.", "CIC Modbus Dataset 2023", "pymodbus, scapy"],
      ["Replay", "Zigbee Frame Replay", "Captures previously recorded legitimate Zigbee frames and retransmits them to reproduce commands (e.g., unlock, switch on) without knowledge of the network key.", "ZBDS2023 Zigbee Dataset", "killerbee, Z3sec"],
      ["Replay", "Z-Wave Replay Attack", "Records Z-Wave command frames and replays them to re-execute prior commands on smart home devices, bypassing rolling code protections if not implemented.", "BCCC ZWave 2025", "—"],
      ["Replay", "Thread Selective Jamming of Beacons / First Fragments", "Selectively jams Thread discovery beacons and unsecured first UDP fragments on the joiner port to block legitimate commissioning and replay or intercept session establishment traffic.", "CRAWDAD cmu/thread-devboards", "—"]
    ]
  },
  {
    id: 17,
    title: "Cyber-Physical / Rogue Device",
    rows: [
      ["Cyber-Physical", "BACnet Rogue Device Attack (WriteProperty Manipulation)", "A malicious device is introduced onto the BACnet/IP network and sends unauthorized BACnet WriteProperty commands to manipulate building control equipment (dampers, VAV boxes, cooling coils), causing cyber-induced mechanical faults, occupant discomfort, and energy waste. Eight attack scenarios varying in target, parameters, and season.", "NREL Cyber-Induced Mech. Faults Dataset", "bacpypes"]
    ]
  }
];

const DATASET_ID_BY_NAME = {
  "CIC IoT 2023": 1,
  "CIC IIoT 2025": 2,
  "CIC IIoT 2025 (DataSense)": 2,
  "CIC IoMT 2024": 3,
  "BACnet Attack Dataset": 4,
  "NREL Cyber Faults Dataset": 5,
  "NREL Cyber-Induced Mech. Faults Dataset": 5,
  "MU-IoT": 6,
  "MU-IoT Dataset": 6,
  "KNXnet/IP IDS Dataset": 7,
  "CIC Modbus Dataset 2023": 8,
  "MQTT-IoT-IDS2020": 9,
  "MQTTset": 10,
  "CRAWDAD cmu/thread-devboards": 11,
  "CRAWDAD cmu/zigbee-eda": 12,
  "ZBDS2023 Zigbee Dataset": 13,
  "ZigBeeNet Dataset": 14,
  "BCCC ZWave 2025": 15,
  "BCCC-IoTIDS-ZWave-2025": 15,
  "TON_IoT": 16,
  "TON_IoT Dataset": 16
};

const TOOL_QUERY_NAME_BY_LABEL = {
  "BeEF (Browser Exploitation Framework)": "BeEF (Browser Exploitation Framework)"
};

function renderDatasetLinks(datasetText) {
  return datasetText.split(',').map((name) => {
    const datasetName = name.trim();
    const datasetId = DATASET_ID_BY_NAME[datasetName];
    if (!datasetId) return datasetName;
    return `<a href="datasets.html?scrollToId=${datasetId}" style="color:var(--cyan);text-decoration:none">${datasetName}</a>`;
  }).join(', ');
}

function renderToolLinks(toolText) {
  return toolText.split(',').map((name) => {
    const toolName = name.trim();
    if (!toolName || toolName === "—") return toolName;
    const queryName = TOOL_QUERY_NAME_BY_LABEL[toolName] || toolName;
    const href = `tools.html?tool=${encodeURIComponent(queryName)}`;
    return `<a href="${href}" style="color:var(--cyan);text-decoration:none">${toolName}</a>`;
  }).join(', ');
}

function renderAttackDivisions() {
  const host = document.getElementById('attackDivisions');
  host.innerHTML = ATTACK_DIVISIONS.map((division) => `
    <section class="division-block">
      <h2 class="division-title"><span class="division-index">${division.id}</span>${division.title}</h2>
      <div class="division-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Attack</th>
              <th>Description</th>
              <th>Dataset(s)</th>
              <th>Tool(s)</th>
            </tr>
          </thead>
          <tbody>
            ${division.rows.map((row) => `
              <tr>
                <td>${row[0]}</td>
                <td><strong>${row[1]}</strong></td>
                <td>${row[2]}</td>
                <td class="mono">${renderDatasetLinks(row[3])}</td>
                <td class="mono">${renderToolLinks(row[4])}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `).join('');
}

function initAttacksPage() {
  renderAttackDivisions();
  initMobileNav();
  initFade();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAttacksPage);
} else {
  initAttacksPage();
}
