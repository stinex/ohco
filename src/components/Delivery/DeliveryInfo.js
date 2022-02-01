import React from 'react';
import DeliveryText from "./DeliveryText";

const DeliveryInfo = () => {
    return (
        <section className="delivery">
            <div className='delivery__wrapper'>
                <div className='delivery__img'>
                    <img
                        src='/image/Delivery/delivery.png'
                        alt='delivery__img'
                    />
                </div>
                <DeliveryText/>
            </div>
        </section>
    );
};

export default DeliveryInfo;
