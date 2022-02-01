import React from 'react';
import {Button} from "@mui/material";

const ButtonOutlinedUI = ({customHeight, customPadding, ...props}) => {


    return (
        <Button
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                border: '2px solid #BC8762',
                borderRadius: '42px',
                padding: customPadding ? 'inherit' : '16px 33px',
                width: '100%',
                textTransform: 'none',
                color: '#BC8762',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'SFUIDisplay',
                height: customHeight ? 'inherit' : '50px',
                '&:hover': {
                    backgroundColor: '#BC8762',
                    color: '#FFFFFF'
                }
            }}
            {...props}
            // className='button-fill'
        >
            {props.children}
        </Button>
    );
};

export default ButtonOutlinedUI;
