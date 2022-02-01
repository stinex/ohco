import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import HomeDeliveryItem from "./HomeDeliveryItem";
import OffButtonIcon from "../../../UI/icon/OffButtonIcon";
import SettingsIcon from "../../../UI/icon/SettingsIcon";
import BoxIcon from "../../../UI/icon/BoxIcon";

const HomeDelivery = () => {
    return (
        <section className='home-delivery'>
            <BackgroundWrapper wrapper='background-home-black'>
                <div className='home-delivery__wrapper'>
                    <h4 className='home-delivery__title'>
                        Бесплатная доставка и сборка<br/>
                        в любой точке России
                    </h4>
                    <div className='home-delivery__flex'>
                        <HomeDeliveryItem
                            title='Первый запуск'
                            subtitle={(
                                <>
                                    Первый запуск выполняется в присутствии <br/>
                                    нашего менеджера, который приедет <br/>
                                    для этого в любую точку РФ
                                </>
                            )}
                            icon={OffButtonIcon}
                        />
                        <HomeDeliveryItem
                            title='Сборка и установка'
                            subtitle={(
                                <>
                                    Сборка и настройка выполняется нашими <br/>
                                    авторизованными специалистами <br/>
                                    с опытом работы не менее 5 лет
                                </>
                            )}
                            icon={SettingsIcon}
                        />
                        <HomeDeliveryItem
                            title='Доставка в любую точку РФ'
                            subtitle={(
                                <>
                                    Доставка кресла выполняется до места <br/> непосредственной установки – <br/> город, улица, дом, комната
                                </>
                            )}
                            icon={BoxIcon}
                        />
                    </div>
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeDelivery;
