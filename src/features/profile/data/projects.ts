import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "hypergen",
    title: "IdGenerator.ai: Synthetic Government ID Generation System",
    period: { start: "2025" },
    link: "https://github.com/jvishwa06/HyperGen.ai",
    skills: [
      "Computer Vision",
      "OpenCV",
      "EasyOCR",
      "Stable Diffusion 3.5",
      "Flux.1 Dev",
      "Python",
      "Gradio",
    ],
    isExpanded: true,
    description: `An advanced tool for generating synthetic Aadhar cards (Indian government ID) using both computer vision techniques and AI-based generative models. This project implements two distinct approaches to ID generation:

- **CV-based Generation:** Uses OpenCV and EasyOCR to modify existing Aadhar card templates with new information.
- **AI-based Generation:** Leverages Stable Diffusion 3.5 Large and Flux.1 Dev to generate completely synthetic IDs.

**Key Features:**
- Natural Language Processing to extract details from free-form text
- Dual Generation Methods (CV-based or AI-based)
- Customizable blurring effects
- Simple Gradio web UI

**Disclaimer:** This project is for research and educational purposes only.`,
  },
  {
    id: "inventory-management-voice-ai",
    title: "InventoryAssistant.ai: Voice-Driven Inventory Management Assistant",
    period: { start: "2025" },
    link: "https://github.com/jvishwa06/Voice.ai",
    skills: [
      "Python",
      "Vosk (Wake Word)",
      "Faster Whisper (STT)",
      "ChromaDB",
      "LangChain",
      "Ollama (Qwen2.5)",
      "Kokoro TTS",
      "RAG",
    ],
    description: `A sophisticated voice-enabled inventory management system leveraging cutting-edge AI technologies for hands-free conversational access to inventory data.

- **Wake Word Detection:** Automatic activation with Vosk
- **Natural Language Processing:** Advanced STT transcription via Faster Whisper
- **Semantic Search:** Intelligent vector-based retrieval using ChromaDB and HuggingFace
- **LLM Integration:** Contextual response generation using Ollama
- **Text-to-Speech:** Natural-sounding audio responses using Kokoro LTS
- Low-latency real-time audio streams with comprehensive system logging.`,
  },
  {
    id: "autonomous-agriculture-robot",
    title: "Harvestor.ai: Autonomous Agriculture Robot",
    period: { start: "2025" },
    link: "https://github.com/jvishwa06/AutonomousAgriculturalRobot",
    skills: [
      "AI",
      "ROS Noetic",
      "Python",
      "YOLOv8",
      "PyTorch",
      "CUDA",
      "Intel RealSense",
      "Jetson Orin Nano",
    ],
    description: `Developed an autonomous agriculture robot to automate paddy harvesting. It uses advanced AI and ROS capabilities for precise paddy detection, picking, and transportation.

- **AI-Driven Detection:** YOLOv8-based model quantized to FP16.
- **Efficient Harvesting:** Autonomously detects, picks, and transports paddy to the storage zone.
- **Depth Sensing:** Intel RealSense depth camera for obtaining point clouds and enhanced object detection.
- **High Performance:** 95% model accuracy with inference time reduced to 15ms on the Jetson Orin Nano.`,
  },
  {
    id: "defective-tapper-roller-detection",
    title: "RollerInspector.ai: Defective Tapper Roller Detector",
    period: { start: "2025" },
    link: "https://github.com/jvishwa06/DefectiveRollerDetection",
    skills: [
      "YOLOv8",
      "YOLOv10",
      "Python Snap7",
      "CUDA",
      "Grounding DINO",
      "Siemens S7 PLC",
      "Tkinter",
      "Computer Vision",
    ],
    description: `An advanced machine learning and computer vision solution to identify defects in industrial rollers on a high-speed conveyor (120 RPM, 90 FPS camera).

- **Defect Detection:** Identifies rust, dents, damage, scratches, chatter, and flat lines across parts of the roller.
- **PLC Integration:** Seamlessly integrates with the Siemens S7 PLC for automated accept/reject decisions.
- **Model Optimization:** Experimented with SAHI inference, object detection, and quantization. Used Grounding DINO for auto-labeling.
- **User Interface:** Tkinter-based GUI for monitoring the system, visualizing results, and adjusting thresholds in real-time.`,
  },
  {
    id: "trivia-ai",
    title: "TriviaSolver.ai: AI Powered Q&A Assistant",
    period: { start: "2025" },
    link: "https://github.com/jvishwa06/Trivia.ai",
    skills: [
      "Python 3.12",
      "OpenCV",
      "Llama 3.3",
      "Gemma 2",
      "Gemini Flash",
      "Mixtral Large",
      "Surya OCR",
      "ThreadPoolExecutor",
    ],
    description: `A real-time AI-powered Trivia Q/A assistant that captures questions via camera and cross-references answers from four different AI models.

- **Real-Time Capture & OCR:** Uses OpenCV and Surya OCR for continuous, on-device optical character recognition directly from webcam feeds.
- **Team-Check Mode:** Concurrently cross-references answers from Llama 3.3, Gemma 2, Gemini Flash, and Mixtral Large for optimal accuracy.
- **Concurrent Processing:** Implements Python's \`ThreadPoolExecutor\` for parallel API calls, ensuring a fast, non-blocking UI.
- **Clean Architecture:** Applied SOLID principles and design patterns (Factory, Strategy, Observer) for scalable business logic.`,
  },
  {
    id: "deep-tracers-v0",
    title: "DeepTracer.ai: Advanced Deepfake Detection System",
    period: { start: "2025" },
    link: "https://github.com/jvishwa06/DeepTracersV0",
    skills: [
      "PyTorch",
      "TensorFlow",
      "React + Vite",
      "Flask",
      "ResNet50",
      "Vision Transformer",
      "Blockchain",
      "Ollama",
    ],
    description: `An advanced platform designed to detect deepfakes in social media images, audio, and video content using AI models and blockchain technology to ensure media integrity.

- **Hybrid AI Model:** Combines ResNet50, Inceptionv3, and Vision Transformers (98.64% Visual / 96.16% Audio Accuracy). Models are processed via Post-Training Full Integer Quantization for 15-20ms inference.
- **Federated Learning:** Trained separately on FaceForensics++ and DFDC datasets and combined via federated learning to handle computational complexity.
- **Blockchain Traceability:** Generates cryptographic hashes for real user posts to allow future verification.
- **Ecosystem Features:** Built a React web/mobile app, an Ollama Q&A chatbot, Explainable AI (GradCAM), and exposed the system via a Python API package.`,
  },
];
