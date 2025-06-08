"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="w-full flex flex-col-reverse items-center justify-center gap-8 sm:flex-col md:flex-row md:gap-25 md:px-4 lg:gap-50">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-white">
              Hi! I am{" "}
              <div className="pb-2 pt-2 font-bold">
                <span className="text-white">Arnab </span>{" "}
                <span className="text-blue-600">Paul</span>
                <span className="text-white">.</span>
              </div>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-blue-400 mb-8 md:mb-12">
              I&apos;m a Full Stack Software Developer
            </p>
            <div className="flex flex-row justify-center md:justify-start space-x-9">
              <a href="mailto:arnab.paul.1656@gmail.com" className="group">
                <div className="w-14 h-14  rounded-full border border-gray-500 flex items-center justify-center text-[#EA4335] group-hover:text-[#EA4335] transition-colors hover:bg-white">
                  <SiGmail size={20} />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/arnabp1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-14 h-14  rounded-full border border-gray-500 flex items-center justify-center text-[#005b8e] transition-colors hover:bg-white">
                  <FaLinkedin size={20} />
                </div>
              </a>
              <a
                href="https://github.com/arnab1656"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center text-white group-hover:text-white transition-colors hover:bg-black">
                  <FaGithub size={20} />
                </div>
              </a>
              <a
                href="https://www.unimad.ai/resume/arnab-resume"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-auto h-14 px-4 rounded-full border border-gray-500 flex items-center gap-2 text-blue-400 group-hover:text-blue-600 transition-colors hover:bg-white">
                  <FaFileAlt size={20} />
                  <span className="text-sm hidden sm:inline-block text-inherit font-medium">
                    Resume
                  </span>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-blob">
                <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-blob blur-xl" />
              </div>
              <Image
                src="/heroimage.jpg"
                alt="Arnab"
                fill
                className="rounded-blob object-cover z-10 relative"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
