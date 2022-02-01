import React, {useState} from 'react';
import BackgroundWrapper from "../BackgroundWrapper";
import ButtonOutlinedUI from "../../UI/components/ButtonOutlinedUI";
import {useMediaQuery} from "@material-ui/core";
import DialogUI from "../../UI/components/DialogUI";

const HomeSpace = () => {

    const media920 = useMediaQuery('(max-width: 920px');
    const media600 = useMediaQuery('(max-width: 600px');
    const [open, setOpen] = useState(false);

    const buttonText = media600 ? 'Получить предложение' : media920 ? 'Получить предложение' : 'Заказать OHCO M.8'

    return (
        <section className='home-space'>
            <BackgroundWrapper wrapper='background-home-white'>
                <div className='home-space__wrapper'>
                    <div className='home-space__shadow'/>
                    <div className='home-space__content'>
                        <h4 className='home-space__title'>
                            <span className='main-color'>Космические</span><br/>
                            ощущения
                        </h4>
                        <div className='home-space__about'>
                            <p className='home-space__subtitle'>
                                Прямо во время массажа кресло<span className='home-space__br375'/> на некоторое <br/>
                                время перемещает вас <span className='home-space__br768'/><span className='home-space__br375'/>в положение <span className='main-color'>«нулевой <br/>
                            гравитации»,</span> когда ноги поднимаются чуть <br/>
                                выше уровня груди.
                            </p>
                            <p className='home-space__subtitle'>
                                В этом положении улучшается <br/>
                                кровообращение, выполняется растяжка <br/>
                                всего тела, а сам массаж становится <br/>
                                ещё приятнее и эффективнее
                            </p>
                        </div>
                        <div className='home-space__button'>
                            <ButtonOutlinedUI onClick={() => setOpen(true)} customHeight customPadding>
                                {buttonText}
                            </ButtonOutlinedUI>
                        </div>
                    </div>
                </div>
                <DialogUI
                    state={{open, setOpen}}
                    title={(
                        <>
                            Заказать <span className='main-color'>OHCO M.8</span>
                        </>
                    )}
                    subtitle={
                        <>
                            Оставьте свои данные для связи.<br/>
                            Наши менеджеры решат все ваши вопросы.
                        </>
                    }
                />
            </BackgroundWrapper>
        </section>
    );
};

export default HomeSpace;
