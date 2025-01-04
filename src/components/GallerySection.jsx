import React from "react";
import UforiaLogo from "../assets/uforiainfotech_logo-removebg-preview.png";
import usmanPic from "../assets/usmanPic.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const GallerySection = () => {
    return (
        <>

            <div id="projectsSection" className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">
                {/* {modalOpener && <ProjectModal  onClose={()=>setModalOpener(false)} />} */}

                <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] ">
                    <div className="py-10 ">
                        <p className=" text-3xl py-2 [#2c2ebf] relative">GALLERY. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>
                    <div className=" py-8">


                        <div className="flex flex-col gap-12 py-6 w-[100%]">


                            <Swiper
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                slidesPerView={1}
                                className="lg:w-[85%] xl:w-[90%] 2xl:w-[50%] h-[80%]"
                                pagination={{ clickable: true }}
                                style={{
                                    '--swiper-pagination-color': '#2c2ebf',
                                    '--swiper-pagination-bullet-inactive-color': '#cccccc',
                                }}
                            >
                                <SwiperSlide>
                                    <div className="border-x-[12px] border-[#0e0e1a] bg-[#060614] px-4 w-[100%] h-[70%]  flex flex-col lg:flex-row items-center justify-evenly">
                                        <div className="flex items-center justify-center w-[100%] lg:w-[20%]">
                                            <img className="h-[120px] w-[120px]" src={usmanPic} alt="usmanPic" />
                                        </div>
                                        <div className="flex flex-col w-[80%] text-[#ffffff]">
                                            <p>
                                                <span className="text-[#2c2ebf] text-3xl">″</span>
                                                <span className="text-[#ffffff] text-xs md:text-sm font-light text-wrap">
                                                    I have worked with this buddy for a long time and have witnessed his growth in his career. We have collaborated on different projects, and he helped me rank a website on the first page.
                                                </span>
                                                <span className="text-[#2c2ebf] text-3xl">″</span>
                                            </p>
                                            <p className="font-semibold py-3">Usman Tariq</p>
                                            <p className="text-xs font-light">UI/UX designer at Veroke</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="border-x-[12px] border-[#0e0e1a] bg-[#060614] px-4 w-[100%] h-[70%]  flex flex-col lg:flex-row items-center justify-evenly">
                                        <div className="flex items-center justify-center w-[100%] lg:w-[20%]">
                                            <img className="h-[120px] w-[120px]" src={usmanPic} alt="usmanPic" />
                                        </div>
                                        <div className="flex flex-col w-[80%] text-[#ffffff]">
                                            <p>
                                                <span className="text-[#2c2ebf] text-3xl">″</span>
                                                <span className="text-[#ffffff] text-xs md:text-sm font-light text-wrap">
                                                    I have worked with this buddy for a long time and have witnessed his growth in his career. We have collaborated on different projects, and he helped me rank a website on the first page.
                                                </span>
                                                <span className="text-[#2c2ebf] text-3xl">″</span>
                                            </p>
                                            <p className="font-semibold py-3">Usman Tariq</p>
                                            <p className="text-xs font-light">UI/UX designer at Veroke</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>


                    </div>
                </div>
            </div>

            {/* <div className="h-[100vh] sm:h-[80vh] lg:h-[60vh]  w-full bg-[#0e0e1a] flex flex-col items-center justify-center"> */}
            {/* <div className="py-10 ">
                <p className=" text-3xl py-2 [#2c2ebf] relative">CONTACT ME. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
            </div> */}
            {/* <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={1}
                    className="lg:w-[85%] xl:w-[90%] 2xl:w-[50%] h-[80%]"
                    pagination={{ clickable: true }}
                    style={{
                        '--swiper-pagination-color': '#2c2ebf',
                        '--swiper-pagination-bullet-inactive-color': '#cccccc',
                    }}
                >
                    <SwiperSlide>
                        <div className="border-x-[12px] border-[#0e0e1a] bg-[#060614] px-4 w-[100%] h-[70%]  flex flex-col lg:flex-row items-center justify-evenly">
                            <div className="flex items-center justify-center w-[100%] lg:w-[20%]">
                                <img className="h-[120px] w-[120px]" src={usmanPic} alt="usmanPic" />
                            </div>
                            <div className="flex flex-col w-[80%] text-[#ffffff]">
                                <p>
                                    <span className="text-[#2c2ebf] text-3xl">″</span>
                                    <span className="text-[#ffffff] text-xs md:text-sm font-light text-wrap">
                                        I have worked with this buddy for a long time and have witnessed his growth in his career. We have collaborated on different projects, and he helped me rank a website on the first page.
                                    </span>
                                    <span className="text-[#2c2ebf] text-3xl">″</span>
                                </p>
                                <p className="font-semibold py-3">Usman Tariq</p>
                                <p className="text-xs font-light">UI/UX designer at Veroke</p>
                            </div>
                        </div>
                    </SwiperSlide>

                  
                </Swiper> */}
            {/* </div> */}







            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>
    );
};

export default GallerySection;
