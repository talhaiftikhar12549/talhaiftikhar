export default function NavBar() {

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
            <div className="h-[15vh] w-[100%] flex bg-[#060614] text-[#d9d7d7] justify-between lg:justify-around items-center px-5 xl:px-20 z-10 relative">
                <p onClick={hanldeClickHome} className="font-bold cursor-pointer hover:text-[#ffffff]">HOME</p>
                <p onClick={hanldeClickAboutMe} className="font-bold cursor-pointer hover:text-[#ffffff]">ABOUT ME</p>
                <p onClick={hanldeClickExperience} className="font-bold cursor-pointer hover:text-[#ffffff]">EXPERIENCE</p>
                <p onClick={hanldeClickProjects} className="font-bold cursor-pointer hover:text-[#ffffff]">PROJECTS</p>
                <p onClick={hanldeClickEducation} className="font-bold cursor-pointer hover:text-[#ffffff]">EDUCATION</p>
                <p onClick={hanldeClickContactMe} className="font-bold cursor-pointer hover:text-[#ffffff]">CONTACT</p>

            </div>
        </>
    )
}