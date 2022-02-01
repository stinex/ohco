import React from 'react';
import DeliverySettingsIcon from "../../../UI/icon/Delivery/DeliverySettingsIcon";
import DeliveryAutoIcon from "../../../UI/icon/Delivery/DeliveryAutoIcon";
import Container from "../../Container";
import FormArrowIcon from "../../../UI/icon/FormArrowIcon";
import {useMediaQuery} from "@material-ui/core";
import HomeFormData from "./HomeFormData";


const HomeForm = () => {

    const media920 = useMediaQuery('(max-width: 920px)');
    const media710 = useMediaQuery('(max-width: 710px)')
    const src = media710 ? '/image/AnyPage/Form/form-chair-600.png' : media920 ? '/image/Home/HomeForm1024.png' : '/image/Home/HomeForm.png'

    return (
        <section className='home-form'>
            <Container>
                <div className='home-form__wrapper'>
                    <div className='home-form__send'>
                        <h3 className='home-form__title'>
                            <span className='main-color'>Запишитесь</span> <br/>
                            на тест-драйв
                        </h3>
                        {!media710 && <HomeFormData/>}
                    </div>
                    <div className='home-form__info'>
                        <div className='home-form__img'>
                            <img
                                src={src}
                                alt='three-chair'

                            />
                            <div className='home-form__blur'/>
                        </div>
                        <p className='home-form__subtitle'>
                            Мы запустили выездной тест-драйв,<span className='home-form__br768'/> чтобы сделать <br/>
                            еще один шаг навстречу<span className='home-form__br768'/> нашим клиентам. <br/>
                            Это позволяет «увидеть,<span className='home-form__br768'/> прочуствовать и испытать <br/>
                            массаж» <span className='home-form__br375'/>в<span className='home-form__br768'/> комфортной обстановке.
                        </p>
                        <div className='home-form__box'>
                            <div className='home-form__text'>
                                <div className='home-form__text-icon'>
                                    <DeliverySettingsIcon/>
                                </div>
                                <span className='home-form__text-name'>Бесплатная сборка <span className='home-form__br375'/>и демонстрация работы</span>
                            </div>
                            <div className='home-form__text'>
                                <div className='home-form__text-icon'>
                                    <DeliveryAutoIcon/>
                                </div>
                                <span className='home-form__text-name'>Бесплатно доставим <span className='home-form__br375'/>в любую точку РФ</span>
                            </div>
                        </div>
                    </div>
                    {media710 && <HomeFormData/>}
                </div>
            </Container>
        </section>
    );
};

export default HomeForm;
