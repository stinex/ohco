import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import FormData from "../../FormData";

const HomeDreams = () => {
    return (
        <section className='home-dreams'>
            <BackgroundWrapper wrapper='background-home-dreams'>
                <div className='home-dreams__wrapper'>
                    <h1 className='home-dreams__title'>
                        <span className='main-color'>OHCO M.8</span> <br/>
                            Время воплотить мечту
                    </h1>
                    <FormData customStyles='home-dreams'/>
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeDreams;
