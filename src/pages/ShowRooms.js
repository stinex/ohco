import React from 'react';
import Header from "../components/Header/Header";
import ShowRoomsHome from "../components/ShowRooms/ShowRoomsHome";
import Address from "../components/Address/Address";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container";
import ShowRoomsDillers from "../components/ShowRooms/Diller/ShowRoomsDillers";
import ShowRoomsMap from "../components/ShowRooms/ShowRoomsMap";
import HeaderCustom from "../components/Header/HeaderCustom";
import ShopIcon from "../UI/icon/ShowRooms/ShopIcon";
import AddressText from "../components/Address/AddressText";
import ShowRoomsAddressInfo from "../components/ShowRooms/ShowRoomsAddressInfo";
import AddressShopWrapper from "../components/Address/AddressShopWrapper";
import AnyAddress from "../components/AnyAddress/AnyAddress";

const ShowRooms = () => {
  return (
      <>
          <HeaderCustom
              wrapper='background-showrooms'
              customContainer='showrooms-container'
          >
              <ShowRoomsHome/>
          </HeaderCustom>
          <main>
              <Container>
                  <AnyAddress
                      shop
                      page='showrooms'
                      content={1}
                      leftTitle={<>Адреса наших<br/> шоурумов</>}
                  />
                  <ShowRoomsDillers/>
                  <ShowRoomsMap/>
              </Container>
          </main>
          <Footer/>
      </>
  );
};

export default ShowRooms;
