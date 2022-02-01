import React, {useState} from 'react';
import ButtonFillUI from "../../UI/components/ButtonFillUI";
// import  {Parallax, ParallaxLayer} from '@react-spring/parallax'
import BackgroundWrapper from "../BackgroundWrapper";
import {Background, Parallax} from 'react-parallax'
import Container from "../Container";
import {useMediaQuery} from "@mui/material";
import DialogUI from "../../UI/components/DialogUI";

const HomeParallax = () => {

    const [open, setOpen] = useState(false);

    const media768 = useMediaQuery('(max-width: 1024px)');
    const media500 = useMediaQuery('(max-width: 500px)');
    const media600 = useMediaQuery('(max-width: 600px)')
    const bgSrc = media500 ? "/image/Home/HomeParallax/HomeParallax375.png" : media768 ? "/image/Home/HomeParallax/HomeParallax768.jpg" : "/image/Home/HomeParallax/HomeParallax.jpg"
    const leaflet = media500 ? "/image/Home/HomeParallax/Leaflet1-375.jpg" :  media768 ? "/image/Home/HomeParallax/Leaflet1-768.jpg" : "/image/Home/HomeParallax/Leaflet1.jpg"
    const leaflet2 = media500 ? "/image/Home/HomeParallax/Leaflet2-375.jpg" :  media768 ? "/image/Home/HomeParallax/Leaflet2-768.jpg" : "/image/Home/HomeParallax/Leaflet2.jpg"

    return (
        <>
            <Parallax
                bgImage={bgSrc}
                bgImageAlt="chair"
                bgClassName='home-parallax__main'
                strength={media600 ? 20 :  media768 ? 90 : 300}
            >
                <section className='home-parallax'>
                    <Container>
                        <div className='home-parallax__text'>
                            <h4 className='home-parallax__title'>Ароматерапия</h4>
                            <p className='home-parallax__subtitle'>
                                Добавьте капельку масла в диффузор <br/>
                                подголовника, чтобы он начал <br/>
                                источать аромат
                            </p>
                            <div className='home-parallax__button'>
                                <ButtonFillUI onClick={() => setOpen(true)}>
                                    Хочу протестировать
                                </ButtonFillUI>
                            </div>
                        </div>
                        <div className='home-parallax__images'>
                            <Parallax strength={500} bgClassName='home-parallax__leaflet-1'>
                                <Background className='home-parallax__leaflet-1'>
                                    <img src={leaflet} alt="fill murray" />
                                </Background>
                            </Parallax>
                            <Parallax strength={800}>
                                <Background className='home-parallax__leaflet-2'>
                                    <img src={leaflet2} alt="fill murray" />
                                </Background>
                            </Parallax>
                        </div>
                    </Container>
                </section>
            </Parallax>
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
        </>
    )
};

export default HomeParallax;
