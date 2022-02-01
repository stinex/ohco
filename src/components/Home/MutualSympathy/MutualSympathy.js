import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import MutualSympathyItem from "./MutualSympathyItem";
import Scroll from "../../Scroll";
import ScrollContent from "../../ScrollContent";

const MutualSympathy = () => {

    const sympathyArr = [
        {id: 6, title: 'Взаимная симпатия', subtitle: 'с первого взгяда', src: 'sympathy-chair-1'},
        {id: 7, title: 'Взаимная симпатия', subtitle: 'с первого взгяда', src: 'sympathy-chair-2'},
        {id: 8, title: 'Взаимная симпатия', subtitle: 'с первого взгяда', src: 'sympathy-chair-3'},
    ]

    return (
        <>
            <BackgroundWrapper
                wrapper='background-home-sympathy'
                customContainer='more-container'>
                <Scroll contentBlocks={3} start={6} end={9}>
                    <ScrollContent
                        arr={sympathyArr}
                        component={MutualSympathyItem}
                    />
                </Scroll>
            </BackgroundWrapper>
        </>
    );
};

export default MutualSympathy;
