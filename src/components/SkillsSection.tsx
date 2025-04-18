"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skillData";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="min-h-screen max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-center mb-16 text-blue-600"
        >
          Top Skills
        </motion.h2>

        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                shadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="flex items-center gap-3 bg-gray-800/90 rounded-lg px-6 py-3 border border-gray-700/50 min-w-[180px] flex-grow-0 
              shadow-[0_8px_16px_rgba(0,0,0,0.5),0_0_4px_rgba(255,255,255,0.05)] 
              hover:shadow-[0_16px_32px_rgba(0,0,0,0.6),0_0_8px_rgba(59,130,246,0.2)] 
              transition-all duration-300"
            >
              <skill.icon
                className={`text-2xl ${skill.color} drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]`}
              />
              <span className="text-gray-200 text-lg whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
