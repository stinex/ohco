import React from 'react';
import ButtonFillUI from "../UI/components/ButtonFillUI";
import {generateImageAlt} from "../lib/utils/services";

const ManualMassage = ({src, title, subtitle, button}) => {

    return (
        <section className='massage'>
            <div className='massage__img'>
                <img
                    src={src}
                    alt={generateImageAlt(src)}
                />
            </div>
            <div className='massage__text'>
                <h3 className='massage__title'>{title}</h3>
                <p className='massage__subtitle'>{subtitle}</p>
                {button && <ButtonFillUI>Заказать тест-драйв на дому</ButtonFillUI>}
            </div>
        </section>
    );
};

export default ManualMassage;
