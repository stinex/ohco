import React, {useState} from 'react';
import TextFieldUI from "../UI/components/TextFieldUI";
import CheckboxUI from "../UI/components/CheckboxUI";
import ButtonFillUI from "../UI/components/ButtonFillUI";
import {numberMask, sendLetter} from "../lib/utils/services";
import {useHistory} from "react-router-dom";
import NumberFormat from "react-number-format";

const AnyFormData = ({mainColor, success, modal}) => {

    const router = useHistory();


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [check, setCheck] = useState(true)
    const [phonePlaceholder, setPhonePlaceholder] = useState('Телефон')

    const successFunction = () => {
        if (success) return success()

        router.push('/success')
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 4)
    }


    return (
        <form className='form-any__data' onSubmit={(e) => sendLetter(e, name, phone, successFunction)}>
            <div className='form-any__input'>
                <TextFieldUI
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    customFont
                    name='name'
                    placeholder='Ваше имя'
                />
            </div>
            <div className='form-any__input'>
                <NumberFormat
                  onMouseEnter={() => setPhonePlaceholder('+7 (___) ___-__-__')}
                  onMouseLeave={() => setPhonePlaceholder('Телефон')}
                  placeholder={phonePlaceholder}
                  className={`default-input ${modal ? 'default-input-modal' : ''}`}
                  format="+7 (###) ###-##-###"
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  name='phone'
                  mask="_"
                />
            </div>
            <div className='form-any__info'>
                <div className='form-any__check'>
                    <CheckboxUI
                        checked={check}
                        onClick={() =>setCheck(!check)}
                        color={mainColor}/>
                </div>
                <div className='form-any__conditions'>
                    <a href='./doc/Privacy_Policy.pdf' className='form-any__link'>
                        Я ознакомлен и согласен
                        &nbsp;
                    </a>
                    с условиями политики обработки персональны<br/>
                    данных и конфиденциальности
                </div>
            </div>
            <div className='form-any__button'>
                <ButtonFillUI
                    disabled={!!!(check && name && phone.split('_').join('').split('-').join('').split(' ').join('').length > 13)}

                    type='submit'>
                    Заказать
                </ButtonFillUI>
            </div>
        </form>
    );
};

export default AnyFormData;
