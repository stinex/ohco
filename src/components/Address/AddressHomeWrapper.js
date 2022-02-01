import React from 'react';
import HomeIcon from "../../UI/icon/HomeIcon";

const AddressHomeWrapper = () => {
    return (
        <div className={`address__icon-wrapper-home`}>
            <div className='address__icon-home'>
                <HomeIcon/>
            </div>
            <img
                src="/image/AnyPage/black.png"
                className='address__color address__color--home'
                alt='color-black'
            />
        </div>
    );
};

export default AddressHomeWrapper;
