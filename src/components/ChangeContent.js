import React, {useEffect, useRef, useState} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const ChangeContent = ({trigger, endTrigger, children, handleChange, elements = 1, start= 'center center'}) => {

    const ref = useRef();
    const [content, setContent] = useState(1)

    useEffect(() => {
        const fullHeight = ref.current?.offsetHeight
        if (fullHeight && trigger && endTrigger && elements) {
            setTimeout(() => {
                gsap.registerPlugin(ScrollTrigger);

                const topTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: `.${trigger}`,
                        endTrigger: 'bottom center',
                        start: start,
                        end: `+=${elements >= 7 ? '2000': fullHeight}`,
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                        onUpdate: ({progress}) => handleChange(Math.floor(progress * 100), content, setContent)
                    }
                });

                topTl.from('.home-features__item', {y: fullHeight * 1, rotate: 360})

            }, 500)
        }
    } , [trigger, endTrigger, elements])


    return (
        <div className={trigger} ref={ref}>
            {React.cloneElement(children, {content})}
        </div>
    );
};

export default ChangeContent;
