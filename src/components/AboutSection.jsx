import React from "react";

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-primary-500 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              I'm <strong>Anurag Goyal</strong>, a passionate full stack
              developer skilled in building modern, responsive, and scalable web
              applications. I enjoy crafting seamless user interfaces and robust
              backend systems using technologies like Java, Spring Boot, React,
              and Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              As a recent graduate, I’m constantly learning and improving my
              craft. I believe in clean code, practical problem-solving, and the
              power of consistent effort to achieve great digital experiences.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-primary-600 dark:text-primary-400">
                    school
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">BCA</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Dr MPS Institute of Business Management
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-primary-600 dark:text-primary-400">
                    business_center
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">Fresher</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Full Stack Development
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <a
                href="/Anurag_Goyal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="/Anurag_Goyal_ Resume.pdf"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center"
              >
                <span className="material-symbols-outlined mr-2">
                  description
                </span>
                Download Resume
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="pic.jpg"
                alt="Anurag Goyal - Full Stack Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
