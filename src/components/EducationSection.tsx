"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/data/educationData";

const EducationSection = () => {
  return (
    <section id="education" className="pt-5 pb-16 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-blue-600">Education</h2>
          <p className="mt-3 text-gray-400 text-sm">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gray-700" />

          {/* Education items */}
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:justify-between items-start mb-8 relative"
            >
              {/* Date circle and text */}
              <div className="flex items-center md:w-1/2 md:justify-end mb-4 md:mb-0">
                <div className="flex items-center md:order-2">
                  <span className="w-8 h-8 rounded-full bg-blue-600 border-4 border-gray-900 absolute md:left-1/2 transform md:-translate-x-1/2" />
                  <span className="text-gray-400 text-sm ml-12 md:ml-0 md:mr-8 whitespace-nowrap">
                    {education.period}
                  </span>
                </div>
              </div>

              {/* Education details */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                <div
                  className="bg-gray-800/90 rounded-xl p-4 border border-gray-700/50
                  shadow-[0_8px_30px_rgb(0,0,0,0.7)] 
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(59,130,246,0.3)]
                  transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold mt-1 text-white">
                    {education.degree}
                  </h3>
                  <h4 className="text-gray-300 text-sm mt-1">
                    {education.institution}
                  </h4>
                  <p className="text-gray-400 text-xs">{education.location}</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
