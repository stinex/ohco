import React, {useState} from 'react';
import CallIcon from "../../UI/icon/CallIcon";
import ButtonOutlinedUI from "../../UI/components/ButtonOutlinedUI";
import {Link} from "react-router-dom";
import Social from "../Social";
import FooterSection from "./FooterSection";
import DialogUI from "../../UI/components/DialogUI";



const generateUrlItem = (arr, link = true) => {
    if (Array.isArray(arr)) {

        if (!link) {
            return arr.map(item => (
              <li key={item.title} className='footer__url-item'>
                  {item.title}
              </li>
            ))
        }

        return (
            arr.map(item => (
                <li key={item.title} className='footer__url-item'>
                    <Link to={item.href} className='footer__link'>{item.title}</Link>
                </li>
            ))
        )
    }
}

const companyArr = [
    {title: 'О компании', href: '/about'},
    {title: 'Доставка и оплата', href: '/delivery'},
    {title: 'Шоурумы', href: '/showroom'},
    {title: 'Тест-драйв', href: '/testdrive'},
];


const cityArr = [
    {title: 'Москва (Центр)', href: '/'},
    {title: 'Москва (МКАД)', href: '/'},
    {title: 'Санкт-Петербург', href: '/'},
    {title: 'Самара', href: '/'},
    {title: 'Оренбург', href: '/'},
    {title: 'Уфа', href: '/'},
    {title: 'Екатеринбург', href: '/'},
    {title: 'Челябинск', href: '/'},
    {title: 'Магнитогорск', href: '/'},
    {title: 'Тюмень', href: '/'},
    {title: 'Сургут и др.', href: '/'},
];


const FooterUrl = ({view920, view675}) => {

    const sectionTitle = view920 ? 'Контакты' : 'Есть вопросы? Звоните!';
    const socialTitle = view675 ? <span>Или пишите:</span> : <div>Свяжитесь с нами <br/>в мессенджерах:</div>
    const [open, setOpen] = useState(false);

    return (
        <div className='footer__url'>
            <FooterSection
                title='Компания'
                view675={view675}
            >
                {generateUrlItem(companyArr)}
            </FooterSection>
            <FooterSection
                title='Выставочные залы'
                view675={view675}
                link='/showroom'
                onlyIcon={true}
            >
                {generateUrlItem(cityArr, false)}
            </FooterSection>
            <div>
                <ul>
                    <li className='footer__url-title'>
                        {sectionTitle}
                    </li>
                    <li className='footer__call'>
                        {view920 && (
                            <div className='footer__call-icon'><CallIcon/></div>
                        )}
                        <div className='footer__call-info'>
                            <a href='tel:88007001429' className='footer__call-number'>
                                8 (800) 700 14 29
                            </a>
                            <p className='footer__call-subtitle'>
                                Звонок бесплатный по РФ
                            </p>
                        </div>
                    </li>
                    <li className='footer__button'>
                        <ButtonOutlinedUI onClick={() => setOpen(true)}>
                            Заказать звонок
                        </ButtonOutlinedUI>
                    </li>
                    {!view920 && (
                        <li>
                            <div className='footer__contact'>
                                <div className='footer__contact-text'>
                                    {socialTitle}
                                </div>
                                <Social/>
                            </div>
                        </li>
                    )}
                </ul>
                <DialogUI
                    state={{open, setOpen}}
                    title='Заказать звонок'
                    subtitle={
                        <>
                            Свяжемся с вами в течение 15 минут.<br/>
                            Наш менеджер ответит на все ваши вопросы.
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default FooterUrl;
