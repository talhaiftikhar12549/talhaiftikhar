import HitechImg from "../assets/HITEC_University_Logo.png"
import UforiaLogo from "../assets/uforiainfotech_logo-removebg-preview.png"
import UjalaLogo from "../assets/ujala-school-logo-removebg-preview.png"
export default function MyExperience() {

    return (
        <>
            <div className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">
                <div className="w-[70%] ">
                    <div className="py-10 ">
                        <p class=" text-3xl py-2 [#2c2ebf] relative">EXPERIENCE. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
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

                    {/* Uforia Experience */}

                    <div className="bg-[#0e0e1a] h-[5px]"></div>

                    {/* Ujala Experience */}
                    <div className=" py-12 flex bg-[#060614]">


                        <div className="flex w-[100%]">

                            <div className="w-[20%] flex items-center justify-center"><img className="h-[100px] w-[150px]" src={UjalaLogo} /></div>

                            <div className="w-[70%]  ">

                                <div className="py-2">
                                    <p className="text-lg font-bold">IT Admin & Junior Accountant ( volunteer )</p>
                                    <p className="text-sm "><span className="cursor-pointer text-[#2c4ebf] hover:text-[#2c2ebf]"><a href="https://www.ujalaschool.org/" target="_blank" rel="noopener noreferrer"> Ujala Elementary School</a></span>  | On-site | Sep 2021 – Present</p>
                                    <ul className="list-disc pl-8 pt-2">
                                        <li>Administered and maintained a charity school’s IT infrastructure encompassing Computers,
                                            networks and software systems.</li>
                                        <li> Acquired practical experience in assembling and configuring personal computer systems.
                                            Experienced over multiple builds.</li>
                                        <li>Managed monthly expense sheets and processed staff salaries, ensuring accurate tracking of expenditures and timely payroll disbursements.</li>
                                    </ul>
                                </div>


                            </div>

                            <div className="w-[10%] ">
                                <button className="bg-[#2c2ebf] py-1 px-2 text-sm">Part Time</button>
                            </div>

                        </div>


                    </div>
                    {/* Ujala Experience */}

                    <div className="bg-[#0e0e1a] h-[5px]"></div>

                    {/* HITEC University Experience */}
                    <div className=" py-12 flex bg-[#060614]">


                        <div className="flex w-[100%]">
                            <div className="w-[20%] flex items-center justify-center"><img className="h-[150px] w-[150px]" src={HitechImg} alt="" /></div>
                            <div className="w-[70%]  ">
                                <p className="text-lg font-bold">Teaching Assistant</p>
                                <p className="text-sm "><span className="cursor-pointer text-[#2c4ebf] hover:text-[#2c2ebf]"><a href="https://www.hitecuni.edu.pk/" target="_blank" rel="noopener noreferrer"> HITECH University</a></span>  | On-site | Feb 2023 - Jul 2023</p>
                                <ul className="list-disc pl-8 pt-2">
                                    <li>Mentored 50+ students in foundation year in C++ and JavaScript.</li>
                                    <li>Instructed Students in foundational web development skills, covering HTML, CSS, and JavaScript
                                        fundamentals. </li>
                                    <li>Graded assignments, quizzes, and exams, ensuring consistency and fairness in evaluation.</li>
                                </ul>
                            </div>
                            <div className="w-[10%] ">
                                <button className="bg-[#2c2ebf] py-1 px-2 text-sm">Part Time</button>
                            </div>

                        </div>


                    </div>

                    {/* HITEC University Experience */}





                </div>


            </div>
            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>
    )
}