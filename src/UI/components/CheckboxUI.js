import React from 'react';
import {Checkbox} from "@mui/material";
import CheckboxFalseIcon from "../icon/CheckboxFalseIcon";
import CheckboxTrueIcon from "../icon/CheckboxTrueIcon";

const CheckboxUI = ({color = 'white', onClick, checked}) => {
    return (
        <Checkbox
            sx={{
                width: '100%',
                height: '100%',
                padding: '5px'
            }}
            color="default"
            onClick={onClick}
            checked={checked}
            icon={<CheckboxFalseIcon/>}
            checkedIcon={<CheckboxTrueIcon fill={color}/>}
        />
    );
};

export default CheckboxUI;
