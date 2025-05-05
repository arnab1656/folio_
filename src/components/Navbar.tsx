"use client";
import { useState } from "react";
import { menuItems } from "@/data/menuData";
import Link from "next/link";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace("#", ""));
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const duration = 300;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + elementPosition * easeInOutCubic);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => smoothScrollTo("intro")}
            >
              Arnab
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
              }}
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block px-3 py-2 mt-2 text-center bg-blue-600 text-white rounded-sm hover:bg-blue-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
                setIsOpen(false);
              }}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
