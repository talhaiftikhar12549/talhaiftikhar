import weatherWalley from "../assets/weather walley logo.png"
import projectmanagement from "../assets/scrum-board (1).png"
import scrumBoard from "../assets/scrumboard.png"
import netflixLogo from "../assets/Netflix Logo.png"
import portfolioLogo from "../assets/Talha Portfolio Logo.png"
import foodxLogo from "../assets/Foodx Logo.png"
import littleLemon from "../assets/Little Lemon.png"
import fabricCanvas from "../assets/FabricjsCanvas.png"
import { useState } from "react"


export const ProjectRowsJSX = () => {
  const projects = [
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
      title: "Netflix Clone",
      description: "Cloned a Netflix app landing page to replicate its design and functionality. Built the page from scratch using Tailwind CSS. ",
      technologies: ["HTML/CSS", "JavaScript", "Tailwind"],
      image: netflixLogo,
    },
    {
      title: "Little Lemon",
      description: "Make your evening memorable with Little Lemon Restaurant. Order your food or book your table for an aesthetic dine-in experience.",
      technologies: ["React", "JavaScript", "Tailwind", "Vite"],
      image: littleLemon,
    },
    
  ];
  const [modalOpener, setModalOpener] = useState(false);

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalOpener(false);
        }
    };

    const openModal = () => {
        setModalOpener(true);
        console.log(modalOpener)
    };

    const handleDelete = () => {
        setIsVisible(false);
    };
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


{modalOpener && (
                <div
                    onClick={handleModalClick}
                    className="modal bg-[#000000] bg-opacity-30 backdrop-blur-sm inset-0 fixed z-50 text-[#ffffff]"
                >



                    <div
                        className="modal-content bg-[#060614] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mx-auto my-10 p-6 rounded-lg max-h-[85vh] overflow-y-auto scrollbar-thumb-[#2c2ebf] scrollbar scrollbar-thumb-rounded "
                    >


                        <div className="w-[100%] flex justify-end items-center">
                            <span
                                onClick={() => setModalOpener(false)}
                                className="close cursor-pointer text-4xl hover:brightness-50"
                            >
                                &times;
                            </span>
                        </div>


                        <div>
                            <p className=" text-3xl py-2 [#2c2ebf] relative">Scrum board<span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                        </div>


                        <div className="flex justify-center md:justify-start flex-wrap gap-1  items-center py-3 w-[100%]">
                            <div className="text-xs hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                <p>React</p>
                            </div>
                            <div className="text-xs hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                <p>JavaScript</p>
                            </div>
                            <div className="text-xs hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                <p>TailWind</p>
                            </div>
                            <div className="text-xs hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                <p>Vite</p>
                            </div>
                        </div>


                        <div className="flex  justify-around py-2">
                            <button className="bg-[#2c2ebf] py-1 px-2 text-xs lg:text-sm hover:bg-[#ffffff] hover:text-[#2c2ebf] transition-colors duration-300">View it Live</button>
                            <button className="bg-[#2c2ebf] py-1 px-2 text-xs lg:text-sm hover:bg-[#ffffff] hover:text-[#2c2ebf] transition-colors duration-300">Github Pages</button>
                        </div>

                        <div className="w-[100%]  py-12 px-4 flex justify-center ">
                            <img className="h-[150px] w-[150px]" src={projectmanagement} alt="" />
                        </div>
                        <div className=" py-4">

                            <p className=" text-3xl py-2 [#2c2ebf] relative">ABOUT<span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>

                            <p className="text-sm py-6 text-center md:text-left">A visual tool that helps teams track tasks and monitor progress during project management. Built from scratch using Vue 3 and BootStrap.</p>

                        </div>

                    </div>




                </div>
            )} 


    </div>

    

  ));
};




           


            