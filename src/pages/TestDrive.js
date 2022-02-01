import React, {useRef} from 'react';
import Footer from "../components/Footer/Footer";
import Container from "../components/Container";
import HeaderCustom from "../components/Header/HeaderCustom";
import TestDriveMain from "../components/TestDrive/TestDriveMain";
import TestDrivePreporations from "../components/TestDrive/TestDrivePreporations/TestDrivePreporations";
import BackgroundWrapper from "../components/BackgroundWrapper";
import TestDriveSlider from "../components/TestDrive/TestDriveSlider";
import TestDriveSwitch from "../components/TestDrive/TestDriveSwitch";
import TestDriveWork from "../components/TestDrive/TestDriveWork";
import TestDriveResult from "../components/TestDrive/TestDriveResult";
import AnyForm from "../components/AnyForm";
import AnyAddress from "../components/AnyAddress/AnyAddress";

const TestDrive = () => {

    const showRoomsRef = useRef();


    return (
        <>
            <HeaderCustom
                wrapper='background-testdrive'
                customContainer='testdrive-container'
            >
                <TestDriveMain/>
            </HeaderCustom>
            <main>
                <Container>
                    <TestDrivePreporations/>
                </Container>
                <BackgroundWrapper wrapper='background-testdrive-slider'>
                    <TestDriveSlider/>
                </BackgroundWrapper>
                <Container>
                    <TestDriveSwitch active={1} showRoomsRef={showRoomsRef}/>
                    <AnyAddress home content={3} page='testdrive1'/>
                    <TestDriveWork/>
                    <TestDriveResult/>
                    <AnyForm
                        title={<>Записаться<span className='form-any__br768'/> на домашний тест-драйв</>}
                        reverse
                        background='home'
                    />
                    {/*<TestDriveSwitch active={2}/>*/}
                    <AnyAddress
                        ref={showRoomsRef}
                        modification='testdrive'
                        shop
                        content={2}
                        leftTitle={<>Тест-драйв <br/>в шоурумах</>}
                    />
                    <AnyForm
                        title={<>Записаться<span className='form-any__br375'/> на тест-драйв в шоурумах</>}
                        reverse
                        background='showrooms'
                    />
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default TestDrive;
