import React, { useState } from 'react';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function hanldeClickHome() {
        const Home = document.getElementById('Home');
        Home.scrollIntoView({ behavior: 'smooth' });
    }

    function hanldeClickAboutMe() {
        const aboutMe = document.getElementById('aboutMe');
        aboutMe.scrollIntoView({ behavior: 'smooth' });
    }

    function hanldeClickExperience() {

        const experience = document.getElementById('experience');
        experience.scrollIntoView({ behavior: 'smooth' });
    }

    function hanldeClickProjects() {
        const projectsSection = document.getElementById('projectsSection');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function hanldeClickEducation() {
        const Education = document.getElementById('Education&Skills');
        Education.scrollIntoView({ behavior: 'smooth' });
    }

    function hanldeClickContactMe() {
        const contactUs = document.getElementById('contactUs');
        contactUs.scrollIntoView({ behavior: 'smooth' });

    }


    return (
        <>
        <div className='h-[15vh]  bg-[#060614] w-[100%] relative '>
            <div className='flex flex-row px-5 xl:px-20 relative z-10 h-[100%] w-[100%] text-[#d9d7d7] justify-between lg:justify-around items-center '>
            <p onClick={hanldeClickHome} className=" font-bold cursor-pointer hover:text-[#ffffff]">HOME</p>
                <p onClick={hanldeClickAboutMe} className=" font-bold cursor-pointer hover:text-[#ffffff]">ABOUT ME</p>
                <p onClick={hanldeClickExperience} className=" font-bold cursor-pointer hover:text-[#ffffff]">EXPERIENCE</p>
                <p onClick={hanldeClickProjects} className=" font-bold cursor-pointer hover:text-[#ffffff]">PROJECTS</p>
                <p onClick={hanldeClickEducation} className=" font-bold cursor-pointer hover:text-[#ffffff]">EDUCATION</p>
                <p onClick={hanldeClickContactMe} className=" font-bold cursor-pointer hover:text-[#ffffff]">CONTACT</p>
            </div>
                

            </div>
        </>
    )
}