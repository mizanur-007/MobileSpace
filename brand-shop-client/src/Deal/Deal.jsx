import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Deal = () => {
    return (
        <div className="mt-10 mb-16 relative px-2 lg:px-0">
            <h1 className="text-2xl font-bold logofont mb-4 text-center">Deals Of The Day</h1>
        <Swiper className="mySwiper  rounded-2xl">
            {/* 1 */}
          <SwiperSlide>
          <div className="hero h-[500px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/c2XbFXH/rsz-1rsz-hand-showing-tablet-with-new-offer-inscription.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="absolute top-12 md:top-14 lg:top-48 left-14">
    <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">Grab The Opportunity</h1>
    <h1 className="text-xl lg:text-2xl text-white font-semibold my-2">On Any Headphone of Xiaomi</h1>
    <h1 className="text-lg lg:text-xl font-medium text-white">*Applicable Only Once</h1>
  </div>
</div>
          </SwiperSlide>

{/* 2 */}
          <SwiperSlide>
          <div className="hero h-[500px] rounded-2xl" style={{backgroundImage: 'url(https://i.ibb.co/JjQYgWW/hand-with-toy-shopping-packet.jpg)'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="absolute top-32 left-24 md:left-36  lg:left-48">
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">Get Upto <br /> <span className="text-cyan-300 my-2">90% </span><br /> Discount</h1>
    <h1 className="text-2xl text-white font-semibold my-2">Only On Friday</h1>
  </div>
</div>
          </SwiperSlide>

        </Swiper>
        </div>
    );
};

export default Deal;