import React from 'react';

const AboutDesigner = () => {
    return (
        <section className="designer">
            <div className='designer__wrapper'>
                <div className='designer__photo'>
                    <img
                        src='/image/About/Ken-Okuyama-DesignIMG.jpg'
                        alt='designer'
                    />
                </div>
                <div className='designer__text'>
                    <h2 className="designer__name">Кен Окуяма</h2>
                    <h4 className="designer__position">Ведущий дизайнер</h4>
                    <p className="designer__about">
                        Поезда для которых он создавал дизайн, движутся <br/>
                        со скоростью 320 км/ч. Был автором дизайна самого
                        эксклюзивного <span className='main-color'>Ferrari</span>.
                    </p>
                    <p className="designer__about">
                        Но именно в тишине Кен находит обновление, заводя свою
                        коллекцию часов и размышляя <span className='designer__br768'/>о красоте, найденной <br/>
                        во вневременном дизайне. Пока угловатая элегантность&nbsp;
                        <span className='main-color designer__br'> M-серии</span> приходит в движение, творение Кена приносит
                        безмятежность в центре подвижной инженерии.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutDesigner;
