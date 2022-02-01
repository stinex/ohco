import React from 'react';

const TestDriveWork = () => {
    return (
        <section className='testdrive-work'>
            <h2 className="testdrive-work__title">Как это работает?</h2>
            <div className="testdrive-work__wrapper">
                <div className="testdrive-work__item">
                    <div className='testdrive-work__item-title'>
                        <span className='testdrive-work__number testdrive-work__number-1'>1</span>
                        <span className='testdrive-work__name'>Оставьте заявку</span>
                    </div>
                    <div className='testdrive-work__item-sub'>
                        <p className='testdrive-work__subtitle'>
                            Вы оставляете заявку <span className='testdrive-work__br600'/> в форме <span className='testdrive-work__br768 testdrive-work__br768--none'/>
                            обратной связи или звоните <span className='testdrive-work__br600'/><span className='testdrive-work__br768'/> по
                            телефону 8-800-700-75-56
                        </p>
                    </div>
                </div>
                <div className="testdrive-work__item">
                    <div className='testdrive-work__item-title'>
                        <span className='testdrive-work__number testdrive-work__number-2'>2</span>
                        <span className='testdrive-work__name'>Делаете выбор</span>
                    </div>
                    <div className='testdrive-work__item-sub'>
                        <p className='testdrive-work__subtitle'>
                            Выбираете модели кресел для<span className='testdrive-work__br768'/> тест-
                            драйва, удобную дату и время,<span className='testdrive-work__br768'/><br/>
                            а также место проведения
                        </p>
                    </div>
                </div>
                <div className="testdrive-work__item">
                    <div className='testdrive-work__item-title'>
                        <span className='testdrive-work__number testdrive-work__number-3'>3</span>
                        <span className='testdrive-work__name'>Доставляем товары</span>
                    </div>
                    <div className='testdrive-work__item-sub'>
                        <p className='testdrive-work__subtitle'>
                            В выбранную вами дату кресла <span className='testdrive-work__br768'/>
                            привозят по указанному адресу <span className='testdrive-work__br768'/>
                            и производят сборку
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestDriveWork;
