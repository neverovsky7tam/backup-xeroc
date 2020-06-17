import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import renderProducts from '../../../utils/renderProducts';
import ProductTile from './ProductTile';
import ProductTileMobile from './ProductTileMobile';
import { ProductListHead, ProductList } from './ProductList';
import Scroll from '../Scroll/Scroll';
import ViewSwitcher from './ViewSwitcher';
import { calcToScroll } from '../Scroll/Scroll';
import { ReactComponent as Ads } from '../../../assets/img/ads_content.svg';

const OnSale = () => {
  const isMac = window.navigator.platform.toLowerCase().indexOf('mac') >= 0;
  const listClass = (isMac) ? 'products products_mac' : 'products';

  const isMobile = useSelector((state) => state.deviceType);

  const [view, setView] = useState(true);
  const scrollBlockStyle = (view) ? null : { paddingTop: '45px', boxSizing: 'border-box' };

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  };

  const setMobProductsList = (data) => {
    let dataMob = [];
    let counter = 0;
    data.forEach((el, idx) => {
      dataMob.push(el);
      counter += 1;
      if (counter % 5 === 0) dataMob.push({ id: Date.now() + idx, type: 'banner', content: Ads, });
    });

    return dataMob;
  };

  const productsObj = useSelector((state) => state.productsDisplay);
  const plugTextMarginLeft = (view) ? '30px' : '0';
  let content = <p style={{ marginLeft: plugTextMarginLeft }}>Sorry. No products to display</p>;

  if (productsObj.length) {
    const data = productsObj.slice();

    if (isMobile) {
      const dataMob = setMobProductsList(data);
      content = (
        <ul
          className="products">
          {renderProducts(ProductTileMobile, dataMob)}
        </ul>
      )
    } else {
      content = (
        <>
          {!view && <ProductListHead />}
          <div
            className="scroll-container"
            style={scrollBlockStyle}
            ref={scrollBlock}
            onScroll={setScroll}>
            <ul className={listClass}>
              {(view) ? renderProducts(ProductTile, data) : renderProducts(ProductList, data)}
            </ul>
          </div>
        </>
      )
    }
  };

  const bodyMarginLeft = (view) ? '0' : '30px';

  return (
    <section className="onsale general-block">
      {!isMobile && <div className="main-header">
        <h2 className="main-header__ml-30">on sale</h2>
        <div className="header-controls">
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