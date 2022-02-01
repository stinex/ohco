import React, {useState} from 'react';
import TextFieldUI from "../UI/components/TextFieldUI";
import CheckboxUI from "../UI/components/CheckboxUI";
import ButtonFillUI from "../UI/components/ButtonFillUI";
import {sendLetter} from "../lib/utils/services";
import {useHistory} from "react-router-dom";
import NumberFormat from "react-number-format";

const FormData = ({customStyles = 'form'}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phonePlaceholder, setPhonePlaceholder] = useState('Телефон')
    const [check, setCheck] = useState(true);

    const router = useHistory();

    const success = () => {
        router.push('/success')
    }


    return (
        <form className={`${customStyles}__data`} onSubmit={(e) => sendLetter(e, name, phone, success)}>
            <div className={`${customStyles}__inputs`}>
                <div className={`${customStyles}__input`}>
                    <TextFieldUI
                        onChange={(e) => setName(e.target.value)}
                        placeholder={`Ваше имя`}
                    />
                </div>
                <div className={`${customStyles}__input`}>
                    {/*<TextFieldUI*/}
                    {/*    onChange={(e) => setPhone(e.target.value)}*/}
                    {/*    placeholder={`+7 965 353 65 18`}*/}
                    {/*/>*/}
                    <NumberFormat
                      onMouseEnter={() => setPhonePlaceholder('+7 (___) ___-__-__')}
                      onMouseLeave={() => setPhonePlaceholder('Телефон')}
                      placeholder={phonePlaceholder}
                      className='default-input background-none'
                      format="+7 (###) ###-##-###"
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      name='phone'
                      mask="_"
                    />
                </div>
            </div>
            <div className={`${customStyles}__policy`}>
                <div className={`${customStyles}__check`}>
                    <CheckboxUI
                        onClick={() => setCheck(!check)}
                        checked={check}
                    />
                </div>
                <p className={`${customStyles}__text`}>
                    <span className={`white-color`}>Я ознакомлен и согласен</span> <br/>
                    с условиями политики обработки персональных <br/>
                    данных и конфиденциальности
                </p>
            </div>
            <div className={`${customStyles}__submit`}>
                <ButtonFillUI
                    type='submit'
                    disabled={!!!(check && name && phone.split('_').join('').split('-').join('').split(' ').join('').length > 13)}
                >
                    Заказать
                </ButtonFillUI>
            </div>
        </form>
    );
};

export default FormData;
