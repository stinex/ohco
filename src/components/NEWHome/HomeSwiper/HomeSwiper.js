import React, { useState } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Mousewheel } from "swiper";
SwiperCore.use([Mousewheel]);

const HomeSwiper = ({ children, speed = 1000, customWrapper = '' }) => {
  const [touch, setTouch] = useState();

  // const handleChangeTouch = (e) => {
  //   console.log(e.touches)
  // }

  const handleChangeSlide = (e) => {
    console.log(e)
  }

  const handleChangeEnd = (e) => {
    console.log(e.touches);
  };

  return (
    <>
      <Swiper
        onSlideChange={handleChangeSlide}
        onTouchEnd={handleChangeEnd}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        autoHeight={true}
        speed={speed}
        allowTouchMove={false}
        // onTouchStart={handleChangeTouch}
        className={`content-swiper ${customWrapper}`}
        style={{zIndex: 1300}}
      >
        {children}
      </Swiper>
    </>
  );
};

export default HomeSwiper;
