"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projectData";
import { Project } from "@/data/projectData";

const ProjectsSection = () => {
  // Desktop state
  const [carouselDots, setCarouselDots] = useState<number[]>([]);
  const [currentDotIndex, setCurrentDotIndex] = useState(0);
  const [projectSetsMap, setProjectSetsMap] = useState<
    Map<number, (Project | null)[]>
  >(new Map());

  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const cardsPerSet = 3;

  useEffect(() => {
    const dots = Array.from(
      { length: Math.ceil(projects.length / cardsPerSet) },
      (_, index) => index
    );
    setCarouselDots(dots);

    // Create and initialize project sets map
    const setsMap = new Map<number, (Project | null)[]>();
    dots.forEach((dotIndex) => {
      const startIndex = dotIndex * cardsPerSet;
      const projectSet: (Project | null)[] = projects.slice(
        startIndex,
        startIndex + cardsPerSet
      );

      while (projectSet.length < cardsPerSet) {
        projectSet.push(null);
      }

      setsMap.set(dotIndex, projectSet);
    });
    setProjectSetsMap(setsMap);
  }, []);

  return (
    <section
      id="projects"
      className="sm:min-h-screen md:min-h-screen py-15 bg-gray-900 "
    >
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 sm:mx-48 md:mx-48">
        <h2 className="text-xl font-bold text-center mb-9 text-blue-600">
          Projects
        </h2>

        {/* Mobile View: Single Card */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentMobileIndex].title}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden flex flex-col max-w-sm mx-auto border bg-gray-800/90 
              shadow-[0_8px_30px_rgb(0,0,0,0.7)] 
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(59,130,246,0.3)]"
            >
              <div className="relative h-[140px] w-full">
                <Image
                  src={projects[currentMobileIndex].image}
                  alt={projects[currentMobileIndex].title}
                  fill
                  className="object-cover brightness-[0.9]"
                  sizes="100vw"
                  priority
                  quality={85}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-white">
                  {projects[currentMobileIndex].title}
                </h3>
                <p className="text-gray-400 mb-3 flex-grow line-clamp-3 text-xs">
                  {projects[currentMobileIndex].description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {projects[currentMobileIndex].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#2A2A2A] text-blue-400 px-2 py-0.5 rounded-full text-xs border border-[#404040]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={projects[currentMobileIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-gray-800 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {projects[currentMobileIndex].isLive && (
                    <a
                      href={projects[currentMobileIndex].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-blue-700 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Dots: One for each project */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMobileIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentMobileIndex === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Original 3-Card Layout */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projectSetsMap.get(currentDotIndex)?.map((project, index) =>
                project ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
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
                ) : (
                  <div key={`empty-${index}`} className="hidden lg:block" />
                )
              )}
            </div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center space-x-2 mt-8">
            {carouselDots.map((dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentDotIndex(dotIndex)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentDotIndex === dotIndex
                    ? "bg-blue-600 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Show projects set ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
