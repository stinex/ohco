import React from 'react';
import CesLogoIcon from "../../UI/icon/CesLogoIcon";

const  AboutPresentations = () => {
    return (
        <section className="about-events">
            <div className='about-events__wrapper'>
                <div>
                    <div className='about-events__logo'>
                        <CesLogoIcon/>
                    </div>
                    <p className='about-events__text'>
                        Свою популярность компания OHCO начала набирать
                        в 2019 году на международной выставке CES,<span className='about-events__br'/>
                        где впервые презентовала преминальное массажное
                        кресло M.8 и получила международную популярность
                    </p>
                </div>
                <div>
                    <figure>
                        <div className='about-events__exhibition-img'>
                            <img src='/image/About/events-exhibition.jpg' alt='exhibition-CES'/>
                        </div>
                        <figcaption className='about-events__img-name'>
                            Ежегодная международная выставка CES
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className='about-events__wrapper'>
                <figure>
                    <div className='about-events__exhibition-img'>
                        <img src='/image/About/events-presentation.jpg' alt='presentation-OHCO'/>
                    </div>
                    <figcaption className='about-events__img-name'>
                        Презентация OHCO на CES в 2020 году
                    </figcaption>
                </figure>
                <div>
                    <p className='about-events__text'>
                        После выставки продукция OHCO хорошо
                        была востребована в Корее и набирала свою
                        популярность в Европе и сейчас пользуется
                        широким спросом во всем мире
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPresentations;
