import React from 'react';
import ChairIcon from "../../../UI/icon/ChairIcon";
import BatteryIcon from "../../../UI/icon/BatteryIcon";
import TimeIcon from "../../../UI/icon/TimeIcon";


const getIconForIndex = (index) => {
    switch (index) {
        case 1:
            return {
                icon: ChairIcon,
                iconName: 'chair',
                subtitle: <>После напряженной<br/> и долгой сидячей работы</>,
                active: false
            }
        case 2:
            return {
                icon: ChairIcon,
                iconName: 'chair',
                subtitle: <>После напряженной<br/> и долгой сидячей работы</>,
                active: true
            }
        case 3:
            return {
                icon: BatteryIcon,
                iconName: 'battery',
                subtitle: <>Если хотите скорее<br/> восполнить запас энергии</>,
                active: false
            }
        case 4:
            return {
                icon: BatteryIcon,
                iconName: 'battery',
                subtitle: <>Если хотите скорее<br/> восполнить запас энергии</>,
                active: true
            }
        case 5:
            return {
                icon: TimeIcon,
                iconName: 'time',
                subtitle: <>Когда нужно размяться<br/> и повысить продуктивность</>,
                active: false
            }
        case 6:
            return {
                icon: TimeIcon,
                iconName: 'time',
                subtitle: <>Когда нужно размяться<br/> и повысить продуктивность</>,
                active: true
            }
    }
}

const HomeRestItem = ({contentIndex = 1}) => {

    const content = getIconForIndex(contentIndex)
    const Icon = content.icon
    const modification = content.active ? 'home-rest__subtitle--active' : ''


    return (
        <div className='home-rest__item'>
            <h3 className='home-rest__title'>
                Почувствуйте<span className='home-rest__br920'/> себя отдохнувшим
            </h3>
            <div className='home-rest__icon-wrapper'>
                <div className={`home-rest__icon-${content.iconName}`}>
                    <Icon/>
                </div>
            </div>
            <p className={`home-rest__subtitle ${modification}`}>
                {content.subtitle}
            </p>
        </div>
    );
};

export default HomeRestItem;
