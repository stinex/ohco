import React from 'react';

const HomeComfortItem = ({name, desc, dopName, dopDesc, content, important}) => {

    const importantStyles = {
        item: content ? `home-comfort__item home-comfort__item--${content}` : 'home-comfort__item',
        wrapper: important ? 'home-comfort__item-wrapper home-comfort__item-wrapper--important' : 'home-comfort__item-wrapper',
        text: important ? 'home-comfort__text home-comfort__text--important' : 'home-comfort__text',
    }

    return (
        <div className={importantStyles.item}>
            <div className={importantStyles.wrapper}>
                <div className={importantStyles.text}>
                    <h6 className='home-comfort__name'>
                        {name}
                    </h6>
                    <p className='home-comfort__desc'>
                        {desc}
                    </p>
                </div>
                {dopName && dopDesc ? (
                    <div className='home-comfort__text'>
                        <h6 className='home-comfort__name'>
                            {dopName}
                        </h6>
                        <p className='home-comfort__desc'>
                            {dopDesc}
                        </p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default HomeComfortItem;
