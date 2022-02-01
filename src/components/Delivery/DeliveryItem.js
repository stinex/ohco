import React from 'react';

const DeliveryItem = ({icon, number, title}) => {

    const Icon = icon


    return (
        <div className='delivery__item'>
            <div className={`delivery__icon delivery__icon--${number}`}>
                <Icon/>
            </div>
            <div className='delivery__item-title'>
                {title}
            </div>
        </div>
    );
};

export default DeliveryItem;
