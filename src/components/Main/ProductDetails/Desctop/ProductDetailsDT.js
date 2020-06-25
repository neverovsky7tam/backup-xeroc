import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../BlocksUI/Container';
import OnSaleDT from './OnSaleDT';
import Description from '../Description';
import SellerInfo from '../SellerInfo';

const ProductDetailsDT = () => {
  const item = useSelector((state) => state.currentProduct);

  return (
    <div className="details">
      <div className="details__left">
        <OnSaleDT item={item} />
      </div>
      <div className="details__right">
        <Container>
          <div className="description">
            <Description item={item} />
            <div className="seller-info">
              <h3>Seller’s info</h3>
            </div>
            <SellerInfo />
          </div>
        </Container>
      </div>
    </div>
  )
};

export default ProductDetailsDT;