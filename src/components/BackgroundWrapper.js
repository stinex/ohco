import React from 'react';
import Container from "./Container";

const BackgroundWrapper = ({children, wrapper, customContainer}) => {

  return (
    <div className={wrapper}>
      <Container className={customContainer}>
        {children}
      </Container>
    </div>
  );
};

export default BackgroundWrapper;
