import React from 'react';
import {Link} from "react-router-dom";
import LogoIcon from "../../UI/icon/LogoIcon";

const HeaderLogo = ({customTitle = 'header__title'}) => {
    return (
        <div className='header__logo'>
            <Link to='/' className='header__logo-icon'>
                <LogoIcon/>
            </Link>
            <h6 className={customTitle}>
                Официальный представитель<br/>
                OHCO в России
            </h6>
        </div>
    );
};

export default HeaderLogo;
