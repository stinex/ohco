import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderPhone from "./HeaderPhone";
import HeaderDrawer from "./HeaderDrawer";
import {useMediaQuery} from "@mui/material";
import BackgroundWrapper from "../BackgroundWrapper";
import {navArray, navArrayMobile} from "../../lib/constants/constants";


const Header = ({wrapper, customContainer,  children}) => {


    const media990 = useMediaQuery('(max-width: 1024px)');

    return (
        <header>
            <BackgroundWrapper wrapper={wrapper} customContainer={customContainer}>
                <div className='header'>
                    <HeaderLogo/>
                    <HeaderNavigation navArray={navArray}/>
                    <div className='header__menu'>
                        <HeaderPhone/>
                        {media990 && <HeaderDrawer navArray={navArrayMobile}/>}
                    </div>
                </div>
                {children}
            </BackgroundWrapper>
        </header>
    );
};

export default Header;
