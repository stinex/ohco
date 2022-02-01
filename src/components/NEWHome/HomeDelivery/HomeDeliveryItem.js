import React from 'react';

const HomeDeliveryItem = ({title, subtitle, icon}) => {

    const Icon = icon

    return (
        <div className='home-delivery__item'>
            <div className='home-delivery__icon'>
                {icon && <Icon/>}
            </div>
            <div className='home-delivery__name'>
                {title}
            </div>
            <p className='home-delivery__subtitle'>
                {subtitle}
            </p>
        </div>
    );
};

export default HomeDeliveryItem;
