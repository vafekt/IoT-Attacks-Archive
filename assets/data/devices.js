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
      { name:"HVAC Systems (VAV Controllers, AHU Controllers)", type:"HVAC", desc:"Variable Air Volume boxes and Air Handling Unit controllers. Main targets in NREL Cyber Faults dataset â€” rogue BACnet WriteProperty commands manipulate damper positions." },
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
      { name:"Data Center Equipment", type:"Infrastructure", desc:"AMQP is extensively used in data center message queuing â€” between microservices, between IoT platforms and backend processing pipelines." },
      { name:"Azure Service Bus", type:"Cloud Platform", desc:"Microsoft's cloud AMQP 1.0 broker supporting high-throughput enterprise messaging. Used for IoT device-to-cloud telemetry at scale." },
      { name:"AWS Amazon MQ", type:"Cloud Platform", desc:"Managed Apache ActiveMQ and RabbitMQ service on AWS. Supports AMQP 1.0 for enterprise IoT integrations." },
      { name:"High-end Embedded Linux Systems (Raspberry Pi 4+)", type:"SBC", desc:"The most constrained device that can reasonably run a full AMQP client. Not suitable for battery-powered sensors." }
    ]
  },
  { protocol:"XMPP", color:"gray",
    devices:[
      { name:"Linux-based IoT Gateways", type:"Gateway", desc:"IoT gateways running XMPP clients to bridge local sensor networks to XMPP-based messaging platforms. Requires sufficient RAM for XML processing." },
      { name:"Smartphones (iOS/Android)", type:"Mobile", desc:"XMPP originated in instant messaging (Jabber). Smartphone IoT apps occasionally use XMPP for device presence and command messaging." },
      { name:"Desktop Clients (Linux, Windows, macOS)", type:"Desktop", desc:"Standard XMPP clients (Pidgin, Gajim) used in IoT contexts for monitoring and remote device command â€” especially in early IoT deployments." },
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
      { name:"Smart Locks (Yale, Kwikset)", type:"Security", desc:"Zigbee-enabled deadbolts providing remote lock/unlock. Battery-powered â€” vulnerable to energy depletion attacks. Used in CIC IoT 2023 testbed." },
      { name:"Motion/Door Sensors (SmartThings, Aqara)", type:"Sensor", desc:"Battery-powered Zigbee end devices. Sleep between reports â€” making them targets for energy depletion via spoofed Data Request jamming." },
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
      { name:"iBeacon / Eddystone Beacons (Nordic, Radius Networks)", type:"Beacon", desc:"BLE advertising-only devices for indoor positioning and asset tracking. No active connection â€” only broadcast. Cannot be directly attacked via GATT." },
      { name:"Nordic nRF52 Series / TI CC2640 / Dialog DA14xxx", type:"Microcontroller", desc:"Primary BLE SoC platforms. Nordic nRF52840 supports both BLE and IEEE 802.15.4. TI CC2640 used in industrial BLE sensor nodes. Dialog DA14xxx in wearables." }
    ]
  },
  { protocol:"Thread", color:"cyan",
    devices:[
      { name:"Apple HomePod mini (Thread Border Router)", type:"Border Router", desc:"Acts as a Thread Border Router when updated. Provides reliable, always-on Thread â†” IP routing. Required for Matter over Thread ecosystems." },
      { name:"Google Nest Hub Max / Nest Wi-Fi Pro", type:"Border Router", desc:"Google devices serving as Thread Border Routers. Connect Thread mesh to home IP network for cloud access and Matter ecosystem integration." },
      { name:"Thread Smart Bulbs (Nanoleaf Essentials, LIFX)", type:"Lighting", desc:"Matter over Thread bulbs using low-power mesh connectivity. Thread routing devices (FTDs) contributing to mesh resilience." },
      { name:"Thread Smart Locks (Eve, Yale)", type:"Security", desc:"Battery-powered Thread end devices. Use Sleepy End Device (SED) mode for battery efficiency â€” making them targets for energy depletion attacks." },
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
window.DEVICES = DEVICES;
