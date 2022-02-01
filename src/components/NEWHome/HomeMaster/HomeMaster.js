import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";

const HomeMaster = () => {
    return (
        <section className='home-master'>
            <BackgroundWrapper wrapper='background-home-master'>
                <div className='home-master__wrapper'>
                    <div className='home-master__text'>
                        <h2 className='home-master__title'>
                        <span className='main-color'>
                            Доверьтесь
                        </span><br/>
                            мастеру Шиацу
                        </h2>
                        <div className='home-master__role'>
                           <span className='home-master__inp'>Сенсей Окабаяси</span> - известный мастер массажа шиацу
                        </div>
                        <p className='home-master__subtitle'>
                            Под его руководством, инженеры создали неповторимый ансамбль
                            прикосновений, приводящий к гармонии ваш организм.
                        </p>
                        <p className='home-master__subtitle home-master__subtitle--last'>
                            Не произнося ни единого слова клиенту, он может распознать его эмоции,
                            почувствовать<span className='home-master__br768'/> напряженность мышц и только потом, постепенно, начать приводить
                            все тело в состояние гармонии. Именно эту интуицию сэнсэй Окабаяси привнес<span className='home-master__br768'/> в
                            симфонию движения в массажном кресле<span className='home-master__br768'/> <span className='main-color'>OHCO M.8 .</span>
                        </p>
                    </div>
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeMaster;
