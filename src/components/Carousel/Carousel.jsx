import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import arrowLeft from ".././../assets/arrow-left.svg";
import arrowRight from ".././../assets/arrow-right.svg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel({ slides }) {
  return (
    <>
      <Swiper
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:w-[70%] w-80%  overflow-visible"
      >
        {slides.map((card, index) => (
          <SwiperSlide key={index} className="">
            <div className=" slide-inner custom-border  ">
              <div className="flex justify-center items-center pb-4">
                <img
                  src={card.imageUrl}
                  alt={`Image ${index}`}
                  className=" h-20 w-20"
                />
              </div>

              <div className="text-white text-center font-poppins lg:text-[20px] lg:font-bold  text-[17px]  font-[500] px-3">
                {card.title}
              </div>
              <div className="text-white lg:text-[17px] text-14px text-center font-poppins text-base font-[200] leading-7 lg:px-20 pt-3 pb-6">
                {card.description}
              </div>
              <div className="text-white text-center font-poppins text-xs font-[100] leading-4">
                {card.footer}
              </div>
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
        <div className="button-prev">
          <img src={arrowLeft} alt="Left" />
        </div>
        <div className="button-next">
          <img src={arrowRight} alt="Right" />
        </div>
      </Swiper>
    </>
  );
}
