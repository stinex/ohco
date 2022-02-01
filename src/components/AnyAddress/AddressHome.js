import React from 'react';
import HomeIcon from "../../UI/icon/HomeIcon";

const AddressHome = () => {
    return (
        <div className='any-address__left any-address__left--home'>
            <div className='any-address__text-wrapper'>
                <h4 className='any-address__title any-address__title--home'>
                    Выездной <br/>тест-драйв
                </h4>
                <div className='any-address__subtitle'>дома или в офисе</div>
            </div>
            <div className='any-address__img any-address__img-home'>
                <div className='any-address__icon-home'>
                    <HomeIcon/>
                    <div className='any-address__color-2'>
                        <img
                            src='/image/AnyPage/black2.png'
                            alt='address-color'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressHome;
