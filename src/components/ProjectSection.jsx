import UforiaLogo from "../assets/uforiainfotech_logo-removebg-preview.png"
import iPic from "../assets/i.png"
import deletePic from "../assets/delete.png"
export default function ProjectSection() {

    return (
        <>
            <div className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">
                <div className="w-[70%] ">
                    <div className="py-10 ">
                        <p class=" text-3xl py-2 [#2c2ebf] relative">PROJECTS. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>

                    <div className="border-2 py-4 my-6 border-[#2c2ebf] w-[100%] bg-[#060614]">

                        <div className="flex justify-between items-center px-4">
                           <div className="flex items-center">
                            <img className="px-4" src={iPic} alt="I Icon" />
                           <p>Click on Project to view more details</p>
                           </div>
                           <div className="px-2">
                           <img className="px-1 cursor-pointer hover:brightness-50 " src={deletePic} alt="I Icon" />
                           </div>
                           
                        </div>

                    </div>

                    {/* Uforia Experience */}
                    <div className=" py-12 flex bg-[#060614]">


                        <div className="flex w-[100%]">
                            <div className="w-[20%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={UforiaLogo} alt="" /></div>
                            <div className="w-[70%]  ">
                                <p className="text-lg font-bold">Web Developer</p>
                                <p className="text-sm "><span className="cursor-pointer text-[#2c4ebf] hover:text-[#2c2ebf]"><a href="https://uforiainfotech.com/" target="_blank" rel="noopener noreferrer"> Uforia Infotech Solutions</a></span>  | On-site | May 2024 - Aug 2024</p>
                                <ul className="list-disc pl-8 pt-2">
                                    <li> Built responsive web applications with React.js and Vue.js, delivering quality software in a fast-paced environment.</li>
                                    <li> Utilized Fabric.js to create interactive canvas features for custom graphics and drawing tools
                                        in applications.</li>
                                    <li>I learned backend development, including PHP and Laravel, which helped me to jump on the other side of the stack.</li>
                                </ul>
                            </div>
                            <div className="w-[10%] ">
                                <button className="bg-[#2c2ebf] py-1 px-2 text-sm">Full Time</button>
                            </div>

                        </div>


                    </div>




                </div>

                {/* HITEC University Experience */}








            </div>
            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>

    )
}