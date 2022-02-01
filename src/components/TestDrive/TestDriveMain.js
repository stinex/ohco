import React from 'react';
import {useMediaQuery} from "@mui/material";

const TestDriveMain = () => {

    const media1024 = useMediaQuery('(max-width: 900px)');

    const src = media1024 ? '/image/TestDrive/chair-home768.png' : '/image/TestDrive/chair-home.png'

    return (
        <>
            <div className='testdrive-main'>
                <div className="testdrive-main__img">
                    <img
                        src={src}
                        alt='massage-chair'
                    />
                    {/*<div className='testdrive-main__blur'/>*/}
                </div>
                <div className='testdrive-main__text-wrapper'>
                    <div className='testdrive-main__text'>
                        <h1 className='testdrive-main__title'>
                            Протестируйте<br/>
                            массажное кресло&nbsp;
                            <span className='main-color testdrive-main__focus'>
                            там, где вам удобно!
                        </span>
                        </h1>
                        <p className='testdrive-main__subtitle'>
                            Не нужно никуда ехать. Привезём кресло куда скажете.<br/>
                            У вас будет несколько часов, чтобы испытать эффект<br/>
                            от массажа для вас и ваших близких.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestDriveMain;
