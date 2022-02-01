import React, {useState} from 'react';
import FormArrowIcon from "../../../UI/icon/FormArrowIcon";
import {sendLetter} from "../../../lib/utils/services";
import {useHistory} from "react-router-dom";
import NumberFormat from "react-number-format";

const HomeFormData = () => {

  const [phone, setPhone] = useState('')
  const router = useHistory()
  const [phonePlaceholder, setPhonePlaceholder] = useState('Телефон')

  const handleSuccess = () => {
    router.push('/success')
  }

  return (
    <form className='home-form__data' onSubmit={(e) => sendLetter(e, 'форма без имени', phone, handleSuccess)}>
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
      <button className='home-form__button' disabled={!(phone.split('_').join('').split('-').join('').split(' ').join('').length > 13)}>
        <div className='home-form__arrow'>
          <FormArrowIcon/>
        </div>
      </button>
    </form>
  );
};

export default HomeFormData;
