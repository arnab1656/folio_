"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm">
            Passionate software developer crafting elegant solutions with modern
            technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1F1F1F] rounded-xl shadow-lg overflow-hidden border border-[#383838] max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 items-start gap-6 p-6">
            <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-lg overflow-hidden">
              <Image
                src="/heroImage.jpg"
                alt="Arnab Paul"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="space-y-2.5">
              <h3 className="text-lg font-semibold text-blue-400">
                Software Developer
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Hello! I&apos;m Arnab Paul, a passionate software developer with
                a keen interest in building modern web applications. I
                specialize in full-stack development using cutting-edge
                technologies.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                With a strong foundation in JavaScript/TypeScript and modern
                frameworks like React and Next.js, I enjoy creating efficient,
                scalable, and user-friendly solutions.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                I&apos;m always eager to learn new technologies and best
                practices, staying up-to-date with the latest developments in
                the tech world. When I&apos;m not coding, you can find me
                exploring new technologies and contributing to open-source
                projects.
              </p>

              <div className="flex gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/resume.pdf"
                  target="_blank"
                  className="bg-blue-700 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#contact"
                  className="bg-[#2A2A2A] text-white px-4 py-1.5 rounded-lg hover:bg-[#333333] transition-colors border border-[#404040] text-sm"
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
