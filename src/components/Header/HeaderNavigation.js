import React from 'react';
import {Link, useHistory} from "react-router-dom";

const HeaderNavigation = ({navArray}) => {

    const router = useHistory();
    const currentPathName = router.location.pathname

    return (
        <nav className='header__nav'>
            <ul className='header__nav-item'>
                {navArray.map((item => {

                    const className = item.to === currentPathName ?
                        'header__item header__item--active' : 'header__item header__item--disabled';

                    return (
                        <Link key={item.to} to={item.to}>
                            <li className={className}>{item.title}</li>
                        </Link>
                    )
                }))}
            </ul>
        </nav>
    );
};

export default HeaderNavigation;
