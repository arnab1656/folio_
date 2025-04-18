/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-48 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-xl font-bold text-blue-600">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/90 rounded-xl border border-gray-700/50 overflow-hidden
          shadow-[0_8px_30px_rgb(0,0,0,0.7)] 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(59,130,246,0.3)]
          transition-all duration-300"
        >
          <div className="flex flex-row md:flex-col">
            <div className="bg-gray-800 pl-4 py-1 border-b border-gray-700/50">
              <div className="text-blue-400 text-lg font-bold">Know Me...</div>
            </div>

            <div className="flex flex-row p-5">
              <div className="w-[350px] h-[400px] flex-shrink-0">
                <img
                  src="/profile/stand.jpg"
                  alt="Arnab Paul"
                  className="w-[350px] h-full object-cover"
                />
              </div>

              <div className="px-6 space-y-3 flex-grow">
                <div className="space-y-3 text-xs text-gray-300">
                  <p className="leading-relaxed">
                    I&apos;m a Full Stack Developer who thrives on turning
                    real-world problems into scalable digital solutions. Coming
                    from an Electrical Engineering background, I was drawn into
                    software development by the joy of building systems and
                    solving problems with code.
                  </p>
                  <p className="leading-relaxed">
                    I’ve developed a strong interest in scaling both frontend
                    and backend architectures. From managing state in React,
                    exploring Next.js, to working with the MERN stack — I love
                    building systems that perform well and feel great to use. I
                    learn best by diving in, testing, breaking, and building
                    until it all clicks.
                  </p>
                  <p>
                    &quot;Let’s build something awesome — or settle the real
                    debate: Messi or Ronaldo?&quot;
                  </p>
                  <p className="leading-relaxed">
                    Outside tech, you’ll find me at the gym, playing football,
                    gaming, or deep into a good book. I’ve got a knack for
                    tossing unexpected fun into conversations, and recently,
                    I’ve been exploring spirituality to grow beyond the code and
                    build some inner architecture too.
                  </p>
                  <p className="leading-relaxed">
                    People say I think five steps ahead even when we&apos;re
                    just deciding where to eat — maybe it&apos;s just how
                    I&apos;m wired. Life (and debugging) stays interesting that
                    way. If you want to collaborate, share ideas, or just talk
                    tech (or football), feel free to reach out — links are
                    scattered all over this site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
