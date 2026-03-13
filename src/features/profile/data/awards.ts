import type { Award } from "../types/awards";

export const AWARDS: Award[] = [
  {
    id: "dd-robocon-2024",
    prize: "All India Rank 17",
    title: "DD ROBOCON 2024 by IIT Delhi & Prasar Bharati",
    date: "2024",
    description: `**Autonomous Agriculture Robot**\nThis project focuses on the development of an autonomous agriculture robot designed to efficiently detect, pick, and transport paddy to a storage zone. Leveraging AI, ROS, and state-of-the-art hardware, the robot is optimized for real-world agricultural applications.\n\n**Key Features:**\n- **AI-driven Paddy Detection**: Trained YOLOv8 object detection model.\n- **Depth Sensing**: Intel RealSense depth camera for accurate navigation and point cloud generation.\n- **Edge AI**: Post-training quantized FP16 model deployed on Jetson Orin Nano, reducing latency to 15ms with 95% accuracy.`,
    referenceLink:
      "https://drive.google.com/file/d/1Qn1s2DE9KVlOPl8aT9RaGB60l2bUbn-H/view?usp=sharing",
  },
  {
    id: "sustainathon-2025",
    prize: "Winner",
    title: "Sustainathon 2025 by Hyperverge",
    date: "2025",
    description: `**AI-Powered Video Conferencing Application**\nAn advanced emotion recognition system for video conferences using a multi-modal AI model. It processes both video and audio data to analyze participants' emotions in real-time and provides live heatmaps.\n\n**Tech Stack & Architecture:**\n- **Facial Emotion Recognition**: EfficientNet-B0 trained on AffectNet.\n- **Audio Emotion Recognition**: OpenAI Whisper.\n- **Optimized Backend**: React + SimplePeer + TorchServe for low latency, handling batch inference and auto-scaling for enterprise scalability.\n- **RAG System**: Integrates Retrieval-Augmented Generation to offer contextual meeting summaries and Q&A.`,
    referenceLink:
      "https://drive.google.com/file/d/10TlBzIU8YWKeoTwRWm-wvN-KfecIasdw/view?usp=sharing",
  },
  {
    id: "deep-tracers-v0",
    prize: "All India Rank 3",
    title:
      "National Terrier Cyber Quest – Datathon 2024 by Indian Territorial Army & CyberPeace",
    date: "2024",
    description: `**DeepTracersV0 - Advanced Deepfake Detection Platform**\nA multi-modal platform detecting deepfakes in social media content. Uses blockchain to generate cryptographic hashes for genuine posts, while flagging deepfakes for cybersecurity professionals.\n\n**Tech Highlights:**\n- **Hybrid AI Model**: Combines ResNet50, Inceptionv3, and Vision Transformer (98.64% Visual Accuracy, 96.16% Audio Accuracy).\n- **High Performance**: Post-Training Full Integer Quantization yielding 15-20ms inference speeds on an RTX4090.\n- **Federated Learning**: Used across FaceForensics++ and DeepFake Detection Datasets.\n- **Ecosystem**: Includes a React web app, mobile app, Explainable AI (GradCAM), Ollama Q&A Chatbot, and an exposed Python Package API.`,
    referenceLink:
      "https://drive.google.com/file/d/1tqiVRFjtKf8FyHWilZQxQcrZ8LU1IDPH/view?usp=sharing",
  },
  {
    id: "sn-bose-award-2025",
    prize: "Awardee",
    title: "SN Bose Award",
    date: "2025",
    description: "Awarded by Kumaraguru College of Technology.",
    referenceLink:
      "https://drive.google.com/file/d/1IBnhoBN-li19ydlwIYZA5HBdLvyqGTqs/view?usp=sharing",
  },
  {
    id: "kct-certificates-2025",
    prize: "Recipient",
    title: "2 x Certificates of Recognition 2024 & 2025",
    date: "2025",
    description: "Recognized by Kumaraguru College of Technology.",
    referenceLink:
      "https://drive.google.com/file/d/1-AMwRULoCNnZ8wjUr1XcMZrVyz_dk0n2/view?usp=sharing",
  },
  {
    id: "wise-ai-thon-2025",
    prize: "Finalist",
    title: "Wise-ai-thon 2025 by Wise Work",
    date: "2025",
    description:
      "**AI-Recruiter** leverages RAG, LLMs, and Generative AI to automate and optimize the recruitment process, enhancing candidate matching and screening efficiency.",
    referenceLink:
      "https://drive.google.com/file/d/1FRkwVZ5LyDocgMcpnB1ghn25bku_aKZ-/view?usp=sharing",
  },
];
