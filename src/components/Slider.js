import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

const Slider = ({setSwiper, arr, navigation}) => {
    return (
        <>
            <Swiper
                onSwiper={(swiper) => setSwiper(swiper)}
                navigation={navigation}
                loop={true}
            >
                {arr.map(item => (
                    <SwiperSlide
                        key={item.path}
                    >
                        <img
                            src={item.path}
                            alt={item.alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Slider;
