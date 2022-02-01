import React from 'react';
import Container from "../Container";
import FooterInfo from "./FooterInfo";
import FooterUrl from "./FooterUrl";
import FooterPolicy from "./FooterPolicy";
import {useMediaQuery} from "@mui/material";


const Footer = () => {


    const mediaQuery920 = useMediaQuery('(min-width:920px)')
    const mediaQuery675 = useMediaQuery('(max-width:675px)')

    return (
        <footer className='footer'>
            <Container>
                <div className="footer__wrapper">
                    <FooterInfo view920={mediaQuery920}/>
                    <FooterUrl
                        view920={mediaQuery920}
                        view675={mediaQuery675}
                    />
                </div>
                <FooterPolicy view675={mediaQuery675}/>
            </Container>
        </footer>
    );
};

export default Footer;
