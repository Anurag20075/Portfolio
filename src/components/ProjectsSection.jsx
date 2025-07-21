import React from "react";

function ProjectsSection() {
  const projects = [
    {
      title: "Course App",
      desc: "A full-stack course management system with lesson view, comments, and authentication.",
      tech: ["React", "Spring Boot", "Java", "Tailwind CSS"],
      image:
        "https://i.pinimg.com/736x/ec/59/4d/ec594d5b9cd8e8cbc939a8744370d661.jpg",
      keywords: "course, learning, fullstack, education",
      url: "https://github.com/Anurag20075/Course-App",
    },
    {
      title: "Blog Project",
      desc: "A full-stack blog platform with admin dashboard and CRUD blog functionality.",
      tech: ["React", "Spring Boot", "Java", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&auto=format&fit=crop&w=2070",
      keywords: "blog, writing, fullstack, content",
      url: "https://github.com/Anurag20075/Blog_Project",
    },
    {
      title: "Amazon Clone",
      desc: "A frontend clone of Amazon with navigation, cart, and UI features.",
      tech: ["HTML", "CSS", "JavaScript"],
      image:
        "https://i.pinimg.com/736x/cf/b1/95/cfb1954d25e306504dce5f587f635233.jpg",
      keywords: "ecommerce, clone, frontend",
      url: "https://github.com/Anurag20075/Amazon-Clone",
    },
    {
      title: "Weather Web App",
      desc: "A web app to display real-time weather using OpenWeather API.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      image:
        "https://i.pinimg.com/1200x/4c/72/09/4c72099507913a8120bb12de64044a2d.jpg",
      keywords: "weather, api, javascript",
      url: "https://github.com/Anurag20075/Weather-Web",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills in
            full-stack development and frontend UI design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-70 transition-opacity duration-500 flex items-center justify-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-primary-600 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Anurag20075"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600/10 rounded-full font-medium transition-all transform hover:-translate-y-1"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
