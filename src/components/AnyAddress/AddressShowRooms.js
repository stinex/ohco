import React from 'react';
import ShopIcon from "../../UI/icon/ShowRooms/ShopIcon";
import {useMediaQuery} from "@material-ui/core";

const AddressShowRooms = ({propsTitle}) => {

    const mediaTablet = useMediaQuery('(max-width: 1024px)')
    const title = mediaTablet ? 'Тест-драйв в шоурумах' : propsTitle

    return (
        <div className='any-address__left any-address__left--shop'>
            <h4 className='any-address__title any-address__title--shop'>
                {title}
            </h4>
            <div className='any-address__img'>
                <div className='any-address__icon-shop'>
                    <ShopIcon/>
                    <div className='any-address__color'>
                        <img
                            src='/image/AnyPage/black.png'
                            alt='address-color'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressShowRooms;
