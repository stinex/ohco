import React from 'react';
import ButtonSlider from "../../../UI/components/ButtonSlider";

const HomeSliderText = ({model, price, setOpen, section}) => {


    return (
        <div className='home-slider__text'>
            <div className='home-slider__name'>
                Подходит для<br/>
                любого интерьера
            </div>
            <p className='home-slider__model'>
                {model}
            </p>
            <ButtonSlider
                onClick={() => setOpen(true)}
                className={`home-slider__button home-slider__button--${section}`}
            >
                Купить за {price} ₽
            </ButtonSlider>
        </div>
    );
};

export default HomeSliderText;
