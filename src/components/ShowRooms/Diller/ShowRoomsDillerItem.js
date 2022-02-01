import React, {useState} from 'react';
import PlusIcon from "../../../UI/icon/PlusIcon";
import MinusIcon from "../../../UI/icon/MinusIcon";
import {Collapse} from "@mui/material";
import CloseDillerIcon from "../../../UI/icon/CloseDillerIcon";
import ShowRoomsPlusIcon from "../../../UI/icon/ShowRoomsPlusIcon";


const collapseStyles = {
    fontSize: '16px',
    color: '#828282',
    wordWrap: 'break-word',


    width: '100%',
    maxWidth: '394px',
    overflow: 'hidden',
}

const ShowRoomsDillerItem = ({city, info}) => {

    const [open, setOpen] = useState(false);
    const citySub = info.citySub

    const handlerChange = () => {
        setOpen(!open)
    }


    return (
        <li className='showrooms-diller__item' onClick={handlerChange}>
            <div className='showrooms-diller__text'>
                <div className='showrooms-diller__city'>{city}</div>
                <div className='showrooms-diller__icon'>
                    {open ? <CloseDillerIcon/> : <ShowRoomsPlusIcon/>}
                </div>
            </div>
            <Collapse in={open} sx={collapseStyles}>
                <div className='showrooms-diller__cities showrooms-diller__cities--white'>
                    Адреса наших салонов в {info.city}:
                </div>
                <div className='showrooms-diller__shops'>
                    {Array.isArray(citySub) && (
                        citySub.map((cityItem, index) => {
                            return (
                                <div key={index} className='showrooms-diller__sub-city'>
                                    {cityItem.map((shopItem, index2) => (
                                        <p key={index2} className='showrooms-diller__cities'>
                                            {shopItem}
                                        </p>
                                    ))}
                                </div>
                            )
                        })
                    )}
                </div>
            </Collapse>
        </li>
    );
};

export default ShowRoomsDillerItem;
