import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import HomeFeaturesItem from "./HomeFeaturesItem";
import {homeFeaturesArr} from "../../../lib/constants/constants";

const HomeFeatures = ({content = 1}) => {



    return (
        <section className='home-features'>
                {homeFeaturesArr.map((item, index) => {

                    // if (content !== index + 1) return null

                    return (
                        <BackgroundWrapper key={index + 1} wrapper='background-home-features'>
                            <HomeFeaturesItem
                                data={item}
                                item={index + 1}
                            />
                        </BackgroundWrapper>
                    )
                })}
        </section>
    );
};

export default HomeFeatures;
