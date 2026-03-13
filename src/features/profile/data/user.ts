import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Vishwa",
  lastName: "J",
  displayName: "Vishwa J",
  username: "vishwa",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  timeZone: "Asia/Kolkata",
  flipSentences: ["AI Engineer", "ML Engineer"],
  address: "Hosur, India",
  phoneNumber: "KzkxIDc4MTI4MjU4MTg=", // E.164 format, base64 encoded
  secondPhoneNumber: "",
  // base64-string-converter)
  email: "anZpc2h3YS5vZmZpY2lhbEBnbWFpbC5jb20=", // base64 encoded
  website: "https://jvishwa.me",
  jobTitle: "AI Engineer",
  jobs: [
    {
      title: "AI Engineer",
      company: "",
      website: "",
    },
    {
      title: "Founder",
      company: "ShopFlow",
      website: "/products/shopflow",
    },
  ],
  about: `I build production-grade AI systems that solve real business problems and ship reliably. My work spans machine learning, deep learning, LLMs, and AI agents, focusing on end-to-end systems—from data pipelines and model training to scalable deployment and monitoring.

I engineer solutions with a production-first mindset, optimizing for constraints, cost efficiency, and speed of delivery. This includes designing architectures that reduce inference costs, scale to real workloads, and deliver measurable impact.`,
  avatar: "/images/me.png",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/vishwa.mp3",
  keywords: [
    "vishwa",
    "vishwa j",
    "vishwa portfolio",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "three.js developer",
    "3d web developer",
    "electron developer",
    "desktop app developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2025-10-12", // YYYY-MM-DD
};
