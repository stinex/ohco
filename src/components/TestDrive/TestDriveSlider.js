import React, {useState} from 'react';
import ArrowIcon from "../../UI/icon/TestDrive/ArrowIcon";
import Slider from "../Slider";


const imgArray = [
    {path: '/image/TestDrive/Slider/chair-slide1.png', alt: 'chair-slide-1'},
    {path: '/image/TestDrive/Slider/chair-slide2.png', alt: 'chair-slide-2'},
    {path: '/image/TestDrive/Slider/chair-slide3.png', alt: 'chair-slide-3'},
    {path: '/image/TestDrive/Slider/chair-slide4.png', alt: 'chair-slide-4'},
]

const TestDriveSlider = () => {


    const [swiper, setSwiper] = useState(false);

    const handleChangeSlide = (string) => {
        if (string === 'next') {
            swiper.slideNext(400)
        } else {
            swiper.slidePrev(400)
        }
    }

    return (
        <div className='testdrive-slider'>
            <div className='testdrive-slider__wrapper'>
                <Slider
                    setSwiper={setSwiper}
                    arr={imgArray}
                />
                <div className='testdrive-slider__blur'/>
            </div>
            <div className='testdrive-slider__info'>
                <div className='testdrive-slider__info-wrapper'>
                    <p className='testdrive-slider__desc'>
                        Если вы хотите увидеть, как кресло<br className='media500'/> впишется в ваш<br/>
                        интерьер, наши дизайнеры<br className='media500'/> совершенно бесплатно<br/>
                        сделают<br className='media500'/> визуализацию кресла в вашем интерьере<br className='media500'/><br/>
                        и посоветуют, какой цвет кресла подойдет<br className='media500'/> именно вам
                    </p>
                    <div className='testdrive-slider__buttons'>
                        <button
                            onClick={() => handleChangeSlide('prev')}
                            className='testdrive-slider__prev'>
                        <span className='testdrive-slider__icon'>
                            <ArrowIcon/>
                        </span>
                        </button>
                        <button
                            onClick={() => handleChangeSlide('next')}
                            className='testdrive-slider__next'>
                        <span className='testdrive-slider__icon'>
                            <ArrowIcon/>
                        </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDriveSlider;
