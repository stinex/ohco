import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";

const HomeDesigner = () => {
    return (
        <section className='home-designer'>
            <BackgroundWrapper wrapper='background-home-designer'>
                <div className='home-designer__wrapper'>
                    <div className='home-designer__text'>
                        <h1 className='home-designer__title'>
                            <span className='main-color'>Изысканный дизайн</span><br/>
                            разработан Кеном Окуямой
                        </h1>
                        <div className='home-designer__role'>
                            Кен Окуяма - промышленный дизайнер высочайшего уровня
                        </div>
                        <p className='home-designer__subtitle'>
                            Именно ему мы обязаны дизайном многих спорткаров из линейки
                            <span className='main-color'> Ferrari, Porsche, Maserati, Honda и Mitsubishi.</span>
                        </p>
                        <p className='home-designer__subtitle home-designer__subtitle--last'>
                            Дизайн кресла <span className='main-color'>OHCO M.8</span>, как и все работы Кена, динамичный <br/>
                            и одновременно наполненный внутренней силой и спокойствием. <br/>
                            Каждая линия и каждый изгиб кресла созданы, <br/>
                            чтобы подарить своему владельцу атмосферу релакса.
                        </p>
                    </div>
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeDesigner;
