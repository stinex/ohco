import React from 'react';


const ButtonFillUI = ({...props}) => {


    // ${props?.disabled ? 'disabled-button': ''}

    return (
        <button
            className={`default-button`}
            {...props}
            // className='button-fill'
        >
            {props.children}
        </button>
    );
};

export default ButtonFillUI;
