import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const isMobile = useSelector((state) => state.deviceType);
  const product = useSelector((state) => state.currentProduct);
  console.log('product', product);

  return (
    <section className="general__center d-flex">
      <div className="general__center-right">
        <div className="main-header">
          <h2>on sale</h2>
        </div>
      </div>
      <div className="general__center-left">
        <div className="main-header">
          <h2>header</h2>
        </div>
      </div>
    </section>
  )
};

export default Details;