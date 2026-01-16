import React from "react";

const projectData = [
  {
    title: "Weather App",
    description: "A simple weather application using a public weather API.",
    tech: ["React", "Tailwind", "Vite", "Restful API"],
    github: "#",
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Movie App",
    description:
      "A movie browsing application powered by The Movie Database API.",
    tech: ["React", "Tailwind", "Vite", "Restful API"],
    github: "#",
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Portfolio",
    description: "Website introduce about myself",
    tech: ["React", "Tailwind", "Vite"],
    github: "#",
    link: "#",
    image: "https://via.placeholder.com/300x200",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-primary-bg py-10 px-8">
      <div className="max-w-6xl space-x-6">
        <h1 className="text-4xl font-bold text-primary-txt mb-4 border-l-4 border-primary-accent pl-4">
          Projects
        </h1>
        <h2 className="text-2xl font-medium text-secondary-txt mb-10 ">
          Something I've built
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectData.map((project, indx) => (
          <div
            key={indx}
            className="bg-primary-accent/20 border border-light-divider rounded-2xl p-6 hover:border-primary-accent/50 transition-all group"
          >
            <div className="overflow-hidden rounded-xl mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-bold text-primary-txt mb-3 group-hover:text-primary-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-secondary-txt mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 bg-primary-accent/10 text-primary-border rounded-full border border-primary-border/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-6 items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-primary-txt hover:text-primary-border flex items-center gap-2 transition-colors"
              >
                <span>GitHub</span>
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-border text-primary-txt px-4 py-2 rounded-lg text-sm hover:bg-soft-accent transition-colors"
              >
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
