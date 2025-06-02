"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your email sending logic here
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="h-screen bg-[#121212] flex items-center justify-center"
    >
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#1F1F1F] rounded-sm border border-[#383838] p-6 shadow-xl"
        >
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-blue-400 pb-8">Contact Me</h2>
            <div className="flex items-center justify-center gap-2 mt-3 mx-auto p-2  text-white bg-[#161313] rounded-sm w-fit">
              <FaEnvelope className="text-blue-400" />
              <a
                // href="mailto:arnab.paul.1656@gmail.com"
                className="text-sm"
              >
                arnab.paul.1656@gmail.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2A2A2A] border border-white text-white text-sm 
                  focus:outline-none focus:border-blue-500 focus:ring-[0.5px] focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-[#2A2A2A] border border-white text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-[0.5px]  focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#2A2A2A] border border-white text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-[0.5px] focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-[#2A2A2A] border border-white text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-[0.5px] focus:ring-blue-500"
                placeholder="Message"
              />
            </div>

            {submitStatus && (
              <div
                className={`text-sm text-center ${
                  submitStatus === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {submitStatus === "success"
                  ? "Message sent successfully!"
                  : "Failed to send message. Please try again."}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-sm hover:text-black hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
