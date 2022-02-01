import React from 'react';
import {useMediaQuery} from "@mui/material";
import FormData from "./FormData";

const AboutAndTestingForm = ({title, subtitle}) => {


    const media860 = useMediaQuery('(max-width: 860px)');
    const media600 = useMediaQuery('(max-width: 600px)');
    console.log(media600);
    const srcImage =  media600 ? "/image/AnyPage/Form/form-chair-600.png" : media860 ? "/image/AnyPage/Form/form-chair-860.png" : "/image/AnyPage/Form/form-chair.png"

    return (
        <section className='form'>
            <div className='form__wrapper'>
                <div className='form__info'>
                    <h4 className='form__title'>{title}</h4>
                    {subtitle && (
                        <p className='form__subtitle'>{subtitle}</p>
                    )}
                    <FormData/>
                </div>
                <div className='form__img'>
                    <img src={srcImage}/>
                    {/*<img src={srcImage}/>*/}
                    <div className='form__blur'/>
                </div>
            </div>
        </section>
    );
};

export default AboutAndTestingForm;
