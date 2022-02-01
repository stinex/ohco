import React from 'react';
import ShowRoomsCallIcon from "../../UI/icon/ShowRooms/ShowRoomsCallIcon";

const ShowRoomsAddressInfo = () => {
    return (
        <div className='address__info'>
            <div className='address__item'>
                <h6 className='address__name'>
                    ул.Новосущевская, д.15 (этаж 1)
                </h6>
                <p className='address__time'>
                    Пн-Пт: с 10:00 до 20:00, <br/>
                    Сб-Вс: с 10:00 до 19:00
                </p>
            </div>
            <div className='address__item'>
                <h6 className='address__name'>
                    ТРЦ МЕГА Белая Дача, Салон ERGONOVA
                </h6>
                <p className='address__desc'>
                    Метро Кузьминки | г. Котельники, <br/>
                    1-й Покровский пр-д, 5 напротив кассовой зоны ИКЕА
                </p>
                <p className='address__time'>
                    вс–чт с 10 до 23; <br/>
                    пт–сб с 10 до 00
                </p>
            </div>
            <div className='address__contact'>
                Контактный телефон:
                <div className='address__phone'>
                    <div className='address__call-icon'>
                        <ShowRoomsCallIcon/>
                    </div>
                    <a href='tel:88007001429'>8 (800) 700-14-29</a>
                </div>
            </div>
        </div>
    );
};

export default ShowRoomsAddressInfo;
