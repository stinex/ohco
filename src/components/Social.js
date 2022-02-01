import React from 'react';
import WhatsappIcon from "../UI/icon/WhatsappIcon";
import ViberIcon from "../UI/icon/ViberIcon";
import TelegramIcon from "../UI/icon/TelegramIcon";

const Social = () => {



    return (
        <ul className='social'>
            <li className="social-item">
                <a href="https://wa.me/79068669588">
                    <WhatsappIcon />
                </a>
            </li>
            <li className="social-item">
                <a href="viber://chat?number=%2B79068669588">
                    <ViberIcon />
                </a>
            </li>
            <li className="social-item">
                <a href="https://t.me/dreamwave_ru">
                    <TelegramIcon />
                </a>
            </li>
        </ul>
    );
};

export default Social;
