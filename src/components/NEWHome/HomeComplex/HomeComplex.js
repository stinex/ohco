import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import HomeComplexItem from "./HomeComplexItem";
import {homeComplexArr} from "../../../lib/constants/constants";

const HomeComplex = ({content = 1}) => {
    return (
        <section className='home-complex'>
            <BackgroundWrapper wrapper='background-home-white'>
                <div className='home-complex__wrapper'>
                    <h3 className='home-complex__title'>
                        Комплексный массаж <br/>
                        <span className='main-color'>
                        для различных зон
                    </span>
                    </h3>
                    {homeComplexArr.map((item, index) => {
                        // if (content !== index + 1) return  null
                        return (
                            <HomeComplexItem
                                key={item.number}
                                {...item}
                            />
                        )
                    })}
                </div>
            </BackgroundWrapper>
        </section>
    );
};

export default HomeComplex;
