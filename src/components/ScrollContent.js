import React from 'react';
import {useVisibleContext} from "../lib/context/VisibleContentCTX";

const ScrollContent = ({arr, component}) => {


    const {contentVisible} = useVisibleContext()
    const Content = component;

    const lastElement = arr[arr.length - 1]
    const test = contentVisible >= lastElement.id;
    console.log(test);

    return (
        <>
            {test ? (
                <Content
                    key={lastElement.id}
                    {...lastElement}
                />
            ) : (
                <>
                    {arr.map(item => {
                        if (item.id !== contentVisible) return null;
                        else {
                            return (
                                <Content
                                    key={item.id}
                                    {...item}
                                />
                            )
                        }
                    })}
                </>
            )}
        </>
    );
};

export default ScrollContent;
