import React, { useState } from 'react';
import ProductList from './ProductList';
import Scroll from '../Scroll/Scroll';
import { calcToScroll } from '../Scroll/Scroll';
import { productsData } from '../../../data/productsData';

const HomeOnsale = () => {
  console.log('run');
  const [toScroll, setScroll] = useState(0);
  const scrollBlock = React.createRef();

  const getScroll = () => {
    const scroll = calcToScroll(scrollBlock);
    setScroll(scroll);
  }

  const productsBulk = productsData.concat(productsData, productsData, productsData);

  return (
    <section className="onsale">
      <h2>on sale</h2>
      <div className="onsale__inner main-section-inner">
        <ul
          className="products scroll-container"
          ref={scrollBlock}
          onScroll={getScroll}>
          <ProductList data={productsBulk} />
        </ul>
        <Scroll top={toScroll} />
      </div>
    </section>
  )
}

export default HomeOnsale;