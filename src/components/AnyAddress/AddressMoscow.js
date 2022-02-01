import React from 'react';
import ShowRoomsCallIcon from "../../UI/icon/ShowRooms/ShowRoomsCallIcon";
import {useMediaQuery} from "@mui/material";
import AddressImpressions from "./AddressImpressions";

const AddressMoscow = () => {

    const matchesTablet = useMediaQuery('(max-width: 1024px)');
    const matchesMobile = useMediaQuery('(max-width: 600px)');

    const content = matchesMobile ? 1 : matchesTablet ? 0 : 1

    return (
        <>
            {content ? (
                <div className='any-address__right any-address__right--showrooms'>
                    <h4 className='any-address__title'>
                        Наши шоурумы<br/> в Москве
                    </h4>
                    <div className='any-address__info'>
                        <div className='any-address__text'>
                            <div className='any-address__building'>
                                ул.Новосущевская, д.15 (этаж 1)
                            </div>
                            <p className='any-address__time'>
                                Пн-Пт: с 10:00 до 20:00, <br/>
                                Сб-Вс: с 10:00 до 19:00
                            </p>
                        </div>
                        <div className='any-address__text'>
                            <div className='any-address__building'>
                                ТРЦ МЕГА Белая Дача, Салон ERGONOVA
                            </div>
                            <div className='any-address__address'>
                                Метро Кузьминки | г. Котельники, <br/>
                                1-й Покровский пр-д, 5 напротив кассовой зоны ИКЕА
                            </div>
                            <p className='any-address__time'>
                                вс–чт с 10 до 23; <br/>
                                пт–сб с 10 до 00
                            </p>
                        </div>
                        <div>
                            <div className='any-address__contact'>Контактный телефон:</div>
                            <div className='any-address__contact-phone'>
                                <div className='any-address__call'>
                                    <ShowRoomsCallIcon/>
                                </div>
                                <a href='tel:88007001429'>8 (800) 700-14-29</a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <AddressImpressions/>}
        </>
    );
};

export default AddressMoscow;
