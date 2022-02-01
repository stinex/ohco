import React from 'react';
import ShowRoomsDillerList from "./ShowRoomsDillerList";
import {cityArr, cityArrTablet, cityArrMobile} from "../../../lib/constants/constants";
import {useMediaQuery} from "@mui/material";


const ShowRoomsDillers = () => {

    const mediaTablet = useMediaQuery('(max-width: 1024px)');
    const mediaMobile = useMediaQuery('(max-width: 600px)');
    const arr = mediaMobile ? cityArrMobile : mediaTablet ? cityArrTablet : cityArr


    return (
        <section className='showrooms-diller'>
            <h2 className='showrooms-diller__title'>
                Шоурумы наших <br/>
                дилеров в других городах
            </h2>
            <div className='showrooms-diller__flex'>
                <ShowRoomsDillerList arr={arr}/>
            </div>
        </section>
    );
};

export default ShowRoomsDillers;
