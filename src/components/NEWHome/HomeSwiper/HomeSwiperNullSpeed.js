import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel]);

const HomeSwiperNullSpeed = ({ children, customWrapper = '' }) => {
  const [touch, setTouch] = useState();

  // const handleChangeTouch = (e) => {
  //   console.log(e.touches)
  // }

  const handleChangeEnd = (e) => {
    console.log(e.touches);
  };

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        speed={0}
        allowTouchMove={false}
        // onTouchStart={handleChangeTouch}
        onTouchEnd={handleChangeEnd}
        className={`content-swiper ${customWrapper}`}
      >
        {children}
      </Swiper>
    </>
  );
};

export default HomeSwiperNullSpeed;
