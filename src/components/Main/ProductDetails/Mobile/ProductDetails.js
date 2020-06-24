import React from 'react';
import { useDispatch } from 'react-redux';
// import { setPageTopState } from '../../../../store/actions';
import DetailsOnSale from './DetailsOnSale';

const ProductDetails = () => {
  // useDispatch()(setPageTopState('Details'));

  return (
    <div className="mobile-wrapper">
      <DetailsOnSale />
    </div>
  )
};

export default ProductDetails;