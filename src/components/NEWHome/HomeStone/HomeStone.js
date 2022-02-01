import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import HomeStoneTooltip from "./HomeStoneTooltip";
import {tooltipsArr} from "../../../lib/constants/constants";
import {useMediaQuery} from "@mui/material";


const text = () => (
    <>
        <p className='home-stone__subtitle'>
            Инфракрасные нагреватели расположены <br/>
            прямо на массажных роликах и точечно <br/>
            воздействуют на тело, создавая эффект <br/>
            горячих камней.
        </p>
        <p className='home-stone__subtitle'>
            Нагрев ступней, ладоней, спины повышает <br/>
            уровень расслабления и комфорта.Каждую <br/>
            зону нагрева можно контролировать <br/>
            отдельно.
        </p>
    </>
)


const HomeStone = () => {

    const media1024 = useMediaQuery('(max-width: 1024px)');

    return (
        <section className='home-stone'>
            <BackgroundWrapper wrapper='background-home-massage'>
                <div className='home-stone__wrapper'>
                    <div className='home-stone__text'>
                        <div className='home-stone__title'>
                            Эффект <span className='main-color'>горячих<br/> камней</span>
                        </div>
                        {!media1024 && text()}
                    </div>
                    <div className='home-stone__img-wrapper'>
                        <img
                            src='/image/Home/HomeStoneActive.png'
                            alt='home-chair-stone'
                        />
                        {tooltipsArr.map((item, index) => (
                            <HomeStoneTooltip
                                key={index + 1}
                                subtitle={item.subtitle}
                                index={index + 1}
                            />
                        ))}
                    </div>
                    {media1024 && text()}
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeStone;
