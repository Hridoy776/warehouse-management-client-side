import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";
const Slider = () => {
  return (
    <div className="lg:w-[50%]  mx-auto">
        <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide >
        <div className=" w-full mx-auto   shadow-xl image-full">
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://i.ibb.co/qyTh7hg/maxim-lozyanko-q-Fsxwpo-DIB4-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full mx-auto  shadow-xl image-full">
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://i.ibb.co/db10n2v/alfred-guzman-v6-Rj0-WB6-F0-I-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full mx-auto  shadow-xl image-full">
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://i.ibb.co/9tTqCq6/ruijia-wang-K1-Il-F2y-YX8-Q-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-full mx-auto  shadow-xl image-full">
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://i.ibb.co/Ry4txf0/siora-photography-Lk-T5-JCe-PUY-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Slider;
