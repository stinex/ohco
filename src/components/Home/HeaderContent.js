import React from 'react';
import ButtonFillUI from "../../UI/components/ButtonFillUI";
import DeliveryIcon from "../../UI/icon/DeliveryIcon";
import WarrantyIcon from "../../UI/icon/WarrantyIcon";
import Container from "../Container";

const HeaderContent = () => {

  return (
    <Container>
      <section className='headerContent'>
        <div>
          <h3 className='headerContent__company-title'>OHCO M.8</h3>
          <h1 className='headerContent__title'>
            Японское <br/>
            массажное кресло <br/>
            от дизайнера Ferrari
          </h1>
          <ButtonFillUI>Записаться на бесплатный тест-драйв</ButtonFillUI>
          <div className='headerContent__subtitles'>
            <div className='headerContent__subtitles-item'>
              <DeliveryIcon/>
              <div className='headerContent__subtitles-text'>
                Бесплатная доставка<br/>
                и сборка в любой точке РФ
              </div>
            </div>
            <div className='headerContent__subtitles-item'>
              <WarrantyIcon/>
              <div className='headerContent__subtitles-text'>
                Официальная<br/>
                гарантия 5 лет
              </div>
            </div>
          </div>
        </div>
        <div className='headerContent__image'>
          <img src='/image/Home/home-main-armchair.png' alt='ohco-armchair'/>
        </div>
      </section>
    </Container>
  );
};

export default HeaderContent;
