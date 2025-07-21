import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Anurag Goyal</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Building digital experiences that make a difference. Let's create
              something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
              >
                <i className="fa-brands fa-linkedin text-white"></i>
              </a>
              <a
                href="https://github.com/Anurag20075"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
              >
                <i className="fa-brands fa-github text-white"></i>
              </a>
              <a
                href="https://leetcode.com/u/anuragthecoder/"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/anurag.goyal.3158652/"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
              >
                <i className="fa-brands fa-dribbble text-white"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center"
                >
                  <span className="material-symbols-outlined mr-2 text-sm">
                    arrow_right
                  </span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center"
                >
                  <span className="material-symbols-outlined mr-2 text-sm">
                    arrow_right
                  </span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center"
                >
                  <span className="material-symbols-outlined mr-2 text-sm">
                    arrow_right
                  </span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center"
                >
                  <span className="material-symbols-outlined mr-2 text-sm">
                    arrow_right
                  </span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center"
                >
                  <span className="material-symbols-outlined mr-2 text-sm">
                    arrow_right
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 flex-grow"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Anurag Goyal. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <a
              href="#"
              className="hover:text-primary-400 transition-colors mr-6"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
