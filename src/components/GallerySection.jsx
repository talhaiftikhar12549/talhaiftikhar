import React from "react";
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

            <div className="h-[100%] bg-[#0e0e1a] text-[#d9d7d7] flex flex-col items-center py-10">


                <div className="w-[90%] xl:w-[85%] 2xl:w-[70%] h-[100%] ">


                    <div className="py-10 ">
                        <p className=" text-3xl py-2 relative">GALLERY. <span className='absolute bg-[#2c2ebf] bottom-0 left-0 h-[2px] w-[100px]'></span></p>
                    </div>


                    <div className="w-[100%] h-[100%] flex items-center justify-center">

                        <div className="flex flex-col gap-12 py-8 h-[100%] w-[100%] justify-center items-center">
                            <Swiper
                                modules={[Pagination, Autoplay, Navigation]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                spaceBetween={30}
                                className="h-[80%] w-full"
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                                pagination={{ clickable: true }}
                                navigation={true}
                                style={{
                                    '--swiper-pagination-color': '#2c2ebf',
                                    '--swiper-pagination-bullet-inactive-color': '#cccccc',
                                    '--swiper-navigation-color': '#2c2ebf',

                                }}
                            >
                                <SwiperSlide>
                                    <div className="relative">
                                        <img
                                            className="w-full h-auto object-cover"
                                            src={deskSetup2023}
                                            alt="Desk setup 2023"
                                        />
                                        <p className="absolute bottom-0 w-full bg-opacity-60 bg-black text-xl text-white py-4 text-center">
                                            Desk Setup 2023
                                        </p>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="relative">
                                        <img
                                            className="w-full h-auto object-cover"
                                            src={povatUfoia
                                            }
                                            alt="Desk setup 2023"
                                        />
                                        <p className="absolute bottom-0 w-full bg-opacity-60 bg-black text-xl text-white py-4 text-center">
                                            Desk Setup 2023
                                        </p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="relative">
                                        <img
                                            className="w-full h-auto object-cover"
                                            src={deskSetup2023
                                            }
                                            alt="Desk setup 2023"
                                        />
                                        <p className="absolute bottom-0 w-full bg-opacity-60 bg-black text-xl text-white py-4 text-center">
                                            Desk Setup 2023
                                        </p>
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
