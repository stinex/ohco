import React from 'react';
import {useMediaQuery} from "@mui/material";

const AboutGeneralDirector = () => {
    return (
        <section className='director'>
            <div className='director__img'>
                <img
                    src='/image/About/general-director.jpg'
                    alt='director-OHCO'
                />
            </div>
            <div className='director__text'>
                <p className='director__about'>
                    «Мы рады представить OHCO, элегантную торговую марку,<span className="director__br"> </span>
                    которая представит множество способов, которыми<span className="director__br"> </span>
                    мы предлагаем выдающийся дизайн, собственные инновации<span className="director__br"> </span>
                    и функции на рынке массажных кресел.
                </p>
                <p className='director__about'>
                    Мы считаем, что OHCO является примером идеального<span className="director__br"> </span>
                    баланса силы, элегантности<span className="director__br768"/> и безмятежности,<span className="director__br"> </span>
                    и мы с нетерпением ждем возможности вдохнуть жизнь<span className="director__br"> </span>
                    в этот бренд<span className="director__br768"/> и расслабиться в жизни взыскательных<span className="director__br"> </span>
                    потребителей по всему миру».
                </p>
                <div className='director__info'>
                    <h6 className='director__name'>Клифф Левин</h6>
                    <p className='director__position'>
                        Генеральный директор<br/>
                        и основатель бренда OHCO
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutGeneralDirector;
