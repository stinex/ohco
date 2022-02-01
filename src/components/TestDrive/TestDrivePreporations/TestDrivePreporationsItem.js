import React from 'react';

const TestDrivePreporationsItem = ({icon, iconName, subtitle}) => {

    const Icon = icon;

    return (
        <div className='testdrive-preparation__item'>
            <div className={`testdrive-preparation__icon-${iconName}`}>
                <Icon/>
            </div>
            <div className='testdrive-preparation__desc'>
                {subtitle}
            </div>
        </div>
    );
};

export default TestDrivePreporationsItem;
