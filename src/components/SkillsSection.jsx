import React from "react";
// import "font-awesome/css/font-awesome.min.css"; // Ensure you have Font Awesome included
function SkillsSection() {
  const skills = [
    {
      name: "Java",
      icon: "fa-brands fa-java",
      color: "text-red-500",
    },
    {
      name: "Spring Boot",
      icon: "fa-solid fa-leaf",
      color: "text-green-500",
    },
    {
      name: "HTML",
      icon: "fa-brands fa-html5",
      color: "text-orange-500",
      subColor: "text-blue-400",
    },
    {
      name: "CSS",
      subIcon: "fa-brands fa-css3-alt",
      color: "text-orange-500",
      subColor: "text-blue-400",
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      color: "text-yellow-500",
    },
    {
      name: "React",
      icon: "fa-brands fa-react",
      color: "text-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: "material-symbols-outlined",
      symbol: "palette",
      color: "text-cyan-500",
    },
    {
      name: "Git & GitHub",
      icon: "fa-brands fa-git-alt",
      subIcon: "fa-brands fa-github",
      color: "text-orange-600",
      subColor: "text-white dark:text-white",
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
                {/* Handle icons */}
                {skill.icon === "material-symbols-outlined" ? (
                  <span
                    className={`material-symbols-outlined text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {skill.symbol}
                  </span>
                ) : (
                  <div className="flex items-center gap-2 mb-4">
                    <i
                      className={`${skill.icon} text-4xl ${skill.color} group-hover:scale-110 transition-transform`}
                    ></i>
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
                    className={`h-full bg-gradient-to-r from-primary-400 to-${
                      skill.color.split("-")[1]
                    } group-hover:animate-pulse`}
                    style={{ width: `${75 + Math.random() * 25}%` }}
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
