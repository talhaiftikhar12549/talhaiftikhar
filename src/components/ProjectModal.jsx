import iPic from "../assets/i.png"
import deletePic from "../assets/delete.png"
import weatherWalley from "../assets/weather walley logo.png"
import projectmanagement from "../assets/scrum-board (1).png"
import scrumBoard from "../assets/scrumboard.png"
import netflixLogo from "../assets/Netflix Logo.png"
import portfolioLogo from "../assets/Talha Portfolio Logo.png"
import foodxLogo from "../assets/Foodx Logo.png"
import littleLemon from "../assets/Little Lemon.png"
import fabricCanvas from "../assets/FabricjsCanvas.png"

export const projects = [
  {
    title: "Scrum Board",
    description: "A visual tool that helps teams track tasks and monitor progress during project management. Built from scratch using Vue 3 and BootStrap.",
    technologies: ["Vue.Js", "JavaScript", "Bootstrap", "Vite"],
    image: scrumBoard,
  },
  {
    title: "Project Management Tool",
    description: "Cloned the Redmine Agile Board to track changes during development. Implemented drag & drop functionality to visualize changes.",
    technologies: ["React", "JavaScript", "Bootstrap", "Vite"],
    image: projectmanagement,
  },
  {
    title: "Weather Walley",
    description: "Weather Forecasting app that tracks weekly weather around the globe. Integrated the OpenWeather API with a Leaflet map to track location.",
    technologies: ["Vue.Js", "JavaScript", "Tailwind", "Node"],
    image: weatherWalley,
  },
  {
    title: "Food X",
    description: "Online food ordering website that serves Oriental, Continental, and Chinese cuisine. Get your favorite food delivered to your doorstep. ",
    technologies: ["React", "JavaScript", "Tailwind", "Vite"],
    image: foodxLogo,
  },
  {
    title: "Talha Portfolio",
    description: "My personal portfolio website, built from scratch using React, showcases my skill set in an aesthetic and visually appealing way.",
    technologies: ["React", "Particle.Js", "Tailwind", "Vite"],
    image: portfolioLogo,
  },
  {
    title: "Fabric Kitchensink",
    description: "Designed and created objects freely on a canvas. Integrated the Fabric.js library with React.js to build an interactive canvas application. ",
    technologies: ["Fabric.Js", "JavaScript","React", "Tailwind", "Vite"],
    image: fabricCanvas,
  },
  {
    title: "Little Lemon",
    description: "Cloned a Netflix app landing page to replicate its design and functionality. Built the page from scratch using Tailwind CSS. ",
    technologies: ["HTML/CSS", "JavaScript", "Tailwind"],
    image: netflixLogo,
  },
  {
    title: "Food X",
    description: "Make your evening memorable with Little Lemon Restaurant. Order your food or book your table for an aesthetic dine-in experience.",
    technologies: ["React", "JavaScript", "Tailwind", "Vite"],
    image: littleLemon,
  },
  // Add more projects as needed
];

export const projectRowsJSX = (openModal) => {
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return rows.map((row, rowIndex) => (
    <div key={rowIndex} className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
      {row.map((project, index) => (
        <div
          key={index}
          onClick={openModal}
          className="w-[100%] md:w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer"
          title="Click to view more detail."
        >
          <div className="w-[100%] md:w-[35%] flex items-center justify-center">
            <img className="h-[150px] w-[150px]" src={project.image} alt={project.title} />
          </div>
          <div className="w-[100%] md:w-[65%] py-0 px-4">
            <p className="text-lg text-center md:text-left font-bold">{project.title}</p>
            <div className="flex justify-center md:justify-start flex-wrap gap-1 items-center py-3 w-[100%]">
              {project.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1 bg-[#262626]"
                >
                  <p>{tech}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center md:text-left">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  ));
};