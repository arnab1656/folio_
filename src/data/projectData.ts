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
    title: "Scalable Chat Application Server",
    description:
      "A high-performance chat application Servers supporting multiple users, real-time messaging, and file sharing. Built with a microservices architecture for optimal scalability and performance.",
    image: "/project/backend_scale.png",
    technologies: ["Docker", "Node.js", "PostgreSQL"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/scaleyChateyServer",
  },
  {
    title: "Three.js Animation Scene",
    description:
      "This is a Three.js Animation Scene that allows you to create a 3D animation scene using Three.js.",
    image: "/project/ani.png",
    technologies: ["Three.js", "Next.js", "CSS"],
    isLive: true,
    githubLink: "https://github.com/arnab1656/my-next-threejs-app",
    liveLink: "https://my-next-threejs-app.vercel.app/",
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
    image: "/project/globe.jpg",
    technologies: ["Three.js", "React", "CSS"],
    isLive: true,
    githubLink: "https://github.com/arnab1656/globe",
    liveLink: "https://globe-gilt.vercel.app/",
  },
  {
    title: "PDF Query System",
    description:
      "This is a pdf query system that allows you to query a pdf file using natural language.",
    image: "/project/pdf_query.jpg",
    technologies: ["React", "FastAPI", "Langchain", "LLM"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/pdfQuery",
  },
  {
    title: "Speech to Text Generation",
    description:
      "This is a speech to text generation system that allows you to generate text from speech.",
    image: "/project/tts.jpg",
    technologies: ["vanilla js", "TS"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/text-to-speech",
  },
  {
    title: "ScradIen",
    description: "This is a web app that allows you Scarap data from LinkedIn.",
    image: "/project/webS.jpg",
    technologies: ["Next.js", "Tailwind", "Socket.io client"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/scrapple_v1.0",
  },
  {
    title: "ScradIen Backend",
    description:
      "This is a Backend for ScradIen for handing the Robustness of the system.",
    image: "/project/backendS.png",
    technologies: ["Node.js", "Socket.io", "PostgreSQL", "Redis", "Kafka"],
    isLive: false,
    githubLink: "https://github.com/arnab1656/scrapd_in_Back",
  },
  {
    title: "CouResa",
    description:
      "This is a CouResa for Simplifying the Course Enrollment program for the students.",
    image: "/project/cou.png",
    technologies: ["Node.js", "Next.js", "MUI", "Prisma ORM", "MongoDB"],
    isLive: true,
    githubLink: "https://github.com/arnab1656/cou",
    liveLink: "https://couresa.vercel.app/",
  },
];
