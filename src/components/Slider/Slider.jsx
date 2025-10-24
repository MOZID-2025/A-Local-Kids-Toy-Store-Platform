import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="h-150"
    >
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1607647074986-fc5acd1feaab?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://plus.unsplash.com/premium_photo-1747608207746-84469a6ac436?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://plus.unsplash.com/premium_photo-1661292008832-2d6b9a839bf8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171"
          alt=""
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
