import weatherWalley from "../assets/weather walley logo.png"
import projectmanagement from "../assets/scrum-board (1).png"
import scrumBoard from "../assets/scrumboard.png"
import netflixLogo from "../assets/Netflix Logo.png"
import portfolioLogo from "../assets/Talha Portfolio Logo.png"
import foodxLogo from "../assets/Foodx Logo.png"
import littleLemon from "../assets/Little Lemon.png"
import fabricCanvas from "../assets/FabricjsCanvas.png"




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


  export default projects;