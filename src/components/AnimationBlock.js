import React, {useEffect, useRef, useState} from 'react';
import Scroll from 'react-scroll'

const AnimationBlock = ({scrollTo, maxContent, children}) => {

    const scrollElement = useRef();
    const [content, setContent] = useState(1);
    const [animationStart, setAnimationStart] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [delay, setDelay] = useState(false);


    const scrollAndroid = (minus = 0) => {
        window.scrollTo({
            top: scrollElement.current.offsetTop - minus,
            behavior: 'smooth'
        })
    }

    const scrollIos = (minus = 0) => {
        Scroll.animateScroll.scrollTo(
            scrollElement.current.offsetTop - minus, {
            duration: 500,
            delay: 0
        })
    }

    const scroll = (minus = 0) => {
        if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
            scrollIos(minus)
        } else {
            console.log(minus)
            scrollAndroid(minus)
        }
    }

    useEffect(() => {
        if (delay) {
            setTimeout(() => {
                setDelay(false)
            }, 1000)
        }
    }, [delay])

    useEffect(() => {
        if (scrollTo && scrollElement.current) {
            const element = scrollElement.current
            const elementTop = element.offsetTop;
            const elementHeight = element.clientHeight
            const scrollTop = scrollTo.scrollTo + scrollTo.heightDevice
            const deviceHeight = scrollTo.heightDevice


            const hiddenNumber = Math.floor(elementTop + elementHeight / 2.5)


            if (scrollTop >= hiddenNumber && scrollTop < hiddenNumber + elementHeight) {
                if (content < maxContent && !delay) {
                    document.body.classList.add('body-hidden')
                    document.querySelector('html').style.overflow = 'hidden'
                    setAnimationStart(true)
                }
            }

        }
    }, [scrollTo])

    useEffect(() => {
        if (animationStart) {
            scroll()
        }
    }, [animationStart])

    const endAnimation = (duration) => {

        if (duration === 'up') {
            setDelay(true)
            scroll(window.innerHeight)
        }

        document.body.classList.remove('body-hidden')
        document.querySelector('html').style.overflowY = 'scroll'
        setAnimationStart(false)
    }


    const handleChangeContent = (e, method) => {
        if (content >= maxContent) {
            endAnimation()
            return
        }
        if (animationStart) {
            // Скролл мышкой
            if (method === 'wheel') {
                // Вверх
                if (e.deltaY > 0) {
                    setContent(content + 1)
                    scroll()
                // Вниз
                } else {
                    if (content -1) {
                        setContent(content - 1)
                        scroll()
                    } else {
                        endAnimation('up')
                    }
                }
            // Касание
            } else {
                if (method === 'start') {
                    setTouchStart(e)
                } else {
                    const start = touchStart.touches[0].pageY;
                    const end = e.changedTouches[0].pageY

                    // Вверх
                    if (start < end) {
                        if (content - 1) {
                            setContent(content - 1)
                        } else {
                            endAnimation('up')
                        }
                    }

                    // Вниз
                    if (start > end) {
                        setContent(content + 1)
                    }
                }
            }
        }
    }


    return (
        <div
            className={animationStart ? 'animation-start' : ''}
            ref={scrollElement}
            onWheel={animationStart ? (e) => handleChangeContent(e, 'wheel') : null}
            onTouchStart={animationStart ? (e) => handleChangeContent(e, 'start') : null}
            onTouchEnd={animationStart ? handleChangeContent : null}
        >
            <div className={animationStart ? 'animation-child' : ''}>
                {React.cloneElement(children, {content: content})}
            </div>
        </div>
    );
};

export default AnimationBlock;
