import React, { useState } from 'react';
import renderProducts from './renderProducts';
import ProductTile from './ProductTile';
import { ProductListHead, ProductList } from './ProductList';
import Scroll from '../../Scroll/Scroll';
import ViewSwitcher from './ViewSwitcher';
import { calcToScroll } from '../../Scroll/Scroll';

const HomeOnsale = ({ productsObj }) => {
  const [view, setView] = useState(true);
  const scrollBlockStyle = (view) ? null : { paddingTop: '45px', boxSizing: 'border-box' };

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const data = productsObj.concat(productsObj, productsObj, productsObj);

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  }

  const bodyMarginLeft = (view) ? '0' : '30px';

  return (
    <section className="onsale home-page">
      <div className="main-header">
        <h2>on sale</h2>
        <div className="main-header__right">
          <ViewSwitcher view={view} setView={setView} />
        </div>
      </div>
      <div className="onsale__body main-body" style={{ marginLeft: bodyMarginLeft }}>
        {!view && <ProductListHead />}
        <ul
          className="products scroll-container"
          style={scrollBlockStyle}
          ref={scrollBlock}
          onScroll={setScroll}>
          {(view) ? renderProducts(ProductTile, data) : renderProducts(ProductList, data)}
        </ul>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  )
}

export default HomeOnsale;