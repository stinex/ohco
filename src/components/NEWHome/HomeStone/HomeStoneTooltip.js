import React from 'react';

const HomeStoneTooltip = ({subtitle, index}) => {
    return (
        <div className={`home-stone__tooltip home-stone__tooltip--${index}`}>
            <div className='home-stone__plus'>
                <div className='home-stone__icon'>
                    <span>+</span>
                </div>
            </div>
            <div className='home-stone__content'>
                <span>
                    {subtitle}
                </span>
            </div>
        </div>
    );
};

export default HomeStoneTooltip;
