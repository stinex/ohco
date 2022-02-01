import React, {useState} from 'react';
import {Collapse} from "@mui/material";
import PlusIcon from "../../UI/icon/PlusIcon";
import MinusIcon from "../../UI/icon/MinusIcon";
import {Link} from "react-router-dom";

const FooterSection = ({title, view675, children, link = false, onlyIcon = false}) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <ul className='footer__url-section'>
            {view675 ? (
                <>
                    <li className='footer__url-title' onClick={onlyIcon ? false : handleClick}>
                        <div className='footer__collapse'>
                            {link ? (
                              <Link to={link}>{title}</Link>
                            ) : <span>{title}</span>}
                            <span onClick={handleClick}>{open ? <MinusIcon/> : <PlusIcon/>}</span>
                        </div>
                    </li>
                    <Collapse
                        in={open}
                        sx={{
                            '& > .MuiCollapse-wrapper': {
                                marginTop: '20px'
                            }
                        }}
                    >
                        {children}
                    </Collapse>
                </>
            ) : (
                <>
                    <li className='footer__url-title'>
                        {link ? (
                          <Link to={link}>
                              {title}
                          </Link>
                        ) : <>{title}</>}
                    </li>
                    {children}
                </>
            )}
        </ul>
    );
};

export default FooterSection;
