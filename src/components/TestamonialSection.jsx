import React from "react";
import UforiaLogo from "../assets/uforiainfotech_logo-removebg-preview.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <>
      <div className="h-[60vh] w-full bg-[#0e0e1a] py-8 flex items-center justify-center">
        <Swiper
          modules={[Pagination, Autoplay]} 
          autoplay={{ delay: 3000 }} 
          loop={true} 
          slidesPerView={1} 
          className="w-[50%] h-[80%]"
          pagination={{ clickable: true }} 
          style={{
            '--swiper-pagination-color': '#2c2ebf',
            '--swiper-pagination-bullet-inactive-color': '#cccccc',
          }}
        >
          <SwiperSlide>
            <div className="border-x-[12px] border-[#0e0e1a] bg-[#060614] px-4 w-[100%] h-[70%] flex items-center justify-evenly">
              <div className="flex items-center justify-center w-[20%]">
                <img className="h-[120px] w-[120px]" src={UforiaLogo} alt="Uforia Logo" />
              </div>
              <div className="flex flex-col w-[80%] text-[#ffffff]">
                <p>
                  <span className="text-[#2c2ebf] text-3xl">″</span>
                  <span className="text-[#ffffff] text-sm font-light">
                    Using the Scrum Board has completely transformed the way our team collaborates.
                    The intuitive design and seamless functionality make tracking tasks effortless.
                    It's an essential tool for staying organized and delivering projects on time!
                  </span>
                  <span className="text-[#2c2ebf] text-3xl">″</span>
                </p>
                <p className="font-semibold py-3">Usman Tariq</p>
                <p className="text-xs font-light">UI/UX designer at Veroke</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-x-[12px] border-[#0e0e1a] bg-[#060614] px-4 w-[100%] h-[70%] flex items-center justify-evenly">
              <div className="flex items-center justify-center w-[20%]">
                <img className="h-[120px] w-[120px]" src={UforiaLogo} alt="Uforia Logo" />
              </div>
              <div className="flex flex-col w-[80%] text-[#ffffff]">
                <p>
                  <span className="text-[#2c2ebf] text-3xl">″</span>
                  <span className="text-[#ffffff] text-sm font-light">
                    Using the Scrum Board has completely transformed the way our team collaborates.
                    The intuitive design and seamless functionality make tracking tasks effortless.
                    It's an essential tool for staying organized and delivering projects on time!
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
      <div className="bg-[#2a2a33] h-[5px]"></div>
    </>
  );
};

export default Carousel;
