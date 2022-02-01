import React from 'react';
import Address from "../Address/Address";
import AddressShowRooms from "./AddressShowRooms";
import AddressMoscow from "./AddressMoscow";
import AddressImpressions from "./AddressImpressions";
import AddressNewFormat from "./AddressNewFormat";
import ShopIcon from "../../UI/icon/ShowRooms/ShopIcon";
import AddressHome from "./AddressHome";

const AnyAddress = React.forwardRef(({shop, leftTitle, content, modification, page}, ref) => {


    const wrapper = page === 'showrooms' ? 'any-address-show' : page === 'testdrive1' ? 'any-address-testdrive1' : 'any-address-testdrive2'

    return (
        <section className={'any-address ' + wrapper} ref={ref ? ref : null}>
            <div className={`any-address__block ${modification ? `any-address__block--${modification}` : ''}`}>
                {shop ? (
                    <AddressShowRooms propsTitle={leftTitle}/>
                ) : <AddressHome/>}
            </div>
            <div className='any-address__block'>
                {content === 1 ? (
                    <AddressMoscow/>
                ) : content === 2 ? (
                    <AddressImpressions/>
                ) : <AddressNewFormat/>}
            </div>
        </section>
    );
});

export default AnyAddress;
