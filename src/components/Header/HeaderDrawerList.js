import React, {useState} from 'react';
import HeaderLogo from "./HeaderLogo";
import CloseIcon from "../../UI/icon/CloseIcon";
import {Link} from "react-router-dom";
import ButtonOutlinedUI from "../../UI/components/ButtonOutlinedUI";
import Social from "../Social";
import {useMediaQuery} from "@mui/material";
import CloseLaptopIcon from "../../UI/icon/CloseLaptopIcon";
import DialogUI from "../../UI/components/DialogUI";

const HeaderDrawerList = ({navArr, onClose}) => {

    const [open, setOpen] = useState(false);
    const media600 = useMediaQuery('(max-width: 600px)')
    const Icon = media600 ? CloseIcon : CloseLaptopIcon


    return (
        <>
            <div className='header__drawer-wrapper'>
                <div className='header__drawer'>
                    <HeaderLogo customTitle='header__drawer-title'/>
                    <div className='header__drawer-close' onClick={onClose}>
                        <Icon/>
                    </div>
                </div>
                <div className='header__drawer-innerWrapper'>
                    <ul className='header__drawer-list'>
                        {navArr.map(item => (
                            <li key={item.to} className='header__drawer-item'>
                                <Link to={item.to}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a className='header__drawer-number' href='tel:88007001429'>8 (800) 700 14 29</a>
                    <p className='header__drawer-order'>Звонок бесплатный по РФ</p>
                    <div className='header__drawer-button'>
                        <ButtonOutlinedUI onClick={() => setOpen(true)}>
                            Заказать звонок
                        </ButtonOutlinedUI>
                    </div>
                    <Social/>
                </div>
            </div>
            <DialogUI
                state={{open, setOpen}}
                title='Заказать звонок'
                subtitle={
                    <>
                        Свяжемся с вами в течение 15 минут.<br/>
                        Наш менеджер ответит на все ваши вопросы.
                    </>
                }
            />
        </>
    );
};

export default HeaderDrawerList;
