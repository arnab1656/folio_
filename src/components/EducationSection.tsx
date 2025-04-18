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
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#383838]" />

          {/* Education items */}
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative grid md:grid-cols-2 gap-6 mb-6  md:text-right`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full mt-6 border-2 border-[#121212]" />

              {/* Content */}
              <div
                className={`md:col-start-${
                  index % 2 === 0 ? "1" : "2"
                } p-4 bg-[#1F1F1F] rounded-lg border border-[#383838]`}
              >
                <span className="text-blue-400 font-medium text-sm">
                  {education.period}
                </span>
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

              {/* Empty column for alignment */}
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
