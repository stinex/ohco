import React from 'react';
import ShowRoomsDillerItem from "./ShowRoomsDillerItem";
import {randomKey} from "../../../lib/utils/services";



const ShowRoomsDillerList = ({arr}) => {

    return (
        <>
            {arr.map((item, i) => (
                <ul key={randomKey(i)} className='showrooms-diller__wrapper'>
                    {item.map(city => (
                        <ShowRoomsDillerItem
                            key={randomKey(i)}
                            city={city.name}
                            info={city.info}
                        />
                    ))}
                </ul>
            ))}
        </>
    );
};

export default ShowRoomsDillerList;
