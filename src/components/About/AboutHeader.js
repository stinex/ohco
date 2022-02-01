import React from 'react';

const AboutHeader = () => {
    return (
        <section className='about'>
            <div className='about__wrapper'>
                <div className='about__text'>
                    <h1 className='about__title'>О компании</h1>
                    <p className='about__subtitle'>
                        Наша компания является официальным дилером
                        японского бренда OHCO - создателя самых роскошных
                        и технологичных в мире кресел для массажа всего тела.
                    </p>
                    <p className='about__subtitle'>
                        Тщательно продуманные массажные кресла
                        представляют собой пересечение вечных традиций,
                        современного японского инжиниринга<span className='about__br'/> и таланта
                        мирового уровня.
                    </p>
                </div>
                <div className='about__img'>
                    <img
                        src='/image/About/header-chair.png'
                        alt='about-chair'
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHeader;
