import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import renderProducts from './renderProducts';
import ProductTile from './ProductTile';
import ProductTileMobile from './ProductTileMobile';
import { ProductListHead, ProductList } from './ProductList';
import Scroll from '../Scroll/Scroll';
import ViewSwitcher from './ViewSwitcher';
import { calcToScroll } from '../Scroll/Scroll';

const OnSale = () => {
  window.addEventListener('scroll', (e) => {
    console.log('scroll');
  })
  const isMobile = useSelector((state) => state.deviceType);

  const [view, setView] = useState(true);
  const scrollBlockStyle = (view) ? null : { paddingTop: '45px', boxSizing: 'border-box' };

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  }

  const productsObj = useSelector((state) => state.productsDisplay);
  const plugTextMarginLeft = (view) ? '30px' : '0';
  let content = <p style={{ marginLeft: plugTextMarginLeft }}>Sorry. No products to display</p>;

  if (productsObj.length) {
    const data = productsObj;

    if (isMobile) {
      content = (
        <ul
          className="products">
          {renderProducts(ProductTileMobile, data)}
        </ul>
      )
    } else {
      content = (
        <>
          {!view && <ProductListHead />}
          <ul
            className="products scroll-container"
            style={scrollBlockStyle}
            ref={scrollBlock}
            onScroll={setScroll}>
            {(view) ? renderProducts(ProductTile, data) : renderProducts(ProductList, data)}
          </ul>
        </>
      )
    }
  };

  const bodyMarginLeft = (view) ? '0' : '30px';

  return (
    <section className="onsale home-page">
      {!isMobile && <div className="main-header">
        <h2 className="onsale__header">on sale</h2>
        <div className="main-header__right">
          <ViewSwitcher view={view} setView={setView} />
        </div>
      </div>}
      <div className="onsale__body main-body" style={{ marginLeft: bodyMarginLeft }}>
        {content}
      </div>
      {!isMobile && <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />}
    </section>
  )
}

export default OnSale;