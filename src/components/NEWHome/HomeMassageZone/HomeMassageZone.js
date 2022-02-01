import React, {useState} from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import ButtonOutlinedUI from "../../../UI/components/ButtonOutlinedUI";
import {homeMassageArr} from "../../../lib/constants/constants";
import {useMediaQuery} from "@mui/material";
import DialogUI from "../../../UI/components/DialogUI";

const HomeMassageZone = () => {
    const [open, setOpen] = useState(false)
    const media1500 = useMediaQuery('(max-width: 1700px)');
    const src = media1500 ? '/image/Home/home-massagezone.png' :  '/image/Home/home-massagezonetwo.png'

    return (
        <section className='home-massagezone'>
            <BackgroundWrapper wrapper='background-massagezone'>
                <div className='home-massagezone__wrapper'>
                    <div className="home-massagezone__text">
                        <h2 className='home-massagezone__title'>
                            <span className='main-color'>
                                OHCO М.8
                            </span> <br/>
                            массирует каждую зону
                        </h2>
                        <div className="home-massagezone__subtitle">
                            с учётом вашего состояния и положения тела
                        </div>
                        <div className='home-massagezone__desc'>
                            <ul className='home-massagezone__list'>
                                {homeMassageArr.map((item, index) => (
                                    <li key={index + 1} className={`home-massagezone__item home-massagezone__item--${index + 1}`}>
                                        <div className='home-massagezone__item-text'>
                                            {item.title}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className='home-massagezone__button'>
                                <ButtonOutlinedUI onClick={() => setOpen(!open)} customPadding customHeight>
                                    Все характеристики
                                </ButtonOutlinedUI>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-massagezone__img'>
                    <img
                        src={src}
                        alt='home-massage-zone-img'
                    />
                </div>
            </BackgroundWrapper>
            <DialogUI
              state={{open, setOpen}}
              massageZone={true}
            />
        </section>
    );
};

export default HomeMassageZone;
