import React from 'react';
import TestDrivePreporationsItem from "./TestDrivePreporationsItem";
import SmartphoneIcon from "../../../UI/icon/TestDrive/SmartphoneIcon";
import CentimetresIcon from "../../../UI/icon/TestDrive/CentimetresIcon";
import ClockIcon from "../../../UI/icon/TestDrive/ClockIcon";
import { useState } from 'react';
import { ModalYoutibe } from '../../ModalYoutibe';

export const testDrive = [
    {
        title: SmartphoneIcon,
        subtitle: '' +
            'Наш логист попросит вас сделать ' +
            'замеры дверных проемов и поможет' +
            ' организовать достаточно пространства' +
            ' для установки кресла'
    },
    {
        title: CentimetresIcon,
        subtitle: 'Для удобной посадки и использования' +
            ' распашных дверей-подлокотников' +
            ' необходимо освободить минимум 15 см'
    },
    {
        title: ClockIcon,
        subtitle: 'Выделить минимум 3 часа вашего ' +
            'времени на презентацию массажного ' +
            'кресла'
    },
]


const TestDrivePreporations = () => {


    const [open, setOpen] = useState(false)

    return (
        <section className="testdrive-preparation">
            <h2 className='testdrive-preparation__title'>
                Подготовка <span className='testdrive-preparation__br' />
                к тест-драйву
            </h2>
            <p className="testdrive-preparation__subtitle">
                OHCO M.8 - это кресло, в котором есть функции даже для самых
                искушенных пользователей, поэтому перед тест-драйвом нужно провести подготовку
            </p>
            <div className='testdrive-preparation__wrapper'>
                <TestDrivePreporationsItem
                    icon={testDrive[0].title}
                    iconName='telephone'
                    subtitle={testDrive[0].subtitle}
                />
                <TestDrivePreporationsItem
                    icon={testDrive[1].title}
                    iconName='centimetres'
                    subtitle={testDrive[1].subtitle}
                />
                <TestDrivePreporationsItem
                    icon={testDrive[2].title}
                    iconName='clock'
                    subtitle={testDrive[2].subtitle}
                />
            </div>

            <div className="testdrive-video__wrapper">
                <div className="block">
                    <div className="title">Как мы проводим <br /> тест-драйв </div>
                    <p className='description'>Демонстрируем, как проходит выездной тест-драйв массажного кресла OHCO M.8 прямо у вас дома</p>
                </div>
                <div className="block">
                    <a onClick={() => setOpen(true)} className='video'>
                        <span></span>
                    </a>
                </div>
            </div>

          {open && <ModalYoutibe active={open} setActive={setOpen} />}
        </section>
    );
};

export default TestDrivePreporations;
