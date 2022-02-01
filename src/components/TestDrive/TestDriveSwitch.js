import React, {useEffect, useRef, useState} from 'react';

const TestDriveSwitch = ({showRoomsRef}) => {

    const [active, setActive] = useState(1);
    const [fixed, setFixed] = useState(false);
    const [firstTop, setFirstTop] = useState(null);

    const ref = useRef();
    const refWrapper = useRef();


    const classItemOne = `testdrive-switch__item ${active === 1 ? 'testdrive-switch__item--active' : ''}`
    const classItemTwo = `testdrive-switch__item ${active === 2 ? 'testdrive-switch__item--active' : ''}`



    const checkScroll = () => {
        const scrollTop = window.scrollY
        const elementTop = refWrapper.current.offsetTop + refWrapper.current.clientHeight - refWrapper.current.clientTop - 60
        const elementShowRoom = showRoomsRef.current.offsetTop - 200

        if (scrollTop > elementShowRoom) {
           setActive(2);
        } else {
            setActive(1)
        }

        if (scrollTop > elementTop) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        if (firstTop) {
            window.addEventListener('scroll', checkScroll)
        }
        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [firstTop])


    useEffect(() => {
        if (ref.current && !firstTop) {
            setFirstTop(ref.current.offsetTop)
        }
    }, [ref])

    const handleClickLabel = (ref, minus = 0) => {
        if (ref.current) {
            const scrollTop = ref.current.offsetTop

            window.scrollTo({
                top: scrollTop - minus,
                behavior: 'smooth'
            })
        }
    }


    return (
        <section className='testdrive-switch' ref={refWrapper}>
            <h2 className='testdrive-switch__title'>Выберите удобный для вас формат тест-драйва</h2>
            <div className={`testdrive-switch__subtitles ${fixed ? 'testdrive-switch__fixed' : ''}`}>
                <div
                    className={`${classItemOne}`}
                    ref={ref}
                    onClick={() => handleClickLabel(refWrapper)}
                >
                    Домой или в офис
                </div>
                <div
                    className={classItemTwo}
                    onClick={() => handleClickLabel(showRoomsRef, 100)}
                >
                    Наши шоурумы
                </div>
            </div>
            {fixed && (
                <div className={`testdrive-switch__subtitles`} style={{opacity: 0}}>
                    <div className={`${classItemOne}`} ref={ref}>
                        Домой или в офис
                    </div>
                    <div className={classItemTwo}>
                        Наши шоурумы
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestDriveSwitch;
