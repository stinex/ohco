import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderPhone from "./HeaderPhone";
import HeaderDrawer from "./HeaderDrawer";
import {useMediaQuery} from "@mui/material";
import Container from "../Container";
import {navArray, navArrayMobile} from "../../lib/constants/constants";

const HeaderCustom = ({wrapper, customContainer, children}) => {


    const media1024 = useMediaQuery('(max-width: 1024px)');

    return (
        <header>
            <section className={wrapper}>
                <Container>
                    <div className='header'>
                        <HeaderLogo/>
                        <HeaderNavigation navArray={navArray}/>
                        <div className='header__menu'>
                            <HeaderPhone/>
                            {media1024 && <HeaderDrawer navArray={navArrayMobile}/>}
                        </div>
                    </div>
                </Container>
                <Container className={customContainer}>
                    <>
                        {children}
                    </>
                </Container>
            </section>
        </header>
    );
};

export default HeaderCustom;
