import React from 'react';
import {useMediaQuery} from "@mui/material";

const Address = ({
        name = '',
        title,
        titleAdaptive,
        titleTwo,
        titleAdaptiveTwo,
        subtitle,
        iconWrapper,
        text,
        textAdaptive
}) => {

    const media930 = useMediaQuery('(max-width: 930px)')
    const media600 = useMediaQuery('(max-width: 600px)')

    const titles = media600 ? titleAdaptive : media930 ? titleAdaptive ? titleAdaptive : title : title
    const titlesTwo =  media600 ? titleTwo : media930 ? titleAdaptiveTwo ? titleAdaptiveTwo : titleTwo : titleTwo
    const PropsText = media600 ? text : media930 ? textAdaptive ? textAdaptive : text : text
    const IconWrapper = iconWrapper


    return (
        <section className='address'>
            <div className="address__wrapper">
                <div className={`address__showrooms ${name ? `address__showrooms--${name}` : ''}`}>
                    <h3 className='address__title'>
                        {titles}
                    </h3>
                    {subtitle && (
                        <p className='address__subtitle'>{subtitle}</p>
                    )}
                    {IconWrapper && <IconWrapper/>}
                </div>
                <div className={`address__showrooms ${name ? `address__showrooms--${name}` : ''}`}>
                    <h3 className='address__title'>
                        {titlesTwo}
                    </h3>
                    {PropsText && <PropsText/>}
                </div>
            </div>
        </section>
    );
};

export default Address;
