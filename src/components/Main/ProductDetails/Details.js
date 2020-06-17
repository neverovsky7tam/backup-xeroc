import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const product = useSelector((state) => state.currentProduct);
  console.log('product', product);

  return (
    <section>
      details
    </section>
  )
};

export default Details;