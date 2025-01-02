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
import ProjectModal from "../components/ProjectModal"
import { useState, useRef } from "react"
export default function ProjectSection() {

    const [isVisible, setIsVisible] = useState(true);
    const [modalOpener, setModalOpener] = useState(false);

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setModalOpener(false);
        }
    };

    const openModal = () => {
        setModalOpener(true);
    };

    const handleDelete = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div id="projectsSection" className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">
                {/* {modalOpener && <ProjectModal  onClose={()=>setModalOpener(false)} />} */}

                <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] ">
                    <div className="py-10 ">
                        <p className=" text-3xl py-2 [#2c2ebf] relative">PROJECTS. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>

                    {/* Project detail information div */}

                    {isVisible && <div className="border-2 py-4 my-6 border-[#2c2ebf] w-[100%] bg-[#060614]">

                        <div className="flex justify-between items-center px-0 md:px-4">
                            <div className="flex items-center">
                                <img className="px-2 md:px-6" src={iPic} alt="I Icon" />
                                <p className="text-xs md:text-md lg:text-lg">Click on Project to view more details</p>
                            </div>
                            <div className="px-2">
                                <img onClick={handleDelete} className="px-1 cursor-pointer hover:brightness-50 " src={deletePic} alt="I Icon" />
                            </div>

                        </div>

                    </div>}

                    {/* Project detail information div */}

                    <div className=" py-8">
                        {/* project row 1 */}

                        <div className="flex flex-col gap-12 md:gap-0  md:flex-row py-6 w-[100%] justify-between ">


                            <div onClick={openModal} className="w-[100%] md:w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={scrumBoard} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Scrum Board</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1 items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">A visual tool that helps teams track tasks and monitor progress during project management. Built from scratch using Vue 3 and BootStrap.</p>

                                </div>

                            </div>


                            <div onClick={openModal} className="w-[100%] md:w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={projectmanagement} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Project Mangement Tool</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1 items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">Cloned the Redmine Agile Board to track changes during development. Implemented drag & drop functionality to visualize changes.</p>


                                </div>

                            </div>

                        </div>
                        {/* project row 1 */}


                        {/* project row 2 */}

                        <div className="flex flex-col gap-12 md:gap-0 md:flex-row py-6 w-[100%] justify-between ">


                            <div onClick={openModal} className="w-[100%] md:w-[48%]  py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={weatherWalley} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Weather Walley</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1  items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">Weather Forecasting app that tracks weekly weather around the globe. Integrated the OpenWeather API with a Leaflet map to track location.</p>

                                </div>

                            </div>


                            <div onClick={openModal} className="w-[100%] md:w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={foodxLogo} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Food X</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1  items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">Online food ordering website that serves Oriental, Continental, and Chinese cuisine. Get your favorite food delivered to your doorstep. </p>


                                </div>

                            </div>

                        </div>

                        {/* project row 2 */}



                        {/* project row 3 */}

                        <div className="flex flex-col gap-12 md:gap-0 md:flex-row py-6 w-[100%] justify-between ">


                            <div onClick={openModal} className="w-[100%] md:w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={portfolioLogo} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg  text-center md:text-left font-bold">Talha Portfolio</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1 items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">My personal portfolio website, built from scratch using React, showcases my skill set in an aesthetic and visually appealing way.</p>

                                </div>

                            </div>


                            <div onClick={openModal} className="w-[100%] md:w-[48%] py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={fabricCanvas} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Fabric Kitchensink</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1  items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">Designed and created objects freely on a canvas. Integrated the Fabric.js library with React.js to build an interactive canvas application. </p>


                                </div>

                            </div>

                        </div>
                        {/* project row 3 */}


                        {/* project row 4 */}

                        <div className="flex flex-col gap-12 md:gap-0 md:flex-row py-6 w-[100%] justify-between ">


                            <div onClick={openModal} className="w-[100%] md:w-[48%]  py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={netflixLogo} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Netflix Clone</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1  items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">Cloned a Netflix app landing page to replicate its design and functionality. Built the page from scratch using Tailwind CSS. </p>

                                </div>

                            </div>


                            <div onClick={openModal} className="w-[100%] md:w-[48%]  py-12 px-3 bg-[#060614] border-2 border-[#060614] group flex flex-col md:flex-row hover:border-[#2c2ebf] transition-colors duration-300 cursor-pointer" title="Click to view more detail.">

                                <div className="w-[100%] md:w-[35%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={littleLemon} alt="" />
                                </div>

                                <div className="w-[100%] md:w-[65%] py-0 px-4 ">

                                    <p className="text-lg text-center md:text-left font-bold">Little Lemon</p>

                                    <div className="flex justify-center md:justify-start flex-wrap gap-1  items-center py-3 w-[100%]">
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

                                    <p className="text-sm text-center md:text-left">Make your evening memorable with Little Lemon Restaurant. Order your food or book your table for an aesthetic dine-in experience.</p>


                                </div>

                            </div>

                        </div>
                        {/* project row 4 */}



                    </div>




                </div>










            </div>

            {modalOpener && (
                <div
                    onClick={handleModalClick}
                    className="modal bg-[#000000] bg-opacity-30 backdrop-blur-sm inset-0 fixed z-50 text-[#ffffff]"
                >


                    <div
                        className="modal-content bg-[#060614] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mx-auto my-10 p-6 rounded-lg"
                    >
                        <span
                            onClick={() => setModalOpener(false)}
                            className="close cursor-pointer"
                        >
                            &times;
                        </span>
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                        <button onClick={()=>{console.log("button clicked in modal")}}>click me </button>
                    </div>



                </div>
            )}
            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>

    )
}