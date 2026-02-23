const PIPELINE = [
  { n:"01", title:"PCAP Extraction", desc:"Extract PCAPs from all 16 datasets plus new attack captures using Zeek with ICSNPP extensions and custom Spicy scripts for IoT-specific protocols (Modbus, BACnet, MQTT, Zigbee, Z-Wave)." },
  { n:"02", title:"Feature Harmonization", desc:"Apply a core feature schema across all protocols — aligning TCP/IP, Modbus, MQTT, BACnet, KNX, Zigbee, and Z-Wave captures into a common network flow feature set." },
  { n:"03", title:"Label Taxonomy Mapping", desc:"Map heterogeneous dataset labels to a unified attack taxonomy. Output standardized log files with consistent class labels across all 16 datasets." },
  { n:"04", title:"Data Quality Assurance", desc:"Remove duplicate records, handle missing values, and eliminate protocol-specific features that would prevent cross-dataset generalization. Validate class distributions." },
  { n:"05", title:"Dataset Merging & Balanced Sampling", desc:"Merge all cleaned datasets into a unified corpus. Apply balanced sampling strategies — oversampling rare attack types, undersampling majority classes — to address severe class imbalance." },
  { n:"06", title:"Feature Engineering", desc:"Derive higher-level statistical, temporal, and protocol-specific features. Encode categorical protocol identifiers. Normalize numerical features. Apply PCA or feature importance analysis." },
  { n:"07", title:"Model Architecture (PyTorch / TensorFlow)", desc:"Implement and compare deep learning architectures: CNN-LSTM for temporal patterns, Graph Neural Networks for device relationship modeling, Transformer-based anomaly detection, and ensemble classifiers." },
  { n:"08", title:"Validation via PCAP Replay", desc:"Replay both existing dataset PCAPs and newly generated attack traffic through the trained model. Evaluate detection performance, analyze confusion matrices, and iterate for improvement." }
];

const PLANNED_MODELS = [
  { name:"Random Forest", family:"Classical ML", desc:"Baseline ensemble classifier. Proven strong baseline for network intrusion detection with tabular flow features. Expected to perform well on seen-protocol detection.", status:"Planned" },
  { name:"XGBoost / LightGBM", family:"Gradient Boosting", desc:"Gradient boosted trees with fast inference. Handles class imbalance well with sample_weight. Likely strong overall F1 on balanced training set.", status:"Planned" },
  { name:"CNN-LSTM", family:"Deep Learning", desc:"Convolutional layers for feature extraction from flow windows followed by LSTM for temporal dependencies. Targets protocol-sequence-aware anomaly detection.", status:"Planned" },
  { name:"Transformer (BERT-style)", family:"Attention-based", desc:"Self-attention architecture treating network flows as token sequences. Aims to capture long-range dependencies in attack campaign traffic patterns.", status:"Planned" },
  { name:"Graph Neural Network", family:"Graph ML", desc:"Models the IoT device interaction graph. Nodes = devices, edges = communication patterns. Targets botnet and lateral movement detection.", status:"Planned" },
  { name:"Autoencoder / VAE", family:"Anomaly Detection", desc:"Unsupervised anomaly detection via reconstruction error. Trained only on benign traffic. Targets zero-day and novel attack detection without labeled attack data.", status:"Planned" },
  { name:"Federated Learning (IID/non-IID)", family:"Privacy-preserving ML", desc:"Distributed training across simulated IoT gateway nodes. Each node trains on local protocol-specific data; global model aggregated via FedAvg.", status:"Research" },
  { name:"Multi-task Learning IDS", family:"Deep Learning", desc:"Single model simultaneously predicting: (1) binary normal/attack, (2) attack category, (3) specific attack type. Shared encoder with task-specific heads.", status:"Research" }
];

window.PIPELINE = PIPELINE;
window.PLANNED_MODELS = PLANNED_MODELS;
