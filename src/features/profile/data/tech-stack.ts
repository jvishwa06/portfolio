import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  // ML/AI Frameworks
  {
    key: "tensorflow",
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    categories: ["ML/AI"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    key: "pytorch",
    title: "PyTorch",
    href: "https://pytorch.org/",
    categories: ["ML/AI"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  {
    key: "scikitlearn",
    title: "Scikit-Learn",
    href: "https://scikit-learn.org/",
    categories: ["ML/AI"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  {
    key: "opencv",
    title: "OpenCV",
    href: "https://opencv.org/",
    categories: ["ML/AI"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    categories: ["ML/AI"],
    iconUrl: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  },
  {
    key: "huggingface",
    title: "Hugging Face",
    href: "https://huggingface.co/",
    categories: ["ML/AI"],
    iconUrl:
      "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
  },

  // Data Science & Big Data
  {
    key: "spark",
    title: "Apache Spark",
    href: "https://spark.apache.org/",
    categories: ["Data Processing"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
  },
  {
    key: "kafka",
    title: "Apache Kafka",
    href: "https://kafka.apache.org/",
    categories: ["Data Processing"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  },
  {
    key: "numpy",
    title: "NumPy",
    href: "https://numpy.org/",
    categories: ["Library"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    key: "pandas",
    title: "Pandas",
    href: "https://pandas.pydata.org/",
    categories: ["Library"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    theme: true,
  },

  // Web Frameworks
  {
    key: "fastapi",
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org",
    categories: ["Runtime Environment"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    key: "expressjs",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Framework"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    theme: true,
  },

  // Databases
  {
    key: "postgres",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  // Vector Databases
  {
    key: "faiss",
    title: "FAISS",
    href: "https://github.com/facebookresearch/faiss",
    categories: ["Vector Database"],
    iconUrl: "https://avatars.githubusercontent.com/u/69631?s=200&v=4",
  },
  {
    key: "pinecone",
    title: "Pinecone",
    href: "https://www.pinecone.io/",
    categories: ["Vector Database"],
    iconUrl: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4",
  },

  // DevOps & Containerization
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "https://kubernetes.io/",
    categories: ["Containerization"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
  },

  // MLOps
  {
    key: "mlflow",
    title: "MLflow",
    href: "https://mlflow.org/",
    categories: ["MLOps"],
    iconUrl: "/images/tech-stack/mlflow.png",
    theme: true,
  },

  // CI/CD
  {
    key: "githubactions",
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
    categories: ["CI/CD"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    theme: true,
  },
  {
    key: "gitlabci",
    title: "GitLab CI",
    href: "https://docs.gitlab.com/ee/ci/",
    categories: ["CI/CD"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },

  // Version Control
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Version Control"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    theme: true,
  },
  {
    key: "gitlab",
    title: "GitLab",
    href: "https://gitlab.com/",
    categories: ["Version Control"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },

  // AI Tools
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    categories: ["Tools", "AI"],
    iconUrl:
      "https://assets.chanhdai.com/images/tech-stack-icons/chatgpt-light.svg",
    theme: true,
  },
  {
    key: "ollama",
    title: "Ollama",
    href: "https://ollama.com/",
    categories: ["Tools", "AI"],
    iconUrl: "https://ollama.com/public/icon-64x64.png",
  },
  {
    key: "vllm",
    title: "vLLM",
    href: "https://github.com/vllm-project/vllm",
    categories: ["Tools", "AI"],
    iconUrl: "/images/tech-stack/vllm.png",
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    categories: ["Tools", "AI"],
    iconUrl: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4",
  },
  {
    key: "stackoverflow",
    title: "Stack Overflow",
    href: "https://stackoverflow.com/",
    categories: ["Others"],
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg",
  },
];
