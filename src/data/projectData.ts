interface Project {
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
    image: "/gibli_rtc.png",
    technologies: ["WebRTC", "React", "Node.js", "Socket.io", "WebSockets"],
    githubLink: "https://github.com/yourusername/webrtc-video-call",
    isLive: false,
    liveLink: "https://webrtc-video-call.demo",
  },
  {
    title: "Scalable Chat Application",
    description:
      "A high-performance chat application supporting multiple users, real-time messaging, and file sharing. Built with a microservices architecture for optimal scalability and performance.",
    image: "/sclaChat.jpg",
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
    title: "Docker Containerization Platform",
    description:
      "A comprehensive containerization platform that simplifies deployment and management of applications. Features include automatic scaling, load balancing, and container orchestration.",
    image: "/dockerC.jpg",
    technologies: ["Docker", "Kubernetes", "Go", "React", "PostgreSQL"],
    isLive: false,
    githubLink: "https://github.com/yourusername/docker-platform",
  },
];
