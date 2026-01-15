import React from "react";

const projectData = [
  {
    title: "Weather App",
    description: "",
    tech: ["React", "Tailwind", "Vite", "Restful API"],
    github: "#",
    link: "",
    image: "",
  },
  {
    title: "",
    description: "",
    tech: [],
    github: "#",
    link: "",
    image: "",
  },
  {
    title: "",
    description: "",
    tech: [],
    github: "#",
    link: "",
    image: "",
  },
];

const Projects = () => {
  return (
    <div>
      {projectData.map((pj, indx) => (
        <div key={indx}>
          <h3>{pj.title}</h3>
          <p>{pj.description}</p>

          <div className=""></div>
          <div className=""></div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
