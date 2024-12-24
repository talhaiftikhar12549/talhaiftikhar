import talhaPic from "../assets/talha crop.jpg"
import TypingTextAnimation from "./TypingTextAnimation"
export default function HeroSection() {
    return (
        <>
            <section className="text-[#ffffff] absolute inset-0 flex items-center justify-center">
                <div className="flex items-center pt-24 w-[70%] justify-between">
                    <div className="w-[40%]">
                        <p className="text-2xl font-bold">Hello 👋, I'm</p>
                        <p className="text-6xl font-bold py-2">Talha</p>
                        <div className="font-bold text-2xl py-4">
                            <TypingTextAnimation />
                        </div>
                        <p className="text-lg">
                            Meta Certified Front-End Engineer, turning pixels into pages with a parallel of 3+ years experience in tech. I am a self-taught developer who loves to build things that live on the internet.
                        </p>
                        <div className="flex justify-around w-[100%] py-8">


                            {/* <div className="py-2 px-4 relative ">
                            <p className="absolute">Let's Connect</p>
                            <div className="bg-[#2c2ebf] py-8 px-12 absolute"></div>
                            <div className="bg-[#fefefe] py-8 px-12 absolute"></div>
                            </div> */}

                            <p className="bg-[#2c2ebf] py-2 px-4 shadow font-bold cursor-pointer">Let's Connet</p>

                            <p className="py-2 px-4 cursor-pointer font-bold relative group">
                                Resume
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#2c2ebf] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                            </p>
                    
                            <p className="py-2 px-4 cursor-pointer font-bold relative group">
                                Projects
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#2c2ebf] transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                            </p>

                        </div>

                    </div>


                    <div>
                        <img className="rounded-full h-[400px] w-[400px]" src={talhaPic} alt="Talha" />
                    </div>
                </div>
            </section>

        </>

    )
}