import React from 'react';
import Header from "../components/Header/Header";
import Container from "../components/Container";
import DeliveryInfo from "../components/Delivery/DeliveryInfo";
import Footer from "../components/Footer/Footer";

const Delivery = () => {
  return (
      <>
          <Header/>
          <main>
              <Container>
                  <DeliveryInfo/>
              </Container>
          </main>
          <Footer/>
      </>
  );
};

export default Delivery;
