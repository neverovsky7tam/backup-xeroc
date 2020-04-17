import React, { useState } from 'react';
import ProductTile from './ProductTile';
import ProductList from './ProductList';
import Scroll from '../../Scroll/Scroll';
import ViewSwitcher from './ViewSwitcher';
import { calcToScroll } from '../../Scroll/Scroll';
import { productsData } from '../../../../data/productsData';

const HomeOnsale = () => {
  const [view, setView] = useState(true);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const productsBulk = productsData.concat(productsData, productsData, productsData);

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current, scrollThumb);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  }

  return (
    <section className="onsale home-page">
      <div className="main-header">
        <h2>on sale</h2>
        <div className="main-header__right">
          <ViewSwitcher view={view} setView={setView} />
        </div>
      </div>
      <div className="onsale__body main-body">
        <ul
          className="products scroll-container"
          ref={scrollBlock}
          onScroll={setScroll}>
          {(view) ? <ProductTile data={productsBulk} /> : <ProductList data={productsBulk} />}
        </ul>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  )
}

export default HomeOnsale;