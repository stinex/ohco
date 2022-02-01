import React from 'react';
import HomeAdvantageItem from "./HomeAdvantageItem";
import {homeAdvantage} from "../../../lib/constants/constants";


const HomeAdvantage = () => {
    return (
        <section className='home-advantage'>
            {homeAdvantage.map((props, index) => {
                return (
                    <HomeAdvantageItem
                        key={index + 1}
                        item={index + 1}
                        {...props}
                    />
                )
            })}
        </section>
    );
};

export default HomeAdvantage;
