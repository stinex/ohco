import React from 'react';

const mzArr = [
  {
    title: 'Основные',
    arr: [
      "Приветственное освещение «оазис света»",
      "откидывающиеся подлокотники",
      "отделка премиальной кожей повышенной износостойкости",
      "механизм DeltaWave",
      "аромотерапия",
      "увеличенная массажная каретка MaxTrack",
      "обволакивающий и растягивающий массаж шеи",
      "ионизатор воздуха",
      "генератор белого шума",
      "аудиопогружение",
      "Bluetooth",
      "встроенный USB-порт",
      "функция Link massage",
      "3D-сканирование",
      "настройка под рост пользователя",
      "настройки интенсивности и скорости массажа в каждой зоне",
      "пульт ДУ на русском языке",
      "настраиваемый и отключаемый ИК-прогрев"
    ]
  },
  {
    title: 'Виды массажа',
    arr: [
      "обволакивающий массаж рук",
      "терапевтический и релаксационный массаж",
      "скручивающий массаж для талии",
      "воздушно-компрессионный массаж всего тела",
      "массаж Шиацу",
      "массаж в положении «нулевой гравитации»",
      "растирающий массаж икр и голени",
      "роликовый массаж стоп с подогревом",
      "массаж голеней Theraelliptical"
    ]
  }
]

const MassageZoneDialog = () => {
  return (
    <div className='modal__mz'>
      <h6 className='modal__mz-title'>Характеристики</h6>
      <div className='modal__mz-wrapper'>
        {mzArr.map(item => (
          <div key={item.title} className='modal__mz-item'>
            <div className='modal__mz-name'>
              {item.title}
            </div>
            <ul className='modal__mz-list'>
              {item.arr.map(item => (
                <li key={item} className='modal__mz-subtitle'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassageZoneDialog;
