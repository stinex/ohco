import React, {useState} from 'react';
import HomeSliderColor from "./HomeSliderColor";
import HomeSliderItem from "./HomeSliderItem";
import {Swiper, SwiperSlide} from "swiper/react";
import {colorArr, homeSlidesArr} from "../../../lib/constants/constants";
import BackgroundWrapper from "../../BackgroundWrapper";
import DialogUI from "../../../UI/components/DialogUI";

const HomeSlider = () => {


    const [swiper, setSwiper] = useState();
    const [colorActive, setColorActive] = useState(1)
    const [open, setOpen] = useState(false);


    const handleChangeColor = (index) => {
        if (swiper) {
            setColorActive(index);
            swiper.slideTo(index, 400)
        }
    }

    const handleNextColor = () => {
        if (swiper) {
            const nextColor = colorActive + 1

            if (nextColor > colorArr.length) {
                swiper.slideTo(1, 400)
                return
            }
            swiper.slideNext(400);
        }
    }

    const handlePrevColor = () => {
        if (swiper) {
            const prevColor = colorActive - 1

            if (!prevColor) {
                swiper.slideTo(4, 400)
                return
            }
            swiper.slidePrev(400)
        }
    }

    const handleChangeSlide = (swiper) => {
        const index = swiper.activeIndex

        if (index > homeSlidesArr.length) {
            setColorActive(1);
            return
        }

        if (!index) {
            setColorActive(4)
            return;
        }

        setColorActive(index)
    }


    return (
        <BackgroundWrapper
            wrapper='background-home-white'>
            <section className='home-slider'>
                <div className='home-slider__wrapper'>
                    <h4 className='home-slider__title'>
                        Подберите свой <span className='main-color'>OHCO M.8</span>
                    </h4>
                    <div className='home-slider__container'>
                        <Swiper
                            onSlideChange={handleChangeSlide}
                            onSwiper={swiper => setSwiper(swiper)}
                            loop>
                            {homeSlidesArr.map((item, index) => (
                                <SwiperSlide key={item.name}>
                                    <HomeSliderItem
                                        section={index + 1}
                                        setOpen={setOpen}
                                        data={item}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <HomeSliderColor
                        colorActive={colorActive}
                        handleChangeColor={handleChangeColor}
                        handleNextColor={handleNextColor}
                        handlePrevColor={handlePrevColor}
                    />
                </div>
                <DialogUI
                    state={{open, setOpen}}
                    title={(
                        <>
                            Заказать <span className='main-color'>OHCO M.8</span>
                        </>
                    )}
                    subtitle={
                        <>
                            Оставьте свои данные для связи.<br/>
                            Наши менеджеры решат все ваши вопросы.
                        </>
                    }
                />
            </section>
        </BackgroundWrapper>
    );
};

export default HomeSlider;
