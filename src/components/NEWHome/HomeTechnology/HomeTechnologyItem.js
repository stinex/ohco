import React from 'react';
import {useMediaQuery} from "@material-ui/core";

const HomeTechnologyItem = ({title, subtitle, src, section}) => {

    const media1024 = useMediaQuery('(max-width: 1024px)')
    const media600 = useMediaQuery('(max-width: 600px)')
    const imgSrc = section === 3 && media600 ? '/image/Home/HomeTechnology/HomeTechnology3-375.png' :
        section === 3 && media1024 ? '/image/Home/HomeTechnology/HomeTechnology3-768.png' : src


    return (
        <div className='home-technology__item'>
            <div className={`home-technology__text home-technology__text--${section}`}>
                <h4 className={`home-technology__title home-technology__title--${section}`}>
                    {title}
                </h4>
                {!media1024 && (
                    <p className='home-technology__subtitle'>
                        {subtitle}
                    </p>
                )}
            </div>
            <div className={`home-technology__img home-technology__img--section${section}`}>
                <img
                    src={imgSrc}
                    alt='home-technology-img'
                />
            </div>
            {media1024 && (
                <p className={`home-technology__subtitle home-technology__subtitle--${section}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default HomeTechnologyItem;
