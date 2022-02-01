import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



SwiperCore.use([Mousewheel]);

const SwipeContent = ({className, children}) => {
    return (
        <Swiper
            speed={1000}
            direction={"vertical"}
            slidesPerView={1}
            // spaceBetween={30}
            mousewheel={true}
            className={className}
        >
            {children}
        </Swiper>
    );
}

export default SwipeContent
