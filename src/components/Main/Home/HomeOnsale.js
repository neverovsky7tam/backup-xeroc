import React from 'react';
import ProductList from './ProductList';
import Scroll from '../Scroll/Scroll';
import { calcToScroll } from '../Scroll/Scroll';
import { productsData } from '../../../data/productsData';

const HomeOnsale = () => {
  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const productsBulk = productsData.concat(productsData, productsData, productsData);

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current, scrollThumb);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  }

  return (
    <section className="onsale">
      <h2>on sale</h2>
      <div className="onsale__inner main-section-inner">
        <ul
          className="products scroll-container"
          ref={scrollBlock}
          onScroll={setScroll}>
          <ProductList data={productsBulk} />
        </ul>
        <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
      </div>
    </section>
  )
}

export default HomeOnsale;