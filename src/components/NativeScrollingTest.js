import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  wrapper: {
    overflow: "hidden",
    backgroundColor: '#111111',
    transition: '1s all ease-in'
  }
}))

const NativeScrollingTest = ({children}) => {

  const classes = useStyles();

  const [slide, setSlide] = useState(0)
  const [heightArr, setHeightArr] = useState([])
  const [touchStart, setTouchStart] = useState('')
  const currentHeight = slide ? JSON.parse(JSON.stringify(heightArr))?.splice(0, slide)?.reduce((a, b) => a + b, 0) : 0

  const wrapper = useRef();

  const generateElementHeightArr = (wrapper) => {
    const length = wrapper.current.children.length
    const nodeArr = wrapper.current.children
    if (length) {
      const arr = []
      for (let i = 0; i < length; i++) {
        if (nodeArr[i]?.children.length > 1) {
          for (let j = 0; j < nodeArr[i]?.children.length; j++) {
            arr.push(nodeArr[i]?.children[j].offsetHeight)
          }
        } else {
          arr.push(nodeArr[i].offsetHeight)
        }
      }

      if (arr.length) {
        setHeightArr(arr)
      }
    }
  }


  const handleWheel = (e) => {
    console.log(e.target)
    if (e.target.deltaY > 0) {
      console.log(1)
    } else {
      console.log(2)
    }
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY)
  }

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientY;
    if (touchStart > touchEnd) {
      if (slide <= heightArr.length) {
        window.scrollTo(0, 0)
        setSlide(prevState =>  prevState + 1)
      }
    } else {
      if (slide > 0) {
        setSlide(prevState =>  prevState - 1)
      }
    }
  }

  useEffect(() => {
    generateElementHeightArr(wrapper)
  }, [wrapper])

  console.log(heightArr[slide], heightArr);

  return (
    <div
      style={
        {
          height: heightArr[slide],
        }
      }
      className={classes.wrapper}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={wrapper}
        style={
          {
            transition: '1s all ease-in',
            height: heightArr[slide],
            transform: `translateY(-${slide === 0 ? 0 : currentHeight}px)`
          }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default NativeScrollingTest;
