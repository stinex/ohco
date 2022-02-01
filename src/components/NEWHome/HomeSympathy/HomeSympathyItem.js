import React from 'react';
import {useMediaQuery} from "@mui/material";

const HomeSympathyItem = ({content = 1}) => {


    const media1500 = useMediaQuery('(max-width: 1500px)')
    const media1024 = useMediaQuery('(max-width: 1024px)')
    const sizeImage = media1024 ? '1024' : media1500 ? '1440' : '1920'


    const boxShadow = {
        boxShadow: `0 15px 20px rgba(249, 243, 221, ${(content - 1) * 0.5})`
    }


    return (
        <div className='home-sympathy__item'>
            <div className='home-sympathy__text'>
                <p className='home-sympathy__title'>
                    <span className='main-color'>
                        Взаимная симпатия
                    </span><br/>
                    с первого взгляда
                </p>
            </div>
            <div className='home-sympathy__img'>
                <img
                    src={`/image/Home/HomeSympathy/sympathty-chair-${sizeImage}.png`}
                    alt='home-chair-sympathy'
                />
                <div
                    style={boxShadow}
                    className='home-sympathy__illumination home-sympathy__illumination--left'/>
                <div
                    style={boxShadow}
                    className='home-sympathy__illumination home-sympathy__illumination--right'/>
            </div>
        </div>
    );
};

export default HomeSympathyItem;
