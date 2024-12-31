import UforiaLogo from "../assets/uforiainfotech_logo-removebg-preview.png"
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
import { useState, useRef } from "react"
export default function ProjectSection() {

    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div id="projectsSection" className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">
                <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] ">
                    <div className="py-10 ">
                        <p class=" text-3xl py-2 [#2c2ebf] relative">PROJECTS. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>

                    {/* Project detail information div */}

                    {isVisible && <div className="border-2 py-4 my-6 border-[#2c2ebf] w-[100%] bg-[#060614]">

                        <div className="flex justify-between items-center px-4">
                            <div className="flex items-center">
                                <img className="px-6" src={iPic} alt="I Icon" />
                                <p>Click on Project to view more details</p>
                            </div>
                            <div className="px-2">
                                <img onClick={handleDelete} className="px-1 cursor-pointer hover:brightness-50 " src={deletePic} alt="I Icon" />
                            </div>

                        </div>

                    </div>}

                    {/* Project detail information div */}

                    <div className=" py-8">
                        {/* project row 1 */}

                        <div className="flex py-6 w-[100%] justify-between ">


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={scrumBoard} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-4 ">

                                    <p className="text-lg font-bold">Scrum Board</p>

                                    <div className="flex flex-wrap gap-1 items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vue.Js</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1 bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Bootstrap</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vite</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">A visual tool that helps teams track tasks and monitor progress during project management. Built from scratch using Vue 3 and BootStrap.</p>

                                </div>

                            </div>


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={projectmanagement} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-4 ">

                                    <p className="text-lg font-bold">Project Mangement Tool</p>

                                    <div className="flex flex-wrap gap-1 items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>React</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Bootstrap</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vite</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">Cloned the Redmine Agile Board to track changes during development. Implemented drag & drop functionality to visualize changes.</p>


                                </div>

                            </div>

                        </div>
                        {/* project row 1 */}


                        {/* project row 2 */}

                        <div className="flex py-6 w-[100%] justify-between ">


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={weatherWalley} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-4 ">

                                    <p className="text-lg font-bold">Weather Walley</p>

                                    <div className="flex flex-wrap gap-1  items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vue.Js</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Tailwind</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1 bg-[#262626]">
                                            <p>Node</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">Weather Forecasting app that tracks weekly weather around the globe. Integrated the OpenWeather API with a Leaflet map to track location.</p>

                                </div>

                            </div>


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={foodxLogo} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-4 ">

                                    <p className="text-lg font-bold">Food X</p>

                                    <div className="flex flex-wrap gap-1  items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>React</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Tailwind</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vite</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">Online food ordering website that serves Oriental, Continental, and Chinese cuisine. Get your favorite food delivered to your doorstep. </p>


                                </div>

                            </div>

                        </div>

                        {/* project row 2 */}



                        {/* project row 3 */}

                        <div className="flex py-6 w-[100%] justify-between ">


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={portfolioLogo} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-4 ">

                                    <p className="text-lg font-bold">Talha Portfolio</p>

                                    <div className="flex flex-wrap gap-1 items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>React</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Particle.Js</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Tailwind</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vite</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">My personal portfolio website, built from scratch using React, showcases my skill set in an aesthetic and visually appealing way.</p>

                                </div>

                            </div>


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={fabricCanvas} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-4 ">

                                    <p className="text-lg font-bold">Fabric Kitchensink</p>

                                    <div className="flex flex-wrap gap-1  items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Fabric.Js</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>React</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Tailwind</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">Designed and created objects freely on a canvas. Integrated the Fabric.js library with React.js to build an interactive canvas application. </p>


                                </div>

                            </div>

                        </div>
                        {/* project row 3 */}


                        {/* project row 4 */}

                        <div className="flex py-6 w-[100%] justify-between ">


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={netflixLogo} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-8 ">

                                    <p className="text-lg font-bold">Netflix Clone</p>

                                    <div className="flex flex-wrap gap-1  items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1 bg-[#262626]">
                                            <p>HTML/CSS</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1 bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1 bg-[#262626]">
                                            <p>Tailwind</p>
                                        </div>

                                    </div>

                                    <p className="text-sm">Cloned a Netflix app landing page to replicate its design and functionality. Built the page from scratch using Tailwind CSS. </p>

                                </div>

                            </div>


                            <div className="w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={littleLemon} alt="" />
                                </div>

                                <div className="w-[65%] py-0 px-8 ">

                                    <p className="text-lg font-bold">Little Lemon</p>

                                    <div className="flex flex-wrap gap-1  items-center py-3 w-[100%]">
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>React</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>TailWind</p>
                                        </div>
                                        <div className="text-xs group-hover:bg-[#2c2ebf] transition-colors duration-300 rounded-sm px-2 py-1  bg-[#262626]">
                                            <p>Vite</p>
                                        </div>
                                    </div>

                                    <p className="text-sm">Make your evening memorable with Little Lemon Restaurant. Order your food or book your table for an aesthetic dine-in experience.</p>


                                </div>

                            </div>

                        </div>
                        {/* project row 4 */}



                    </div>




                </div>

        








            </div>
            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>

    )
}