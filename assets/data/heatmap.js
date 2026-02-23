const HEATMAP = {
  protocols: ["MQTT","Modbus TCP","KNX","Thread","CoAP","Zigbee","Z-Wave","AMQP","XMPP","BACnet","Wi-Fi","Ethernet","BLE","6LoWPAN","HTTP/HTTPS"],
  datasets: [
    {id:1, name:"CIC IoT 2023", display:"CIC IoT\n2023"},
    {id:2, name:"CIC IIoT 2025 (DataSense)", display:"DataSense\nIIoT25"},
    {id:3, name:"CIC IoMT 2024", display:"CIC IoMT\n2024"},
    {id:4, name:"BACnet Attack Dataset", display:"BACnet\nAtk"},
    {id:5, name:"NREL Cyber Faults Dataset", display:"Cyber\nFaults"},
    {id:6, name:"MU-IoT Dataset", display:"MU-IoT"},
    {id:7, name:"KNXnet/IP IDS Dataset", display:"KNXnet\n/IP"},
    {id:8, name:"CIC Modbus Dataset 2023", display:"CIC\nModbus"},
    {id:9, name:"MQTT-IoT-IDS2020", display:"MQTT\nIDS20"},
    {id:10, name:"MQTTset", display:"MQTTset"},
    {id:11, name:"CRAWDAD cmu/thread-devboards", display:"Thread\nCMU"},
    {id:12, name:"CRAWDAD cmu/zigbee-eda", display:"Zigbee\nEDA"},
    {id:13, name:"ZBDS2023 Zigbee Dataset", display:"ZBDS\n2023"},
    {id:14, name:"ZigBeeNet Dataset", display:"ZigBee\nNet"},
    {id:15, name:"BCCC-IoTIDS-ZWave-2025", display:"ZWave\n2025"},
    {id:16, name:"TON_IoT Dataset", display:"TON_IoT"}
  ],
  data: [
    ["✗","✓","✓","✗","✗","✓","✗","✗","✓","✓","✗","✗","✗","✗","✓","✓"],
    ["✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✓"],
    ["✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["!","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✓","✔","✗","✗"],
    ["!","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗"],
    ["✗","✗","✗","✗","✗","✔","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✔","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✓","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["!","✓","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓","✓"],
    ["✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗"],
    ["✓","✓","✓","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓"]
  ]
};
window.HEATMAP = HEATMAP;
