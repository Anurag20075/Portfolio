import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0D1117]/90 backdrop-blur-md z-50 shadow-md border-b border-[#1A1F2B]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-[#00C6D7] hover:text-[#00B1C5] transition-colors"
          >
            Anurag
            <span className="text-[#E6EDF3]">Goyal</span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                className="text-[#9BAEC8] font-medium hover:text-[#00C6D7] transition-colors"
              >
                {text}
              </a>
            ))}
          </div>

          {/* TODO: Mobile nav goes here */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
