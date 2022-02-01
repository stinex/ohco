import React from 'react';
import {Button} from "@mui/material";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    button: {
        width: 268,
        height: 50,
        lineHeight: 18,
        border: '2px solid #FFFFFF',
        fontWeight: '700',
        fontSize: '20px',
        textTransform: 'none',
        cursor: 'pointer',
        borderRadius: 42,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: 'red'
        },
        [theme.breakpoints.down(1025)]: {
            width: 258,
            fontSize: 16,
            lineHeight: 20
        },
        [theme.breakpoints.down(701)]: {
            width: 227,
            height: 42
        },
    },
}))

const ButtonSlider = (props) => {

    const classes = useStyles();

    return (
        <button
            className={classes.button}
            color='secondary'
            {...props}
        >
            {props.children}
        </button>
    );
};

export default ButtonSlider;
