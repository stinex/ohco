import React from 'react';

const HomeComplexItem = ({title, subtitle, number, src}) => {
    return (
        <div className='home-complex__item'>
            <div className='home-complex__text'>
                <div className='home-complex__number'>0{number} / 03</div>
                <h5 className='home-complex__name'>
                    {title}
                </h5>
                <p className='home-complex__subtitle'>
                    {subtitle}
                </p>
            </div>
            <div className='home-complex__img'>
                <img
                    src={src}
                    alt='home-complex__img'
                />
            </div>
        </div>
    );
};

export default HomeComplexItem;
