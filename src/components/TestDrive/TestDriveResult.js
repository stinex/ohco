import React from 'react';
import SuccesIcon from "../../UI/icon/SuccesIcon";

const TestDriveResult = () => {
    return (
        <section className='testdrive-result'>
            <div className='testdrive-result__text'>
                <h6 className='testdrive-result__title'>В результате</h6>
                <p className='testdrive-result__subtitle'>
                    Вы и ваши близкие получаете удовольствие<span className='testdrive-result__br1024'/> от массажа<br/>
                    в комфортной обстановке.<span className='testdrive-result__br375'/><span className='testdrive-result__br1024'/> Кресло, которое вам понравилось <br/>
                    вы можете<span className='testdrive-result__br1024'/> оплатить на месте или оформить в рассрочку
                </p>
            </div>
            <div className='testdrive-result__ui'>
                <div className='testdrive-result__checkbox'>
                    <div className='testdrive-result__icon'>
                        <SuccesIcon/>
                    </div>
                </div>
                <div className='testdrive-result__switch'>
                    <div className='testdrive-result__circle'/>
                </div>
            </div>
        </section>
    );
};

export default TestDriveResult;
