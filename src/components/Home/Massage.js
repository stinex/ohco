import React from 'react';
import BackgroundWrapper from "../BackgroundWrapper";
import ManualMassage from "../ManualMassage";


const massageText = {
    title: (
        <div>
            <span className='main-color'>
                Наконец-то<br/>
                достойная замена</span><br/>
                ручному массажу
        </div>
    ),
    subtitle: (
        <div>
            Усовершенствованные алгоритмы массажа<br/>
            имитируют руки профессионального<br/>
            массажиста, точно управляя широким<br/>
            диапазоном скоростей массажа, от быстрых<br/>
            движений до ультрамедленных
        </div>
    )
}


const Massage = () => {



    return (
        <BackgroundWrapper
            wrapper='background-home-massage'
            // gradient='background-home-massage-gradient'
            customContainer='more-container'
        >
            <ManualMassage
                title={massageText.title}
                subtitle={massageText.subtitle}
                src='/image/Home/massage-chair.png'
                button
            />
        </BackgroundWrapper>
    );
};

export default Massage;
