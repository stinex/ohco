import React, {useEffect, useState} from 'react';
import ConveniencesItem from "./ConveniencesItem";
import ChairIcon from "../../../UI/icon/ChairIcon";
import BatteryIcon from "../../../UI/icon/BatteryIcon";
import TimeIcon from "../../../UI/icon/TimeIcon";
import {useVisibleContext} from "../../../lib/context/VisibleContentCTX";
import BackgroundWrapper from "../../BackgroundWrapper";
import Scroll from "../../Scroll";
import ScrollContent from "../../ScrollContent";

const Conveniences = () => {


  const {contentVisible} = useVisibleContext()

  const contentArr = [
    {id: 1, icon: ChairIcon, subtitle: <>После напряженной<br/>и долгой сидячей работы</>, active: false},
    {id: 2, icon: ChairIcon, subtitle: <>После напряженной<br/>и долгой сидячей работы</>, active: true},
    {id: 3, icon: BatteryIcon, subtitle: <>Если хотите скорее <br/> восполнить запас энергии</>, active: false},
    {id: 4, icon: BatteryIcon, subtitle: <>Если хотите скорее <br/> восполнить запас энергии</>, active: true},
    {id: 5, icon: TimeIcon, subtitle: <>Когда нужно размяться <br/> и повысить продуктивность</>, active: false},
    {id: 6, icon: TimeIcon, subtitle: <>Когда нужно размяться <br/> и повысить продуктивность</>, active: true},
  ]

  const startView = 6
  const endView = 1

  const rotateImage = {
    transform: `translate(-50%, -50%) rotate(${(contentVisible - 1) * 90}deg)`
  }

  return (
    <BackgroundWrapper wrapper='conveniences'>
      <Scroll contentBlocks={6} start={1} end={6}>
        <img
            style={rotateImage}
            src='/image/home/home-track.png'
            alt='track'
            className='conveniences__image'
        />
        <ScrollContent
          arr={contentArr}
          component={ConveniencesItem}
        />
      </Scroll>
    </BackgroundWrapper>
  );
}

export default Conveniences;
