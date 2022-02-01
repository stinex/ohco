import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import {useMediaQuery} from "@mui/material";

const HomeAdvantageItem = ({wrapper, content, titleOne, titleTwo, subtitle, img, item, subtitle375}) => {

    const media375 = useMediaQuery('(max-width: 375px)')
    const listItemClass = content == 4 ? 'home-advantage__text home-advantage__text--last' : 'home-advantage__text';
    const mediaSub = media375 && subtitle375 ? subtitle375 : subtitle

    return (
        <>
            <BackgroundWrapper wrapper={`${wrapper} home-advantage--active`} customContainer='home-advantage-container'>
                <div className='home-advantage__item'>
                    <div className={listItemClass}
                    >
                        <h6 className='home-advantage__number'>0{content} / 04</h6>
                        <h3 className='home-advantage__title'>
                            <span className='main-color'>{titleOne}</span><br/>
                            {titleTwo}
                        </h3>
                        <p className={`home-advantage__subtitle home-advantage__subtitle--${item}`}>
                            {mediaSub}
                        </p>
                    </div>
                    {img && (
                        <div className='home-advantage__img'>
                            <img
                                src={img}
                                alt='advantage-chair'/>
                        </div>
                    )}
                </div>
            </BackgroundWrapper>
        </>
    );
};

export default HomeAdvantageItem;
