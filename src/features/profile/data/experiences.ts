import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "hyperverge",
    companyName: "HYPERVERGE",
    companyLogo: "/images/experience/hyperverge.png",
    positions: [
      {
        id: "sde-intern",
        title: "Software Development Engineer",
        employmentPeriod: {
          start: "07.2025",
          end: "Present",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed and released production features across internal AI services, including Generic Forgery Check, Name Match, and Centralized KYC systems, while contributing to model evaluation, performance benchmarking, and continuous monitoring, improving reliability, extensibility, and accuracy of identity verification workflows.
- Built and deployed an Application Form Validation API using AWS Rekognition for document OCR and face comparison, integrating fuzzy matching for data-to-document verification and containerizing the service with Docker for serverless deployment on AWS Lambda.
- Engineered a Slack bot for support engineering query tracking used by 300+ members, streamlining incident triage and improving SLA compliance for issue resolution.`,
        skills: [
          "AWS Rekognition",
          "AWS Lambda",
          "Docker",
          "OCR",
          "Machine Learning",
          "Computer Vision",
          "Python",
          "Model Evaluation",
          "API Development",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
    theme: true,
  },
  {
    id: "forge",
    companyName: "FORGE INNOVATION & VENTURES",
    companyLogo: "/images/experience/forge.jpg",
    positions: [
      {
        id: "git",
        title: "Graduate Innovation Trainee",
        employmentPeriod: {
          start: "01.2025",
          end: "06.2025",
        },
        employmentType: "Trainee",
        icon: "code",
        description: `- Built end-to-end AI data pipelines for speech recognition, text-to-speech, and RAG-based LLM querying, optimizing for low-latency inference on resource-constrained edge devices.
- Developed centralized AI service components, including document retrieval, semantic search (FAISS), and LLM integration using LangChain, enabling real-time voice interaction with an inventory management system.`,
        skills: [
          "LLM",
          "RAG",
          "LangChain",
          "FAISS",
          "Speech Recognition",
          "Text-to-Speech",
          "Semantic Search",
          "Python",
        ],
      },
    ],
  },
  {
    id: "iqube",
    companyName: "IQUBE – INNOVATION CENTER",
    companyLogo: "/images/experience/iqube.jpg",
    positions: [
      {
        id: "ml-trainee",
        title: "Machine Learning Engineer",
        employmentPeriod: {
          start: "06.2023",
          end: "01.2025",
        },
        employmentType: "Trainee",
        icon: "code",
        description: `- Led industrial AI projects applying machine learning techniques to real-world business use cases, collaborating with cross-functional teams to design and implement scalable AI solutions.
- Mentored peers in AI and machine learning through technical sessions and organized internal competitions and hackathons to promote collaborative innovation.`,
        skills: [
          "Machine Learning",
          "AI Pipelines",
          "Mentorship",
          "Project Leadership",
          "Python",
          "Data Science",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "kct",
        title: "Kumaraguru College of Technology",
        employmentPeriod: {
          start: "10.2022",
          end: "05.2026",
        },
        icon: "education",
        description: `- Bachelor of Technology in Artificial Intelligence & Data Science
- Cumulative GPA: 8.4/10`,
        skills: [
          "Machine Learning",
          "Deep Learning",
          "Neural Networks",
          "Data Science",
          "Artificial Intelligence",
        ],
      },
    ],
  },
];
