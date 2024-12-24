import collageImg from '../assets/hobbies collage.png'
export default function AboutUs() {
    return (
        <>

            <div class="h-[100vh] bg-[#0e0e1a] text-[#d9d7d7]">
                <div class="w-full h-full flex flex-col md:flex-row items-center justify-center">


                    <div class="w-[50%] h-full md:h-[70vh] flex justify-center relative">
                        <img src={collageImg} alt="Collage of hobbies" class="h-full w-[50%] absolute object-contain" />
                    </div>

                    <div class="w-[50%] h-[40vh] flex justify-center items-center text-2xl">
                        <div class=" md:px-16 text-left">
                            <p class=" text-3xl py-2 my-6 [#2c2ebf] relative">About me <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-1/6'></span></p>
                            <p className='py-6 text-2xl font-bold'>My Journey as a Software Engineer</p>
                            <p className='text-lg'>
                                After completing my pre-Engineering studies, I decided to pursue my career as a computer scientist at HITEC University. I started learning web development and created some cool web apps using different platforms like React, Vue, and Node. I spend most of my free time doing charity work.
                            </p>

                            <div className="cursor-pointer group relative w-32 h-12 my-10">
                                <div className="absolute inset-0 flex items-center justify-center z-30">
                                    <p className="font-bold text-lg group-hover:text-[#2c2ebf] transition-colors duration-300">Contact Me</p>
                                </div>
                                <div className="bg-[#fefefe] w-32 h-12 absolute mt-1 ml-1 group-hover:bg-[#2c2ebf] transition-colors duration-300"></div>
                                <div className="bg-[#2c2ebf] w-32 h-12 absolute group-hover:bg-[#ffffff] transition-colors duration-300"></div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>

    )
}