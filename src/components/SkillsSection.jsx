import React from "react";

function SkillsSection() {
  const skills = [
    {
      name: "Java",
      icon: "fa-brands fa-java",
      color: "text-red-500",
      level: 85,
      barColor: "bg-red-500",
    },
    {
      name: "Spring Boot",
      icon: "fa-solid fa-leaf",
      color: "text-green-500",
      level: 40,
      barColor: "bg-green-500",
    },
    {
      name: "HTML/CSS",
      icon: "fa-brands fa-html5",
      subIcon: "fa-brands fa-css3-alt",
      color: "text-orange-500",
      level: 100,
      barColor: "bg-orange-500",
    },

    {
      name: "DSA & Algorithms",
      icon: "fa-solid fa-diagram-project", // Added meaningful icon
      color: "text-blue-500",
      level: 40,
      barColor: "bg-blue-500",
    },

    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      color: "text-yellow-500",
      level: 85,
      barColor: "bg-yellow-400",
    },
    {
      name: "React",
      icon: "fa-brands fa-react",
      color: "text-blue-500",
      level: 80,
      barColor: "bg-blue-400",
    },
    {
      name: "Tailwind CSS",
      icon: "material-symbols-outlined",
      symbol: "palette",
      color: "text-cyan-500",
      level: 85,
      barColor: "bg-cyan-400",
    },
    {
      name: "Git & GitHub",
      icon: "fa-brands fa-git-alt",
      subIcon: "fa-brands fa-github",
      color: "text-orange-600",
      subColor: "text-white dark:text-white",
      level: 100,
      barColor: "bg-gray-800",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skillset</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world, from backend development with Java and Spring Boot to modern
            frontend frameworks and version control.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center">
                {/* Handle Icons */}
                {skill.icon === "material-symbols-outlined" ? (
                  <span
                    className={`material-symbols-outlined text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {skill.symbol}
                  </span>
                ) : (
                  <div className="flex items-center gap-2 mb-4">
                    {skill.icon && (
                      <i
                        className={`${skill.icon} text-4xl ${skill.color} group-hover:scale-110 transition-transform`}
                      ></i>
                    )}
                    {skill.subIcon && (
                      <i
                        className={`${skill.subIcon} text-3xl ${
                          skill.subColor || ""
                        } group-hover:scale-110 transition-transform`}
                      ></i>
                    )}
                  </div>
                )}

                {/* Skill Name */}
                <h3 className="font-semibold text-lg mb-2 text-center">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${skill.barColor} group-hover:animate-pulse transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
