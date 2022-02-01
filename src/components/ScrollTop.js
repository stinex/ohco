import React, {useEffect, useRef} from 'react';
import {withRouter} from "react-router-dom";

const ScrollTop = ({children}) => {

    const countRender = useRef(0)

    useEffect(() => {
        if (countRender.current > 0) {
            window.scrollTo(0, 0)
        }

        countRender.current += 1
    })


    return (
        <>
            {children}
        </>
    );
};

export default withRouter(ScrollTop);
