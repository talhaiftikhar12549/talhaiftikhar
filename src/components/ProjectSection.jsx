import UforiaLogo from "../assets/uforiainfotech_logo-removebg-preview.png"
import iPic from "../assets/i.png"
import deletePic from "../assets/delete.png"
import weatherWalley from "../assets/weather walley logo.png"
import projectmanagement from "../assets/scrum-board (1).png"
import scrumBoard from "../assets/scrumboard.png"
import netflixLogo from "../assets/Netflix Logo.png"
import portfolioLogo from "../assets/Talha Portfolio Logo.png"
import foodxLogo from "../assets/Foodx Logo.png"
import { useState } from "react"
export default function ProjectSection() {

    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">
                <div className="w-[70%] ">
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


                    {/* Uforia Experience */}
                    <div className=" py-8">
                        {/* project row 1 */}

                        <div className="flex py-6 w-[100%] justify-between ">


                            <div className="w-[48%] bg-[#060614] border-2 border-[#060614] flex hover:border-[#2c2ebf] cursor-pointer">
                                <div className="w-[30%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={scrumBoard} alt="" /></div>
                                <div className="w-[70%]  ">
                                    <p className="text-lg font-bold">Web Developer</p>

                                </div>
                            </div>


                            <div className="w-[48%] bg-[#060614] border-2 border-[#060614] flex hover:border-[#2c2ebf] cursor-pointer">
                                <div className="w-[30%] flex items-center justify-center">
                                    <img className="h-[150px] w-[150px]" src={projectmanagement} alt="" />
                                </div>
                                <div className="w-[70%]  ">
                                    <p className="text-lg font-bold">Web Developer</p>

                                </div>
                            </div>

                        </div>
                        {/* project row 1 */}


                        {/* project row 2 */}

                        <div className="flex w-[100%] py-4 justify-between ">


                            <div className="w-[48%] bg-[#060614] border-2 border-[#060614] flex hover:border-[#2c2ebf] cursor-pointer">
                                <div className="w-[30%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={weatherWalley} alt="" /></div>
                                <div className="w-[70%]  ">
                                    <p className="text-lg font-bold">Web Developer</p>

                                </div>
                            </div>


                            <div className="w-[48%] bg-[#060614] border-2 border-[#060614] flex hover:border-[#2c2ebf] cursor-pointer">
                                <div className="w-[30%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={foodxLogo} alt="" /></div>
                                <div className="w-[70%]  ">
                                    <p className="text-lg font-bold">Web Developer</p>

                                </div>
                            </div>

                        </div>
                        {/* project row 2 */}



                        {/* project row 3 */}

                        <div className="flex w-[100%] py-4 justify-between ">


                            <div className="w-[48%] bg-[#060614] border-2 border-[#060614] flex hover:border-[#2c2ebf] cursor-pointer">
                                <div className="w-[30%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={portfolioLogo} alt="" /></div>
                                <div className="w-[70%]  ">
                                    <p className="text-lg font-bold">Web Developer</p>

                                </div>
                            </div>


                            <div className="w-[48%] bg-[#060614] border-2 border-[#060614] flex hover:border-[#2c2ebf] cursor-pointer">
                                <div className="w-[30%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={netflixLogo} alt="" /></div>
                                <div className="w-[70%]  ">
                                    <p className="text-lg font-bold">Web Developer</p>

                                </div>
                            </div>

                        </div>
                        {/* project row 3 */}
                    </div>




                </div>

                {/* HITEC University Experience */}








            </div>
            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>

    )
}