import React from 'react';
import { useSelector } from 'react-redux';
import Description from './Description';
import SellerInfo from './SellerInfo';
import Container from '../../../BlocksUI/Container';

const DescriptionShipping = ({ item }) => {
  const isMobile = useSelector((state) => state.deviceType);

  if (isMobile) {
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
  } else {
    return (
      <Container>
        <div className="description-shipping">
          <Description item={item} />
          <div className="seller-info-header">
            <h3>Seller’s info</h3>
          </div>
          <SellerInfo />
        </div>
      </Container>
    );
  };
};

export default DescriptionShipping;