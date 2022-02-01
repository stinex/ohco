import React from 'react';
import SettingsIcon from "../../UI/icon/SettingsIcon";
import DeliveryAutoIcon from "../../UI/icon/Delivery/DeliveryAutoIcon";
import HomeIcon from "../../UI/icon/HomeIcon";
import CalendarIcon from "../../UI/icon/CalendarIcon";
import HomeDelivery from "../NEWHome/HomeDelivery/HomeDelivery";
import AddressHomeWrapper from "../Address/AddressHomeWrapper";
import DeliverySettingsIcon from "../../UI/icon/Delivery/DeliverySettingsIcon";
import DeliveryHomeIcon from "../../UI/icon/Delivery/DeliveryHomeIcon";

const AddressNewFormat = () => {
    return (
        <div className='any-address__right any-address__right--format'>
            <h4 className='any-address__title'>
                Новый формат
            </h4>
            <p className='any-address__format-sub'>
                Мы запустили выездной тест-драйв, чтобы
                сделать еще один шаг навстречу нашим клиентам. <br/>
                Это позволяет «увидеть, прочуствовать и испытать <br/>
                массаж» в комфортной обстановке.
            </p>
            <div className='any-address__format-wrapper'>
                <div className='any-address__item'>
                    <div className='any-address__format-icon any-address__format-icon--1'>
                         <DeliverySettingsIcon/>
                    </div>
                    <span>Бесплатная сборка <span className='any-address__br375'/>и демонстрация работы</span>
                </div>
                <div className='any-address__item'>
                    <div className='any-address__format-icon any-address__format-icon--2'>
                        <DeliveryAutoIcon/>
                    </div>
                    <span>Бесплатно доставим <span className='any-address__br375'/>в любую точку РФ</span>
                </div>
                <div className='any-address__item'>
                    <div className='any-address__format-icon any-address__format-icon--3'>
                        <DeliveryHomeIcon/>
                    </div>
                    <span>Попробуйте не выходя из дома</span>
                </div>
                <div className='any-address__item'>
                    <div className='any-address__format-icon any-address__format-icon--4'>
                        <CalendarIcon/>
                    </div>
                    <span>Выбирайте удобные <span className='any-address__br375'/>дату и время</span>
                </div>
            </div>
        </div>
    );
};

export default AddressNewFormat;
