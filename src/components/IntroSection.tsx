"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="w-full flex flex-row items-center justify-center gap-50">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-white text-left">
              Hi! I am{" "}
              <div>
                <span className="text-white">Arnab </span>{" "}
                <span className="text-blue-600">Paul</span>
                <span className="text-white">.</span>
              </div>
            </h1>
            <p className="text-xl text-blue-400 mb-8">
              I'm a Full Stack Software Developer
            </p>

            <div className="flex flex-row justify-start space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/arnabp1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[300px] h-[300px]"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 animate-blob">
                <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-blob blur-xl" />
              </div>
              <Image
                src="/heroImage.jpg"
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
