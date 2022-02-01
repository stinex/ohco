import React from 'react';
import {useVisibleContext} from "../lib/context/VisibleContentCTX";

const Scroll = ({contentBlocks, children, start, end}) => {

  const {contentVisible, onWheel, searchItem, scrollDirection} = useVisibleContext()

  const directionClass = scrollDirection === 'bottom' ? 'scroll-bottom' : 'scroll-top'


  const isRef = contentVisible >= start && contentVisible < end

  console.log(isRef, searchItem);



  return (
    <div
      className='visible__position'
      onWheel={(e) => onWheel(e, contentBlocks)}
    >
      {children}
      {isRef && <div ref={searchItem} className={directionClass}/>}
    </div>
  );
};

export default Scroll;
