import React from 'react';
import {useMediaQuery} from "@mui/material";

const HomeFeaturesItem = ({data, item}) => {

    const {title, subtitle, src, name} = data
    const media600 = useMediaQuery('(max-width: 600px)')

    return (
        <div className='home-features__item'>
            <h3 className='home-features__title'>
                {media600 ? (
                    <>
                        Особенности<br/>
                        <span className='main-color'>OHCO M.8</span>
                    </>
                ) : (
                    <>
                        Особенности<br/>
                        массажного кресла<br/>
                        <span className='main-color'>OHCO M.8</span>
                    </>
                )}
            </h3>
            <div className={`home-features__info home-features__img--${name}`}>
                <div className='home-features__img'>
                    <img
                        src={src}
                        alt='home-features-img'
                    />
                </div>
                {title && subtitle ? (
                    <div className={`home-features__text  home-features__text--${item}`}>
                        <div className={`home-features__name home-features__name--${item}`}>
                            {title}
                        </div>
                        <p className={`home-features__subtitle home-features__subtitle--${item}`}>
                            {subtitle}
                        </p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default HomeFeaturesItem;
