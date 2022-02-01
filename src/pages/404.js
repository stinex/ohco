import React from 'react';
import {useHistory} from "react-router-dom";

const Error = () => {

  const router = useHistory()


  return (
    <>
      <div className='error'>
        <section className='error__section'>
          <div className='error__text'>
            <h1 className='error__status'>
              404
            </h1>
            <h3 className='error__name'>
              Страница не найдена
            </h3>
            <p className='error__subtitle'>
              К сожалению, такой страницы не существует.<span className='error__br375'/> Возможно,<span className='error__br768'/> вы перешли <br/>
              по старой ссылке<span className='error__br375'/> или ввели непарвильный адрес.
            </p>
            <p className='error__subtitle'>
              Попробуйсте перейти<span className='error__br375'/> на <span onClick={() => router.push('/')} className='main-color error__back'>главную страницу</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;
