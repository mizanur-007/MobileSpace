import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
    return (
        <>
        <Swiper className="mySwiper rounded-2xl">
            {/* 1 */}
          <SwiperSlide className="px-3 lg:px-0">
          <div className="hero h-[450px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/h8gwYw6/8642509.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
  </div>
</div>
          </SwiperSlide>

{/* 2 */}
          <SwiperSlide  className="px-3 lg:px-0">
          <div className="hero h-[450px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/j5wjCRw/rsz-14656615.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
  </div>
</div>
          </SwiperSlide>

          {/* 3 */}
          <SwiperSlide  className="px-3 lg:px-0">
          <div className="hero h-[450px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/PtPr66s/4590878.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
  </div>
</div>
          </SwiperSlide>
          {/* 4 */}
          <SwiperSlide  className="px-3 lg:px-0">
          <div className="hero h-[450px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/p2h4R7q/black-friday-web-banner-25.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
  </div>
</div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;