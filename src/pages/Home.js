import React from 'react';
import Footer from "../components/Footer/Footer";
import HomeMain from "../components/NEWHome/HomeMain";
import HomeRest from "../components/NEWHome/HomeRest/HomeRest";
import HomeVideo from "../components/NEWHome/HomeVideo";
import HomeMassage from "../components/NEWHome/HomeMassage";
import HomeSympathy from "../components/NEWHome/HomeSympathy/HomeSympathy";
import HomeAdvantage from "../components/NEWHome/HomeAdvantage/HomeAdvantage";
import HomeSlider from "../components/NEWHome/HomeSlider/HomeSlider";
import HomeParallax from "../components/NEWHome/HomeParallax";
import HomeFeatures from "../components/NEWHome/HomeFeatures/HomeFeatures";
import HomeTechnology from "../components/NEWHome/HomeTechnology/HomeTechnology";
import HomeForm from "../components/NEWHome/HomeForm/HomeForm";
import HomeStone from "../components/NEWHome/HomeStone/HomeStone";
import HomeSpace from "../components/NEWHome/HomeSpace";
import HomeComplex from "../components/NEWHome/HomeComplex/HomeComplex";
import HomeDesigner from "../components/NEWHome/HomeDesigner/HomeDesigner";
import HomeMaster from "../components/NEWHome/HomeMaster/HomeMaster";
import HomeMassageZone from "../components/NEWHome/HomeMassageZone/HomeMassageZone";
import HomeComfort from "../components/NEWHome/HomeComfort/HomeComfort";
import HomeDelivery from "../components/NEWHome/HomeDelivery/HomeDelivery";
import HomeDreams from "../components/NEWHome/HomeDreams/HomeDreams";
import ChangeContent from "../components/ChangeContent";
import {changeRest, changeSympathy} from "../lib/constants/changeConents";
import HomeSwiper from "../components/NEWHome/HomeSwiper/HomeSwiper";
import {SwiperSlide} from 'swiper/react'
import HomeSwiperNullSpeed from "../components/NEWHome/HomeSwiper/HomeSwiperNullSpeed";
import ReactFullpage from '@fullpage/react-fullpage';

const Home = () => {


  // return (
  //   <NativeScrollingTest>
  //     <>
  //       <HomeMain/>
  //       <main>
  //         {/*<ChangeContent/>*/}
  //         {/*<AnimationBlock scrollTo={scroll} maxContent={5}>*/}
  //         {/*</AnimationBlock>*/}
  //         {/*<ChangeContent*/}
  //         {/*  trigger='gsap-rest'*/}
  //         {/*  endTrigger='home-video'*/}
  //         {/*  handleChange={changeRest}*/}
  //         {/*>*/}
  //         {/*  <HomeRest/>*/}
  //         {/*</ChangeContent>*/}
  //         <ChangeContent
  //           trigger='gsap-rest'
  //           endTrigger='home-video'
  //           handleChange={changeRest}
  //         >
  //           <HomeRest/>
  //         </ChangeContent>
  //         {/*<HomeRest/>*/}
  //         <HomeVideo/>
  //         <HomeMassage/>
  //         <ChangeContent
  //           trigger='gsap-sympathy'
  //           endTrigger='home-advantage'
  //           handleChange={changeSympathy}
  //         >
  //           <HomeSympathy/>
  //         </ChangeContent>
  //         {/*<HomeSympathy/>*/}
  //         <HomeAdvantage/>
  //         <HomeSlider/>
  //         <HomeParallax/>
  //         {/*<ChangeContent*/}
  //         {/*    trigger='gsap-features'*/}
  //         {/*    endTrigger='home-technology'*/}
  //         {/*    handleChange={changeTechnology}*/}
  //         {/*    elements={7}*/}
  //         {/*>*/}
  //         {/*    <HomeFeatures/>*/}
  //         <HomeFeatures/>
  //         {/*</ChangeContent>*/}
  //         {/*<ChangeContent*/}
  //         {/*    trigger='gsap-technology'*/}
  //         {/*    endTrigger='home-form'*/}
  //         {/*    handleChange={changeTechnology}*/}
  //         {/*>*/}
  //         {/*    <HomeTechnology/>*/}
  //         {/*</ChangeContent>*/}
  //         <HomeTechnology/>
  //         <HomeForm/>
  //         {/*<ChangeContent*/}
  //         {/*    trigger='gsap-stone'*/}
  //         {/*    endTrigger='home-space'*/}
  //         {/*>*/}
  //         {/*    <HomeStone/>*/}
  //         {/*</ChangeContent>*/}
  //         <HomeStone/>
  //         <HomeSpace/>
  //         {/*<ChangeContent*/}
  //         {/*    trigger='gsap-complex'*/}
  //         {/*    endTrigger='home-designer'*/}
  //         {/*    handleChange={changeComplex}*/}
  //         {/*    >*/}
  //         {/*    <HomeComplex/>*/}
  //         {/*</ChangeContent>*/}
  //         <HomeComplex/>
  //         <HomeDesigner/>
  //         <HomeMaster/>
  //         <HomeMassageZone/>
  //         <HomeComfort/>
  //         <HomeDelivery/>
  //         <HomeDreams/>
  //       </main>
  //       <Footer/>
  //     </>
  //   </NativeScrollingTest>
  // )


  // return (
  //   <ReactFullpage
  //     //fullpage options
  //     scrollingSpeed={1000} /* Options here */
  //     scrollOverflow={true}
  //     render={({ state, fullpageApi }) => {
  //       console.log(state, fullpageApi)
  //       return (
  //         <ReactFullpage.Wrapper>
  //           <header className="section">
  //             <HomeMain/>
  //           </header>
  //           <div className="section">
  //             <HomeRest/>
  //           </div>
  //           <div className="section">
  //             <HomeVideo/>
  //           </div>
  //           <div className="section">
  //             <HomeMassage/>
  //           </div>
  //           <div className="section">
  //             <HomeSympathy/>
  //           </div>
  //           <div className="section">
  //             <HomeAdvantage/>
  //           </div>
  //           <div className="section">
  //             <HomeSlider/>
  //           </div>
  //           <div className="section">
  //             <HomeParallax/>
  //           </div>
  //           <div className="section">
  //             <HomeFeatures/>
  //           </div>
  //           <div className="section">
  //             <HomeTechnology/>
  //           </div>
  //           <div className="section">
  //             <HomeForm/>
  //           </div>
  //           <div className="section">
  //             <HomeStone/>
  //           </div>
  //           <div className="section">
  //             <HomeSpace/>
  //           </div>
  //           <div className="section">
  //             <HomeComplex/>
  //           </div>
  //           <div className="section">
  //             <HomeDesigner/>
  //             <HomeMaster/>
  //             <HomeMassageZone/>
  //           </div>
  //           <div className="section">
  //             <HomeComfort/>
  //             <HomeDelivery/>
  //           </div>
  //           <div className="section">
  //             <HomeDreams/>
  //           </div>
  //           <div className="section">
  //             <Footer/>
  //           </div>
  //         </ReactFullpage.Wrapper>
  //       );
  //     }}
  //   />
  // )


  // return (
  //   <>
  //     <HomeSwiper>
  //       <SwiperSlide style={{height: "auto"}}>
  //         <HomeMain/>
  //       </SwiperSlide>
  //       <HomeSwiperNullSpeed>
  //         <div style={{position: 'relative'}}>
  //           <ChangeContent
  //             trigger='gsap-rest'
  //             endTrigger='home-video'
  //             handleChange={changeRest}
  //           >
  //             <HomeRest/>
  //           </ChangeContent>
  //         </div>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeVideo/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeMassage/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeSympathy/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeAdvantage/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeSlider/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeParallax/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeFeatures/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeTechnology/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeForm/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeStone/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeSpace/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeComplex/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeDesigner/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeMaster/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeMassageZone/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeComfort/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeDelivery/>
  //         </SwiperSlide>
  //         <SwiperSlide style={{height: "auto"}}>
  //           <HomeDreams/>
  //         </SwiperSlide>
  //       </HomeSwiperNullSpeed>
  //     </HomeSwiper>
  //   </>
  // )


  return (
    <>
      <HomeMain/>
      <main>
        {/*<ChangeContent/>*/}
        {/*<AnimationBlock scrollTo={scroll} maxContent={5}>*/}
        {/*</AnimationBlock>*/}
        <ChangeContent
          trigger='gsap-rest'
          endTrigger='home-video'
          handleChange={changeRest}
        >
          <HomeRest/>
        </ChangeContent>
        {/*<HomeRest/>*/}
        {/*<HomeRest/>*/}
        <HomeVideo/>
        <HomeMassage/>
        <ChangeContent
          trigger='gsap-sympathy'
          endTrigger='home-advantage'
          handleChange={changeSympathy}
        >
          <HomeSympathy/>
        </ChangeContent>
        {/*<HomeSympathy/>*/}
        <HomeAdvantage/>
        <HomeSlider/>
        <HomeParallax/>
        {/*<ChangeContent*/}
        {/*    trigger='gsap-features'*/}
        {/*    endTrigger='home-technology'*/}
        {/*    handleChange={changeTechnology}*/}
        {/*    elements={7}*/}
        {/*>*/}
        {/*    <HomeFeatures/>*/}
        <HomeFeatures/>
        {/*</ChangeContent>*/}
        {/*<ChangeContent*/}
        {/*    trigger='gsap-technology'*/}
        {/*    endTrigger='home-form'*/}
        {/*    handleChange={changeTechnology}*/}
        {/*>*/}
        {/*    <HomeTechnology/>*/}
        {/*</ChangeContent>*/}
        <HomeTechnology/>
        <HomeForm/>
        {/*<ChangeContent*/}
        {/*    trigger='gsap-stone'*/}
        {/*    endTrigger='home-space'*/}
        {/*>*/}
        {/*    <HomeStone/>*/}
        {/*</ChangeContent>*/}
        <HomeStone/>
        <section className='background-home-white'>
          <HomeSpace/>
          <HomeComplex/>
        </section>
        <HomeDesigner/>
        <HomeMaster/>
        <HomeMassageZone/>
        <HomeComfort/>
        <HomeDelivery/>
        <HomeDreams/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
