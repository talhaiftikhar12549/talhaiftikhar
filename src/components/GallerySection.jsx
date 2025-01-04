import React from "react";
import usmanPic from "../assets/usmanPic.jpg";
import povatUfoia from "../assets/povatUforia.jpg";
import deskSetup2023 from "../assets/desk2024.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const GallerySection = () => {
    return (
        <>

            <div id="projectsSection" className="h-[100vh] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">


                <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] h-[50vh] ">


                    <div className="py-10 ">
                        <p className=" text-3xl py-2 [#2c2ebf] relative">GALLERY. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>


                    <div className=" py-8 w-[100%] h-[60vh] flex items-center justify-center">

                        <div className="flex flex-col gap-12 py-6 w-[80%] justify-center items-center">

                            <Swiper
                                modules={[Pagination, Autoplay, Navigation]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                slidesPerView={2}
                                className="h-[80vh] w-full"
                                pagination={{ clickable: true }}
                                style={{
                                    '--swiper-pagination-color': '#2c2ebf',
                                    '--swiper-pagination-bullet-inactive-color': '#cccccc',
                                }}
                            >
                                <SwiperSlide>
                                    <div className=" border-[#0e0e1a] w-[100%] h-[100%]">
                                        <img src={deskSetup2023} alt="Desk setup 2023" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-[#0e0e1a] w-[100%] h-[100%]">
                                        <img src={povatUfoia} alt="Povat UFOIA" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-[#0e0e1a] w-[100%] h-[100%]">
                                        <img src={povatUfoia} alt="Povat UFOIA duplicate" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>

                    </div>

                </div>
            </div>



            <div className="bg-[#2a2a33] h-[5px]"></div>
        </>
    );
};

export default GallerySection;
