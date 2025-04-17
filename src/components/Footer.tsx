"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:your.email@example.com",
    icon: FaEnvelope,
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Arnab Paul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
