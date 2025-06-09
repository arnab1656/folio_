export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  isLive: boolean;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: "WebRTC P2P Video Call",
    description:
      "A real-time peer-to-peer video calling application built with WebRTC. Features include HD video quality, screen sharing capabilities, and instant connection between peers with minimal latency.",
    image: "/project/webrtc.png",
    technologies: ["WebRTC", "React", "Node.js", "Socket.io", "WebSockets"],
    githubLink: "https://github.com/arnab1656/p2p-Video-Call",
    isLive: false,
    liveLink: "https://webrtc-video-call.demo",
  },
  {
    title: "Scalable Chat Application",
    description:
      "A high-performance chat application supporting multiple users, real-time messaging, and file sharing. Built with a microservices architecture for optimal scalability and performance.",
    image: "/project/scaleimage.jpg",
    technologies: [
      "React",
      "Node.js",
      "Redis",
      "MongoDB",
      "Docker",
      "WebSocket",
    ],
    isLive: false,
    githubLink: "https://github.com/yourusername/scalable-chat",
    liveLink: "https://scalable-chat.demo",
  },
  {
    title: "Scalable Chat Application Backend",
    description:
      "A high-performance chat application Servers supporting multiple users, real-time messaging, and file sharing. Built with a microservices architecture for optimal scalability and performance.",
    image: "/project/docker.jpg",
    technologies: ["Docker", "Node.js", "PostgreSQL"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/scaleyChateyServer",
  },
  {
    title: "Docker Containerization Platform",
    description:
      "A comprehensive containerization platform that simplifies deployment and management of applications. Features include automatic scaling, load balancing, and container orchestration.",
    image: "/project/docker.jpg",
    technologies: ["react", "express", "docker-container", "dockerode"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/docker-Orchestration",
  },
  {
    title: "GLobe Animation using Three.js",
    description:
      "A comprehensive containerization platform that simplifies deployment and management of applications. Features include automatic scaling, load balancing, and container orchestration.",
    image: "/project/docker.jpg",
    technologies: ["Three.js", "React", "CSS"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/globe",
  },
  {
    title: "PDF Query System",
    description:
      "This is a pdf query system that allows you to query a pdf file using natural language.",
    image: "/project/docker.jpg",
    technologies: ["React", "FastAPI", "Langchain", "LLM"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/pdfQuery",
  },
  {
    title: "Speech to Text Generation",
    description:
      "This is a speech to text generation system that allows you to generate text from speech.",
    image: "/project/docker.jpg",
    technologies: ["vanilla js", "TS"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/pdfQuery",
  },
  {
    title: "ScradIen",
    description: "This is a web app that allows you Scarap data from LinkedIn.",
    image: "/project/docker.jpg",
    technologies: ["Next.js", "Tailwind", "Socket.io client"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/scrapple_v1.0",
  },
  {
    title: "ScradIen Backend",
    description:
      "This is a Backend for ScradIen for handing the Robustness of the system.",
    image: "/project/docker.jpg",
    technologies: ["Node.js", "Socket.io", "PostgreSQL", "Redis", "Kafka"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/scrapd_in_Back",
  },
];
