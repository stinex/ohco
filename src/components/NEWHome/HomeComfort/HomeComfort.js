import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import HomeComfortItem from "./HomeComfortItem";
import {useMediaQuery} from "@mui/material";

const propsBigItem = {
    name: 'Аудиопогружение',
    desc: <>Подключив смартфон с помощью Bluetooth, <br/> вы можете наслаждаться вашей любимой музыкой</>,
    dopName: 'Ионизатор воздуха',
    dopDesc: 'Очищает воздух от мелких частиц, ионизирует и направляет к вам с помощью небольшого вентилятора в подголовнике',
    content: 1,
    important: true
}

const propsSmollItems = [
    {
        name: 'Встроенный USB порт',
        desc: <>С помощью USB порта вы можете<br/> подзарядить ваше устройство,<span className='home-comfort__br375'/> пока<br/> кресло OHCO M.8 делает вам массаж</>,
        content: 2
    },
    {
        name: 'Функция Link massage',
        desc: <>Объединяйте две программы в одну последовательность<span className='home-comfort__br375'/> и наслаждайтесь массажем ещё дольше</>,
        content: 3
    },

]


const HomeComfort = () => {

    const media600 = useMediaQuery('(max-width: 600px)');

    return (
        <section className='background-home-black'>
            <BackgroundWrapper wrapper='b'>
                <div className='home-comfort__wrapper'>
                    <div className='home-comfort__title'>
                        {!media600 ? (
                            <>
                                <span className='main-color'>Бескомпромиссный</span> <br/>
                                комфорт и удовольствие
                            </>
                        ) : (
                            <>
                                <span className="main-color">Продумано</span> <br/>
                                до мелочей
                            </>
                        )}
                    </div>
                    <HomeComfortItem{...propsBigItem}/>
                    <div className='home-comfort__item-flex'>
                        <HomeComfortItem{...propsSmollItems[0]}/>
                        <HomeComfortItem{...propsSmollItems[1]}/>
                    </div>
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeComfort;
