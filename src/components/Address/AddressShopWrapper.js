import React from 'react';
import ShopIcon from "../../UI/icon/ShowRooms/ShopIcon";

const AddressShopWrapper = () => {
    return (
        <div className={`address__icon-wrapper-shop`}>
            <div className='address__icon-shop'>
                <ShopIcon/>
            </div>
            <img
                src="/image/AnyPage/black.png"
                className='address__color'
                alt='color-black'
            />
        </div>
    );
};

export default AddressShopWrapper;
