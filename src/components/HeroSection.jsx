import React, { useEffect, useState } from "react";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <header className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-[#0D1117]">
      {/* Faint background accent */}
      <div className="absolute inset-0 bg-[#00C6D7] opacity-5"></div>

      {/* Main content */}
      <div className="z-10 text-center max-w-3xl mx-auto transition-transform duration-700 transform hover:scale-105">
        <p
          className={`text-[#00C6D7] font-semibold tracking-wider mb-3 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          HELLO, I'M
        </p>

        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6D7] to-[#3B82F6]">
            Anurag Goyal
          </span>
        </h1>

        <h2
          className={`text-2xl md:text-3xl font-medium mb-8 text-[#E6EDF3] transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Full Stack Developer | Java & React Enthusiast
        </h2>

        <p
          className={`text-lg md:text-xl text-[#9BAEC8] mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          I'm a fresher passionate about crafting end-to-end web solutions using
          Java, Spring Boot, React, and Tailwind CSS. I thrive on building fast,
          responsive, and user-focused interfaces with clean backend logic.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-opacity duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://github.com/Anurag20075"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#00C6D7] hover:bg-[#009DB3] text-[#0D1117] rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <button className="px-8 py-3 border-2 border-[#00C6D7] text-[#00C6D7] hover:bg-[#00C6D7]/10 rounded-full font-medium transition-all transform hover:-translate-y-1">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-4xl text-[#00C6D7]">
          keyboard_arrow_down
        </span>
      </div>
    </header>
  );
}

export default HeroSection;
