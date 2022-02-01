import React, {useState} from 'react';
import ButtonFillUI from "../../UI/components/ButtonFillUI";
import DeliveryIcon from "../../UI/icon/DeliveryIcon";
import WarrantyIcon from "../../UI/icon/WarrantyIcon";
import DialogUI from "../../UI/components/DialogUI";
import HeaderCustom from "../Header/HeaderCustom";

const HomeMain = () => {

    const [open, setOpen] = useState(false)
    const handleSetOpen = () => setOpen(true)

    return (
        <HeaderCustom wrapper='background-home'>
            <section className='home-main'>
                <div className='home-main__text'>
                    <h6 className='home-main__company main-color'>OHCO M.8</h6>
                    <h2 className="home-main__title">
                        Японское <br/>
                        массажное кресло<br/>
                        <span className='home-main__1024'>от дизайнера Ferrari</span>
                    </h2>
                    <div className='home-main__button'>
                        <ButtonFillUI onClick={handleSetOpen}>
                            Записаться на бесплатный тест-драйв
                        </ButtonFillUI>
                    </div>
                    <div className='home-main__icons'>
                        <div className='home-main__item'>
                            <div className='home-main__icon'>
                                <DeliveryIcon/>
                            </div>
                            <span className='home-main__services'>
                            Бесплатная доставка<br/>
                            и сборка в любой точке РФ
                        </span>
                        </div>
                        <div className='home-main__item'>
                            <div className='home-main__icon'>
                                <WarrantyIcon/>
                            </div>
                            <span className='home-main__services'>
                            Официальная<br/>
                            гарантия 5 лет
                        </span>
                        </div>
                    </div>
                </div>
                <div className='home-main__image'>
                    <img src='/image/Home/home-main-armchair.png' alt='ohco-chair'/>
                    <div className='home-main__chair'>
                        <div className='home-main__name'>M.8 Pearl</div>
                        <div className='home-main__price'>1 100 000 ₽</div>
                    </div>
                </div>
                <div className='home-main__button home-main__button--mobile'>
                    <ButtonFillUI onClick={handleSetOpen}>
                        Записаться на<span className='home-main__free'>&nbsp;бесплатный</span> тест-драйв
                    </ButtonFillUI>
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
            </section>
        </HeaderCustom>
    );
};

export default HomeMain;
