import React from 'react';
import {TextField} from "@mui/material";


const TextFieldUI = (props, customFont) => {

    const styles = {
        width: '100%',
        height: '100%',
        display: 'block',
        borderRadius: '50px',
        transition: '.2s all linear',
        fontSize: 'inherit',
        '& .MuiInputBase-root': {
            color: '#F5F5F7',
            width: '100%',
            height: '100%',
            borderRadius: '50px',
            border: '1px solid #828282',
            fontSize: 'inherit',
            '& input': {
                paddingLeft: '20px',
                fontFamily: 'SFProDisplay',
                fontWeight: 400,
                fontSize: customFont ? 'inherit' : '18px',
                padding: '12px 0 12px 20px'
            }
        },
        '& .Mui-focused': {
            transition: '.15s all linear',
            border: '1px solid #DBD7D7 !important',
            // boxShadow: 'inset 0px 1px 30px rgba(219, 215, 215, 0.05)',
            '& fieldset': {
                border: '0'
            }
        }
    };


    return (
        <TextField
            sx={styles}
            {...props}
        />
    );
};

export default TextFieldUI;
