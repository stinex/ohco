import React, {useState} from 'react';
import HeaderMenuIcon from "../../UI/icon/HeaderMenuIcon";
import {Drawer} from "@mui/material";
import HeaderDrawerList from "./HeaderDrawerList";


const drawerClasses = {
    '& > .MuiDrawer-paper': {
        width: '100%',
        backgroundColor: '#111111',
        color: '#FFFFFF'
    }
}


const HeaderDrawer = ({navArray}) => {

    const [open, setOpen] = useState(false);

    const handlerChangeDrawer = () => {
        setOpen(!open)
    }

    return (
        <div>
            <React.Fragment>
                <button className='header__icon' onClick={handlerChangeDrawer}>
                    <HeaderMenuIcon/>
                </button>
                <Drawer
                    sx={drawerClasses}
                    anchor='left'
                    open={open}>
                    <HeaderDrawerList
                        navArr={navArray}
                        onClose={handlerChangeDrawer}
                    />
                </Drawer>
            </React.Fragment>
        </div>
    );


    // return (
    // );
};

export default HeaderDrawer;
