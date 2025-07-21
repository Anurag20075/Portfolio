import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-primary-600 dark:text-primary-400">
                    location_on
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Agra , Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-primary-600 dark:text-primary-400">
                    mail
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    goyalanurag2005@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-4">
                  <span className="material-symbols-outlined text-primary-600 dark:text-primary-400">
                    phone
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    (+91) 6398802517
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-6">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center transform hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin text-blue-600 text-xl"></i>
              </a>
              <a
                href="https://github.com/Anurag20075"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center transform hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <i className="fa-brands fa-github text-gray-800 dark:text-white text-xl"></i>
              </a>
              <a
                href="https://leetcode.com/u/anuragthecoder/"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center transform hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/anurag.goyal.3158652/"
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center transform hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <i className="fa-brands fa-dribbble text-pink-500 text-xl"></i>
              </a>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form
              action="https://formsubmit.co/your-email@example.com"
              method="POST"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-xl transform hover:-translate-y-1 duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined mr-2">send</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
