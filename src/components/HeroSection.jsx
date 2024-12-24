import talhaPic from "../assets/talha crop.jpg"
import TypingTextAnimation from "./TypingTextAnimation"
export default function HeroSection() {
    return (
        <>
            <section className="text-[#ffffff] absolute inset-0 flex items-center justify-center">
                <div className="flex items-center pt-24 w-[70%] justify-between">
                    <div className="">
                        <p className="text-2xl font-bold">Hello 👋, I'm</p>
                        <p className="text-5xl font-bold">Talha</p>
                        <div className="font-bold text-xl">
                            <TypingTextAnimation />
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