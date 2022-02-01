import React from 'react';
import HomeSympathyItem from "./HomeSympathyItem";
import BackgroundWrapper from "../../BackgroundWrapper";


const HomeSympathy = ({content}) => {
    return (
        <BackgroundWrapper
            wrapper='background-home-sympathy'
            customContainer='home-sympathy-container'
        >
            <section className='home-sympathy'>
                <HomeSympathyItem content={content}/>
            </section>
        </BackgroundWrapper>
    );
};

export default HomeSympathy;
