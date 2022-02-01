import React from 'react';
import {Link} from "react-router-dom";
import MasterCard from "../../UI/icon/MasterCard";

const FooterPolicy = ({view675}) => {

    const policy = {
        title: ['Политика конфиденциальности', 'Политика обработки персональных данных'],
        href: ['/Privacy_Policy.pdf', '/Privacy_Policy.pdf']
    }

    const policyIndex = view675 ? 1 : 0
    const policyTitle = policy.title[policyIndex]
    const policyHref = policy.href[policyIndex]


    return (
        <div className='footer__policy'>
            <div className='footer__policy-text'>
                © 2021 OHCO Все права защищены.
            </div>
            <div className='footer__policy-text'>
                <Link to={policyHref}>
                    {policyTitle}
                </Link>
            </div>
            <div className='footer__payment'>
                <div className='footer__payment-master'>
                    {/*<MasterCard/>*/}
                    <img src="/icon/mastercard.png" alt="master-card"/>
                </div>
                <div className='footer__payment-visa'>
                    <img src="/icon/visa.png" alt="visa-card"/>
                </div>
                <div className='footer__payment-mir'>
                    <img src="/icon/mir-logo.png" alt="mir-card"/>
                </div>
            </div>
        </div>
    );
};

export default FooterPolicy;
