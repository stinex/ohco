import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";
import {homeTechnologyArr} from "../../../lib/constants/constants";
import HomeTechnologyItem from "./HomeTechnologyItem";

const HomeTechnology = ({content = 1}) => {
    return (
        <section className='home-technology'>
            {homeTechnologyArr.map((item, index) => {

                // if (content !== index + 1) return null

                return (
                    <BackgroundWrapper
                        key={item.src}
                        wrapper={`background-home-technology background-home-technology--${index + 1}`}
                    >
                        <HomeTechnologyItem
                            key={item.src}
                            title={item.title}
                            subtitle={item.subtitle}
                            src={item.src}
                            section={index + 1}
                        />
                    </BackgroundWrapper>
                )
            })}
        </section>
    );
};

export default HomeTechnology;
