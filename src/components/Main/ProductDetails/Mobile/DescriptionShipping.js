import React from 'react';
import Description from '../Description';
import SellerInfo from '../SellerInfo';
import Container from '../../../BlocksUI/Container';

const DescriptionShipping = ({ item }) => {
  return (
    <>
      <Container style={{ marginTop: '15px' }}>
        <Description item={item} />
      </Container>
      <Container style={{ marginTop: '15px' }}>
        <SellerInfo />
      </Container>
    </>
  );
};

export default DescriptionShipping;