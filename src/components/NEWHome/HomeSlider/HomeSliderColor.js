import React, {useEffect, useState} from 'react';
import ArrowIcon from "../../../UI/icon/TestDrive/ArrowIcon";
import {colorArr} from "../../../lib/constants/constants";

const HomeSliderColor = ({colorActive, handlePrevColor, handleChangeColor, handleNextColor}) => {
    return (
        <div className='home-slider__colors'>
            <button onClick={handlePrevColor} className='home-slider__prev'>
                <ArrowIcon fill='#2D2D2D'/>
            </button>
            {colorArr.map((item, index) => {

                const active = colorActive === index + 1 ? 'home-slider__color--active' : ''

                return (
                    <button key={item.color} onClick={() => handleChangeColor(index + 1)}>
                        <div
                            style={{backgroundColor: item.color}}
                            className={`home-slider__color ${active}`}
                        />
                    </button>
                )
            })}
            <button onClick={handleNextColor} className='home-slider__next'>
                <ArrowIcon fill='#2D2D2D'/>
            </button>
        </div>
    );
};

export default HomeSliderColor;
