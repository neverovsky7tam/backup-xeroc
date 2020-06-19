import React from 'react';
import DetailsOnSale from './components/DetailsOnSale';

const ProductDetails = () => {

  return (
    <section className="general__center details">
      <DetailsOnSale />
      <div className="general__center-left">
        <div className="main-header">
          <h2>header</h2>
        </div>
      </div>
    </section>
  )
};

export default ProductDetails;