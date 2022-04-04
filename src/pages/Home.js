import React from 'react';
import Footer from "../components/Footer/Footer";
import HomeMain from "../components/NEWHome/HomeMain";
import HomeVideo from "../components/NEWHome/HomeVideo";
import HomeMassage from "../components/NEWHome/HomeMassage";
import HomeSympathy from "../components/NEWHome/HomeSympathy/HomeSympathy";
import HomeAdvantage from "../components/NEWHome/HomeAdvantage/HomeAdvantage";
import HomeSlider from "../components/NEWHome/HomeSlider/HomeSlider";
import HomeParallax from "../components/NEWHome/HomeParallax";
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
import { changeSympathy} from "../lib/constants/changeConents";


const Home = () => {



  return (
    <>
      <HomeMain/>
      <main>
        {/* <ChangeContent
          trigger='gsap-rest'
          endTrigger='home-video'
          handleChange={changeRest}
        >
          <HomeRest/>
        </ChangeContent> */}

        <HomeVideo/>
        <HomeMassage/>
        <ChangeContent
          trigger='gsap-sympathy'
          endTrigger='home-advantage'
          handleChange={changeSympathy}
        >
          <HomeSympathy/>
        </ChangeContent>
       
        <HomeAdvantage/>
        <HomeSlider/>
        <HomeParallax/>
        
        <HomeTechnology/>
        <HomeForm/>
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
