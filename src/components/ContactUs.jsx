import mailcolorImg from '../assets/mailcolor.png';
import locationcolorImg from '../assets/placeholder.png';
import emailWhiteImg from '../assets/email.png';
import emailColorImg from '../assets/emailColor.png';

export default function ContactUs() {
    return (
        <>
            <div id="contactUs" className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">

                <div className="w-[70%] ">

                    <div className="py-10 ">
                        <p class=" text-3xl py-2 [#2c2ebf] relative">CONTACT ME. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>


                    <div className="flex py-6 w-[100%] justify-between ">


                        <div className="w-[38%] py-12 px-3 bg-[#060614] flex ">

                            <div className="w-[100%] px-8">
                                <p className="text-3xl font-semibold">Let's connect.</p>
                                <div className='py-4'>
                                    <div className="py-4 px-6 w-[100%] flex item-center">
                                        <img className="px-2" src={locationcolorImg} alt="" />

                                        <p className="text-md px-2 font-semibold">Pakistan</p>

                                    </div>

                                    <div className="py-4 px-6 w-[100%] flex item-center">
                                        <img className="px-2" src={mailcolorImg} alt="" />

                                        <p className="text-md px-2 font-semibold">talhaiftikhar12549@gmail.com</p>

                                    </div>
                                </div>



                            </div>



                        </div>


                        <div className="w-[58%] py-12 px-3 bg-[#060614] flex " title="Click to view more detail.">

                            <div className="w-[100%] px-8">

                                <p className="text-3xl font-semibold">Reach out to me.</p>


                                <div className="py-12 px-10 w-[100%] flex justify-between">

                                <div className="cursor-pointer group relative w-52 h-12">
  <a
    href="mailto:talhaiftikhar12549@gmail.com?subject=Hello%20Talha&body=Hi%20there,%20I%20wanted%20to%20reach%20out."
    target="_blank"
    rel="noopener noreferrer"
  >
    {/* Content that changes on hover */}
    <div className="absolute inset-0 flex items-center justify-center z-30">
      <p className="font-bold group-hover:text-[#2c2ebf] transition-colors duration-300">
        Send me an Email
      </p>
      {/* Hover-dependent image display */}
      {/* <img
        className="px-2 duration-300 hidden group-hover:block group-hover:opacity-100 transition-opacity duration-300"
       onMouseEnter={src={emailColorImg}}
        alt="Color Email Icon"
      /> */}
      {/* <img
        className="px-2 duration-300 block group-hover:hidden group-hover:opacity-100 transition-opacity duration-300"
        src={emailWhiteImg}
        alt="White Email Icon"
      /> */}
    </div>

    {/* Background changes on hover */}
    <div className="bg-[#fefefe] w-52 h-12 absolute mt-1 ml-1 group-hover:bg-[#2c2ebf] transition-colors duration-300"></div>
    <div className="bg-[#2c2ebf] w-52 h-12 absolute group-hover:bg-[#ffffff] transition-colors duration-300"></div>
  </a>
</div>



                                    <div className="cursor-pointer group relative w-52 h-12">
                                        <a href="https://www.linkedin.com/in/muhammadtalha12549" target="_blank" rel="noopener noreferrer">
                                            <div className="absolute inset-0 flex items-center justify-center z-30">
                                                <p className="font-bold group-hover:text-[#2c2ebf] transition-colors duration-300">Connect on LinkedIn</p>
                                                
                                            </div>
                                            <div className="bg-[#fefefe] w-52 h-12 absolute mt-1 ml-1 group-hover:bg-[#2c2ebf] transition-colors duration-300"></div>
                                            <div className="bg-[#2c2ebf] w-52 h-12 absolute group-hover:bg-[#ffffff] transition-colors duration-300"></div>
                                        </a>
                                    </div>


                                </div>

                            </div>



                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}