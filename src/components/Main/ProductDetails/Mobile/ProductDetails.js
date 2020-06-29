import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TitleBlock from '../../../BlocksUI/TitleBlock';
import Container from '../../../BlocksUI/Container';
import OnSale from './OnSale';
import Description from '../Description';
import SellerInfo from '../SellerInfo';
import Specifications from '../Specifications';
import { ReactComponent as Dots } from '../../../../assets/img/3dots.svg';

const ProductDetails = () => {
  const item = useSelector((state) => state.currentProduct);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });

  return (
    <>
      <div className="details-onsale">
        <TitleBlock text={'On sale'} icon={<Dots />} style={{ marginTop: '0' }} />
        <OnSale item={item} />
      </div>
      <div className="details-description">
        <TitleBlock text={'Description & Shipping details'} icon={<Dots />} style={{ marginTop: '0' }} />
        <Container style={{ marginTop: '15px' }}>
          <Description item={item} />
        </Container>
        <Container style={{ marginTop: '15px' }}>
          <SellerInfo />
        </Container>
      </div>
      <div className="details-specifications">
        <TitleBlock text={'Specifications'} icon={<Dots />} style={{ marginTop: '0' }} />
        <Specifications item={item} />
      </div>
    </>
  );
};

export default ProductDetails;