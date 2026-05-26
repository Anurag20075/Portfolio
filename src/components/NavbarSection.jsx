import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-teal-100 py-3 shadow-sm"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* Logo - Teal/Cyan Theme */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="text-2xl font-extrabold tracking-tight text-slate-900"
          >
            <span className="text-teal-600">Anurag</span>
            <span className="text-slate-500">Goyal</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                className="relative group text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors"
              >
                {text}
                {/* Animated Underline - Teal */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <button className="px-6 py-2 rounded-full bg-teal-600 text-white font-bold text-sm hover:bg-teal-500 hover:shadow-[0_4px_14px_0_rgba(20,184,166,0.39)] transition-all">
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-teal-600 focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-teal-50 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-700 hover:text-teal-600 transition-colors"
                >
                  {text}
                </a>
              ))}
              <button className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold">
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;