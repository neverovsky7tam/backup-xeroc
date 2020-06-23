import React from 'react';
import DetailsOnSaleDT from './DetailsOnSaleDT';

const ProductDetailsDT = () => {
  return (
    <section className="general__center">
      <div className="details">
        <DetailsOnSaleDT />
        <div className="details__left">
          <div className="main-header">
            <h2>header</h2>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProductDetailsDT;