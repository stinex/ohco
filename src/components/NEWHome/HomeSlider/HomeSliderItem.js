import React from 'react';
import HomeSliderText from "./HomeSliderText";

const HomeSliderItem = ({data, setOpen, section}) => {

    const {name, model, price, src, src2} = data


    return (
        <div className='home-slider__item'>
            <div className={`home-slider__info home-slider__info--${name}`}>
                <div className='home-slider__chair'>
                    <img
                        src={src}
                        alt='slide-chair'
                    />
                </div>
                <HomeSliderText
                    section={section}
                    model={model}
                    price={price}
                    setOpen={setOpen}
                />
            </div>
            <div className={`home-slider__background home-slider__background--${name}`}>
                {/*Только мобилки*/}
                <div className='home-slider__mobile-text'>
                    <HomeSliderText
                        section={section}
                        model={model}
                        price={price}
                        setOpen={setOpen}
                    />
                </div>
                <div className='home-slider__img'>
                    <img
                        src={src2}
                        alt='slide-chair'
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSliderItem;
