import React, { useState } from 'react';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("aaaa")
    };

    const hanldeClickHome = () => {
        const Home = document.getElementById('Home');
        Home.scrollIntoView({ behavior: 'smooth' });
    }

    const hanldeClickAboutMe = () => {
        const aboutMe = document.getElementById('aboutMe');
        aboutMe.scrollIntoView({ behavior: 'smooth' });
    }

    const hanldeClickExperience = () => {

        const experience = document.getElementById('experience');
        experience.scrollIntoView({ behavior: 'smooth' });
    }

    const hanldeClickProjects = () => {
        const projectsSection = document.getElementById('projectsSection');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }

    const hanldeClickEducation = () =>{
        const Education = document.getElementById('Education&Skills');
        Education.scrollIntoView({ behavior: 'smooth' });
    }

    const hanldeClickContactMe = () =>{
        const contactUs = document.getElementById('contactUs');
        contactUs.scrollIntoView({ behavior: 'smooth' });

    }

    const options = [
        { value: hanldeClickHome, label: "HOME" },
        { value: hanldeClickAboutMe, label: "ABOUT ME" },
        { value: hanldeClickExperience, label: "EXPERIENCE" },
        { value: hanldeClickProjects, label: "PROJECTS" },
        { value: hanldeClickEducation, label: "EDUCATION" },
        { value: hanldeClickContactMe, label: "CONTACT" },

    ];
    return (
        <>
            <div className='h-[10vh] md:h-[15vh]  bg-[#060614] w-[100%] px-5 xl:px-20 text-[#d9d7d7] '>
                <div className='md:flex hidden md:flex-row  relative z-10 h-[100%] w-[100%]  justify-between lg:justify-around items-center '>
                    <p onClick={hanldeClickHome} className=" font-bold cursor-pointer hover:text-[#ffffff]">HOME</p>
                    <p onClick={hanldeClickAboutMe} className=" font-bold cursor-pointer hover:text-[#ffffff]">ABOUT ME</p>
                    <p onClick={hanldeClickExperience} className=" font-bold cursor-pointer hover:text-[#ffffff]">EXPERIENCE</p>
                    <p onClick={hanldeClickProjects} className=" font-bold cursor-pointer hover:text-[#ffffff]">PROJECTS</p>
                    <p onClick={hanldeClickEducation} className=" font-bold cursor-pointer hover:text-[#ffffff]">EDUCATION</p>
                    <p onClick={hanldeClickContactMe} className=" font-bold cursor-pointer hover:text-[#ffffff]">CONTACT</p>

                </div>
                <div className='md:hidden flex relative h-[100%] z-10 w-[100%] justify-between lg:justify-around items-center'>
                    <p className='text-lg font-bold'> &lt; Dev Talha / &gt; </p>


                    {/* <img onClick={toggleMenu} className='cursor-pointer' src={hamBurgerMenu} alt="" /> */}
                    <div onClick={toggleMenu} className='bg-[#2c2ebf] h-[40px] w-[40px] flex flex-col justify-center items-center cursor-pointer rounded'>
                        <div className='px-3 my-0.5 py-[1px]  bg-[#ffffff]'></div>
                        <div className='px-3 my-0.5 py-[1px]  bg-[#ffffff]'></div>
                        <div className='px-3 my-0.5 py-[1px]  bg-[#ffffff]'></div>
                    </div>

                    {isOpen && (
                        <ul className="absolute right-0 top-16 bg-[#060614] border border-[#2c2ebf] rounded-md shadow-lg mt-2 w-48 z-10">
                            {options.map((option,index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        option.value(); 
                                        setIsOpen(false);
                                    }}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}

                </div>


            </div>
        </>
    )
}