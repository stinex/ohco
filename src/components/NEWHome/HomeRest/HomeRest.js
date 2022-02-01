import React from 'react';
import HomeRestItem from "./HomeRestItem";
import Container from "../../Container";

const HomeRest = ({content}) => {

    const rotate = {
        transform: `rotate(${(content - 1) * 90}deg)`
    }

    return (
        <Container>
            <section className='home-rest'>
                <HomeRestItem
                    contentIndex={content}
                />
                <div className='home-rest__track'>
                    <img
                        style={rotate}
                        src='/image/Home/HomeRest/home-track.png'
                        alt='scroll-progress'
                    />
                </div>
            </section>
        </Container>
    );
};

export default HomeRest;
