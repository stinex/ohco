import React from 'react';
import DeliverySettingsIcon from "../../UI/icon/Delivery/DeliverySettingsIcon";
import CalendarIcon from "../../UI/icon/CalendarIcon";
import DeliveryAutoIcon from "../../UI/icon/Delivery/DeliveryAutoIcon";
import DeliveryHomeIcon from "../../UI/icon/Delivery/DeliveryHomeIcon";

const TestDriveAddressText = () => {
    return (
        <>
            <p className='address__td-subtitle'>
                Мы запустили выездной тест-драйв, чтобы <br/>
                сделать<span className='address__br768'/> еще один шаг навстречу нашим клиентам.<span className='address__br768'/> <br/>
                Это позволяет «увидеть, прочуствовать и испытать <span className='address__br768'/><br/>
                массаж» в комфортной обстановке.
            </p>
            <ul className='address__td-list'>
                <li className='address__td-item'>
                    <div><DeliverySettingsIcon/></div>
                    <span>Бесплатная сборка и демонстрация работы</span>
                </li>
                <li className='address__td-item'>
                    <div><DeliveryAutoIcon/></div>
                    <span>Бесплатно доставим в любую точку РФ</span>
                </li>
                <li className='address__td-item'>
                    <div><DeliveryHomeIcon/></div>
                    <span>Попробуйте не выходя из дома</span>
                </li>
                <li className='address__td-item'>
                    <div><CalendarIcon/></div>
                    <span>Выбирайте удобные дату и время</span>
                </li>
            </ul>
        </>
    );
};

export default TestDriveAddressText;
