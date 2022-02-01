import React, {useEffect, useRef, useState} from 'react';
import PlayIcon from "../../UI/icon/PlayIcon";
import MediaPlayIcon from "../../UI/icon/MediaPlayIcon";
import {useMediaQuery} from "@material-ui/core";


const HomeVideo = () => {

    const [muted, setMuted] = useState(true);
    const media1024 = useMediaQuery('(max-width: 1024px)');
    const ref = useRef();

    const handleChangeMuted = () => {
        setMuted(!muted)
        ref.current.play()
    }


    const handleClickSection = () => {
        if (!muted) {
            setMuted(!muted)
        }
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.play()
        }
    }, [ref])

    return (
        <section className='home-video' onClick={handleClickSection}>
            {media1024 ? (
                <video ref={ref} autoPlay muted={muted} loop className='home-video__wrapper'>
                    <source src="./video/video2.mp4" type="video/mp4"/>
                </video>
            ) : (
                <video ref={ref} autoPlay muted={muted} loop className='home-video__wrapper'>
                    <source src="./video/video1.mp4" type="video/mp4"/>
                </video>
            )}
            {muted && (
                <button
                    className='home-video__icon'
                    onClick={handleChangeMuted}
                >
                    {media1024 ? <MediaPlayIcon/> : <PlayIcon/>}
                </button>
            )}
        </section>
    );
};

export default HomeVideo;
