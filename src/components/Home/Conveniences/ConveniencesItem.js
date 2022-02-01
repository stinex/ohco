import React from 'react';

const ConveniencesItem = ({icon, subtitle, active}) => {

  const Icon = icon;

  const subtitleClass = active ?
    'conveniences__subtitle'
    : 'conveniences__subtitle conveniences__subtitle--disabled'


  return (
    <section className='conveniences__wrapper'>
      <h2 className='conveniences__title'>
        Почувствуйте себя <br/>
        отдохнувшим
      </h2>
      <div className='conveniences__icon'>
        <div className='conveniences__track'>
          <Icon/>
        </div>
      </div>
      <h5 className={subtitleClass}>
        {subtitle}
      </h5>
    </section>
  );
};

export default ConveniencesItem;
