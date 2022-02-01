import React, {useState} from 'react';
import ButtonFillUI from "../../UI/components/ButtonFillUI";
import {useMediaQuery} from "@mui/material";
import BackgroundWrapper from "../BackgroundWrapper";
import DialogUI from "../../UI/components/DialogUI";

const HomeMassage = () => {


    const media1024 = useMediaQuery('(max-width: 1024px)')
        ? 'home-massage768' : 'home-massage'

    const media600 = useMediaQuery('(max-width: 600px)')

    const [open, setOpen] = useState(false);
    const handleSetOpen = () => setOpen(true)

    return (
        <BackgroundWrapper
            wrapper='background-home-massage'
            customContainer='home-massage-container'
        >
            <section className='home-massage'>
                {/* Только мобилки*/}
                {media600 && (
                    <div className='home-massage__mobile'>
                        <p className='home-massage__subtitle'>
                            Усовершенствованные алгоритмы массажа <br/>
                            имитируют руки профессионального <br/>
                            массажиста, точно управляя широким <br/>
                            диапазоном скоростей массажа, от быстрых <br/>
                            движений до ультрамедленных
                        </p>
                        <div className='home-massage__button'>
                            <ButtonFillUI onClick={handleSetOpen}>
                                Записаться на тест-драйв
                            </ButtonFillUI>
                        </div>
                    </div>
                )}
                <div className="home-massage__img">
                    <img
                        src={`/image/Home/${media1024}.png`}
                        alt='home-massage'
                    />
                </div>
                <div className="home-massage__text">
                    <h2 className="home-massage__title">
                   <span className='main-color'>
                       Наконец-то <br/>
                       достойная<span className='home-massage__br1024'/> замена&nbsp;
                   </span><br/>
                        ручному массажу
                    </h2>
                    {!media600 && (
                        <div className='home-massage__desktop'>
                            <p className='home-massage__subtitle'>
                                Усовершенствованные алгоритмы массажа<br/>
                                имитируют руки профессионального<br/>
                                массажиста, точно управляя широким<br/>
                                диапазоном скоростей массажа, от быстрых<br/>
                                движений до ультрамедленных
                            </p>
                            <div className='home-massage__button'>
                                <ButtonFillUI onClick={handleSetOpen}>
                                    Заказать тест-драйв на дому
                                </ButtonFillUI>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <DialogUI
                state={{open, setOpen}}
                title='Заказать звонок'
                subtitle={
                    <>
                        Свяжемся с вами в течение 15 минут. <br/>
                        Наш менеджер ответит на все ваши вопросы.
                    </>
                }
            />
        </BackgroundWrapper>
    );
};

export default HomeMassage;
