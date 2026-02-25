const HEATMAP = {
  protocols: ["MQTT","Modbus TCP","KNXnet/IP","Thread","CoAP","Zigbee","Z-Wave","AMQP","XMPP","BACnet","Wi-Fi","Ethernet","BLE","6LoWPAN","HTTP/HTTPS"],
  datasets: [
    {id:1, name:"CIC IoT 2023", display:"CIC IoT\n2023"},
    {id:2, name:"CIC IIoT 2025 (DataSense)", display:"CIC IIoT\n2025\n(DataSense)"},
    {id:3, name:"CIC IoMT 2024", display:"CIC IoMT\n2024"},
    {id:4, name:"BACnet Attack Dataset", display:"BACnet\nAttack\nDataset"},
    {id:5, name:"NREL Cyber Faults Dataset", display:"NREL Cyber\nFaults\nDataset"},
    {id:6, name:"MU-IoT Dataset", display:"MU-IoT\nDataset"},
    {id:7, name:"KNXnet/IP IDS Dataset", display:"KNXnet/IP\nIDS\nDataset"},
    {id:8, name:"CIC Modbus Dataset 2023", display:"CIC Modbus\nDataset 2023"},
    {id:9, name:"MQTT-IoT-IDS2020", display:"MQTT-IoT\nIDS2020"},
    {id:10, name:"MQTTset", display:"MQTTset"},
    {id:11, name:"CRAWDAD cmu/thread-devboards", display:"CRAWDAD\ncmu/thread"},
    {id:12, name:"CRAWDAD cmu/zigbee-eda", display:"CRAWDAD\ncmu/zigbee"},
    {id:13, name:"ZBDS2023 Zigbee Dataset", display:"ZBDS2023\nZigbee\nDataset"},
    {id:14, name:"ZigBeeNet Dataset", display:"ZigBeeNet\nDataset"},
    {id:15, name:"BCCC-IoTIDS-ZWave-2025", display:"BCCC-IoTIDS\nZWave-2025"},
    {id:16, name:"TON_IoT Dataset", display:"TON_IoT\nDataset"}
  ],
  data: [
    ["✗","✓","✓","✗","✗","✓","✗","✗","✓","✓","✗","✗","✗","✗","✓","✓"],
    ["✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✓"],
    ["✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗"],
    ["✗","✗","✗","✗","✗","✓","✗","✗","✗","✗","✗","✗","✗","✗","✗","✗"],
    ["!","✗","✗","✗","✗","X","✗","✗","✗","✗","✗","✓","✓","✔","✗","✗"],
    ["!","✗","✗","✗","✗","X","✗","✗","✗","✗","✗","✗","✗","✗","!","✗"],
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
window.HEATMAP = HEATMAP;
