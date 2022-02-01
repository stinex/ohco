import React from 'react';
import BackgroundWrapper from "../../BackgroundWrapper";

const MutualSympathyItem = ({title, subtitle, src}) => {
    return (
        <div className='sympathy'>
            <div className='sympathy__text'>
                <p className='sympathy__title'>
                    <span className='main-color'>{title}</span><br/>
                    {subtitle}
                </p>
            </div>
            <div className='sympathy__img'>
                <img
                    src={`/image/Home/Sympathy/${src}.png`}
                    alt={src}
                />
            </div>
        </div>
    );
};

export default MutualSympathyItem;
