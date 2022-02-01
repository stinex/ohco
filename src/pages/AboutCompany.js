import React from 'react';
import Header from "../components/Header/Header";
import AboutHeader from "../components/About/AboutHeader";
import Container from "../components/Container";
import AboutGeneralDirector from "../components/About/AboutGeneralDirector";
import AboutDesigner from "../components/About/AboutDesigner";
import AboutPresentations from "../components/About/AboutPresentations";
import AboutAndTestingForm from "../components/AboutAndTestingForm";
import Footer from "../components/Footer/Footer";
import AboutMedia600 from "../components/About/AboutMedia600";
import {useMediaQuery} from "@mui/material";
import HeaderCustom from "../components/Header/HeaderCustom";
import AnyForm from "../components/AnyForm";

const AboutCompany = () => {

    const media600 = useMediaQuery('(max-width: 700px)')

    return (
        <>
            <HeaderCustom wrapper='background-about' customContainer='more-container'>
                <AboutHeader/>
            </HeaderCustom>
            <main>
                <Container>
                    {media600 && <AboutMedia600/>}
                    <AboutGeneralDirector/>
                    <AboutDesigner/>
                    <AboutPresentations/>
                    <AnyForm
                        background='about'
                        title='Остались вопросы?'
                        subtitle='Наши специалисты свяжутся с вами в ближайшее время'
                    />
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default AboutCompany;
