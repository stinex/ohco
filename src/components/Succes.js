import React from 'react';
import Container from "./Container";
import SuccessForm from "../UI/icon/SuccessForm";

const Succes = () => {
    return (
        <main>
            <section className='success'>
                <Container>
                    <div className='success__wrapper'>
                        <div className='success__icon'>
                            <SuccessForm/>
                        </div>
                        <h3 className='success__title'>
                            Спасибо, ваша заявка принята!
                        </h3>
                        <p className='success__subtitle'>
                            Наши менеджеры свяжутся с вами <br/>
                            в ближайшее время
                        </p>
                    </div>
                </Container>
            </section>
            <Container>

            </Container>
        </main>
    );
};

export default Succes;
