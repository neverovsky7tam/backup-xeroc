import React, { useState } from 'react';
import store from 'store/store';
import { useSelector } from 'react-redux';
import renderProducts from 'utils/renderProducts';
import ProductTile from 'components/ProductTile';
import ProductTileMobile from 'components/ProductTileMobile';
import { ProductListHead, ProductList } from 'components/ProductList';
import Scroll from 'components/Scroll/Scroll';
import ViewSwitcher from 'components/ViewSwitcher';
import { calcToScroll } from 'components/Scroll/Scroll';
import { AdsSvg } from 'svg/svgAds';

const OnSale = () => {
  const isMac = window.navigator.platform.toLowerCase().indexOf('mac') >= 0;
  const listClass = (isMac) ? 'products products_mac' : 'products';

  const isMobile = useSelector((state) => state.deviceType);

  const isGridView = store.getState().productsListType;
  const [view, setView] = useState(isGridView);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();
  const scrollBlockStyle = (view) ? null : { paddingTop: '45px', boxSizing: 'border-box' };
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
      if (counter % 5 === 0) dataMob.push({ id: Date.now() + idx, type: 'banner', content: AdsSvg, });
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
            <ul className={listClass} style={view ? {} : { display: 'block', margin: '0' }}>
              {(view) ? renderProducts(ProductTile, data) : renderProducts(ProductList, data)}
            </ul>
          </div>
        </>
      )
    }
  };

  const bodyMarginLeft = (view) ? '0' : '30px';

  return (
    <>
      {
        !isMobile && <div className="main-header">
          <h2 className="main-header__ml-30">on sale</h2>
          <div className="header-controls">
            <ViewSwitcher view={view} setView={setView} />
          </div>
        </div>
      }
      <div className="onsale main-body" style={{ marginLeft: bodyMarginLeft }}>
        {content}
      </div>
      {!isMobile && <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />}
    </>
  );
};

export default OnSale;