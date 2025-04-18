"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projectData";

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   githubLink: string;
//   liveLink?: string;
// }

// const projects: Project[] = [
//   {
//     title: "WebRTC P2P Video Call",
//     description:
//       "A real-time peer-to-peer video calling application built with WebRTC. Features include HD video quality, screen sharing capabilities, and instant connection between peers with minimal latency.",
//     image: "/gibli_rtc.png",
//     technologies: ["WebRTC", "React", "Node.js", "Socket.io", "WebSockets"],
//     githubLink: "https://github.com/yourusername/webrtc-video-call",
//     liveLink: "https://webrtc-video-call.demo",
//   },
//   {
//     title: "Scalable Chat Application",
//     description:
//       "A high-performance chat application supporting multiple users, real-time messaging, and file sharing. Built with a microservices architecture for optimal scalability and performance.",
//     image: "/sclaChat.jpg",
//     technologies: [
//       "React",
//       "Node.js",
//       "Redis",
//       "MongoDB",
//       "Docker",
//       "WebSocket",
//     ],
//     githubLink: "https://github.com/yourusername/scalable-chat",
//     liveLink: "https://scalable-chat.demo",
//   },
//   {
//     title: "Docker Containerization Platform",
//     description:
//       "A comprehensive containerization platform that simplifies deployment and management of applications. Features include automatic scaling, load balancing, and container orchestration.",
//     image: "/dockerC.jpg",
//     technologies: ["Docker", "Kubernetes", "Go", "React", "PostgreSQL"],
//     githubLink: "https://github.com/yourusername/docker-platform",
//   },
// ];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-15 bg-gray-900">
      <div className="max-w-6xl mx-48 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-center mb-9 text-blue-600">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-xl overflow-hidden flex flex-col max-w-sm mx-auto w-full border bg-gray-800/90 
              shadow-[0_8px_30px_rgb(0,0,0,0.7)] 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(59,130,246,0.3)] 
              transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-[140px] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-[0.9]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  quality={85}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 flex-grow line-clamp-3 text-xs">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#2A2A2A] text-blue-400 px-2 py-0.5 rounded-full text-xs border border-[#404040] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors text-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.isLive && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-blue-700 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
