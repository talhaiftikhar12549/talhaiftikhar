import talhaPic from "../assets/talha crop.jpg"
import TypingTextAnimation from "./TypingTextAnimation"
export default function HeroSection() {

    // debugger
    const handleClick = () => {
        const projectsSection = document.getElementById('projectsSection');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
        console.log(projectsSection);
        console.log('clicked');
    }
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume/Muhammad Talha Resume.pdf";
        link.download = "Talha Resume.pdf";
        link.click();
    };

    return (
        <>
            <section className="text-[#ffffff] absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col-reverse md:flex-row items-center pt-28 sm:pt-32 md:pt-24 md:h-[100%] w-[90%] xl:w-[70%] justify-between">
                    <div className="w-[90%] md:w-[55%]  xl:w-[50%]">
                        <p className="text-xl font-bold">Hello 👋, I'm</p>
                        <p className="text-4xl md:text-6xl font-bold py-2">Talha</p>
                        <div className="font-bold text-sm md:text-xl lg:text-2xl py-4">
                            <TypingTextAnimation />
                        </div>
                        <p className="text-sm md:text-lg">
                            Meta Certified Front-End Engineer, turning pixels into pages with a parallel of 3+ years experience in tech. I am a self-taught developer who loves to build things that live on the internet.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-around w-[100%] py-8">

                            <div className="cursor-pointer group relative w-32 h-12">
                                <a href="https://www.linkedin.com/in/muhammadtalha12549" target="_blank" rel="noopener noreferrer">
                                    <div className="absolute inset-0 flex items-center justify-center z-30">
                                        <p className="font-bold group-hover:text-[#2c2ebf] transition-colors duration-300">Let's Connect</p>
                                    </div>
                                    <div className="bg-[#fefefe] w-32 h-12 absolute mt-1 ml-1 group-hover:bg-[#2c2ebf] transition-colors duration-300"></div>
                                    <div className="bg-[#2c2ebf] w-32 h-12 absolute group-hover:bg-[#ffffff] transition-colors duration-300"></div>
                                </a>
                            </div>


                            <p onClick={handleDownload} className="py-4  px-4 cursor-pointer font-bold relative group">
                                Resume
                                <span className="hidden md:block absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#2c2ebf] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                            </p>

                            <p onClick={handleClick} className="py-4 px-4 cursor-pointer font-bold relative group">
                                Projects
                                <span className="hidden md:block absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#2c2ebf] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                            </p>

                        </div>

                    </div>


                    <div className="w-[40%] py-4 flex justify-end">
                        <img title="Yep, that's me." className="rounded-full xl:h-[400px] xl:w-[400px]" src={talhaPic} alt="Talha" />
                    </div>
                </div>
            </section>

        </>

    )
}