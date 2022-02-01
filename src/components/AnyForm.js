import React from 'react';
import TextFieldUI from "../UI/components/TextFieldUI";
import CheckboxUI from "../UI/components/CheckboxUI";
import ButtonFillUI from "../UI/components/ButtonFillUI";
import AnyFormData from "./AnyFormData";

const AnyForm = ({title, subtitle, reverse, background}) => {
    return (
        <section className={`form-any`}>
            <div className={`form-any__background form-any__background--${background}`}>
                <div className='form-any__mobile-img'>
                    <img
                        src='/image/AnyPage/Form/form-chair-600.png'
                        alt='mobile-form-img'
                    />
                    <div className='form-any__blur'/>
                </div>
                <div className={`form-any__text ${reverse ? 'form-any__text--revers' : ''}`}>
                    <h2 className={`form-any__title ${subtitle ? '' : 'form-any__title--solo'}`}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className='form-any__subtitle'>
                            {subtitle}
                        </p>
                    )}
                    <AnyFormData/>
                </div>
            </div>
        </section>
    );
};

export default AnyForm;
