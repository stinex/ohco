import React from 'react';
import DeliveryItem from "./DeliveryItem";
import DeliveryAutoIcon from "../../UI/icon/Delivery/DeliveryAutoIcon";
import DeliveryCallIcon from "../../UI/icon/Delivery/DeliveryCallIcon";
import DeliveryHomeIcon from "../../UI/icon/Delivery/DeliveryHomeIcon";
import DeliverySettingsIcon from "../../UI/icon/Delivery/DeliverySettingsIcon";

const DeliveryText = () => {
    return (
        <div className='delivery__text'>
            <h1 className='delivery__title'>
                Бесплатная <span className='delivery__br'/>
                доставка по РФ
            </h1>
            <DeliveryItem
                number={1}
                icon={DeliveryAutoIcon}
                title='Собственная служба логистики'
            />
            <DeliveryItem
                number={2}
                icon={DeliveryCallIcon}
                title={<>Обязательный звонок курьера за час <br/>до доставки товара</>}
            />
            <DeliveryItem
                number={3}
                icon={DeliveryHomeIcon}
                title='Доставка кресла до указанного вами места в квартире или офисе независимо от этажа'
            />
            <DeliveryItem
                number={4}
                icon={DeliverySettingsIcon}
                title={<>Распаковка и демонстрация товара <br/>в действии</>}
            />
        </div>
    );
};

export default DeliveryText;
