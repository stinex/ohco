import React from 'react';
import LogoIcon from "../../UI/icon/LogoIcon";
import Social from "../Social";

const FooterInfo = ({view920}) => {


    return (
        <div className='footer__info'>
            <div className='footer__logo-inf'>
                <LogoIcon/>
                <p className='footer__agent'>
                    Официальный представитель<br/>
                    OHCO в России
                </p>
            </div>
            {view920 && (
                <Social/>
            )}
        </div>
    );
};

export default FooterInfo;
