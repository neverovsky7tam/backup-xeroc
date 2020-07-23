import React, { useState } from 'react';
import Scroll, { calcToScroll } from 'components/Scroll/Scroll';
import Controls from './modules/Controls';
import OnSale from './modules/OnSale/OnSaleDT';
import DescriptionShipping from './modules/DescriptionShipping';
import Specifications from './modules/Specifications';
import Coins from './modules/Coins';
import ProductsSlider from './modules/ProductsSlider';
import ProductsSliderControls from './modules/ProductsSlider/ProductsSliderControls';
import setSliderItems from './modules/ProductsSlider/setSliderItems';

const ProductDetailsDT = ({ item, links }) => {
  const [currentHash, setCurrentHash] = useState(item.hash.value[0].h);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();
  const relatedItemsWrapper = React.createRef();
  const recentlyItemsWrapper = React.createRef();

  const setScroll = () => {
    const HEADER_HEIGHT = 50;
    const scroll = calcToScroll(scrollBlock.current, HEADER_HEIGHT);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  };

  const relatedProducts = setSliderItems(item, 'related');
  const recentlyProducts = setSliderItems(item);

  return (
    <div className="details">
      <section className="details__left">
        <OnSale
          item={item}
          currentHash={currentHash}
          setCurrentHash={setCurrentHash} />
      </section>
      <div className="details__right">
        {/* <Controls links={links} /> */}
        <div
          className="scroll-container"
          style={{ paddingRight: '1px' }}
          ref={scrollBlock}
          onScroll={setScroll}>
          <div className="details__main">
            <div className="pdp-controls-wrapper">
              <Controls links={links} />
            </div>
            <div className="details__main-inner">
              <section>
                <div className="magic-header">
                  <h2>DESCRIPTION & SHIPPING</h2>
                </div>
                <div className="content-wrapper">
                  <DescriptionShipping item={item} />
                </div>
              </section>
              <section>
                <div className="magic-header">
                  <h2>specifications</h2>
                </div>
                <div className="content-wrapper">
                  <Specifications item={item} />
                </div>
              </section>
              <section>
                <div className="magic-header">
                  <h2>minable coins</h2>
                </div>
                <div className="content-wrapper">
                  <Coins item={item} currentHash={currentHash} />
                </div>
              </section>
            </div>
          </div>
          <div className="details__footer">
            <section>
              <div className="magic-header d-flex justify-content-between">
                <h2>related products</h2>
                <ProductsSliderControls itemsWrapper={relatedItemsWrapper} />
              </div>
              <div className="content-wrapper">
                <ProductsSlider items={relatedProducts} ref={relatedItemsWrapper} />
              </div>
            </section>
            <section>
              <div className="magic-header d-flex justify-content-between">
                <h2>recently viewed</h2>
                <ProductsSliderControls itemsWrapper={recentlyItemsWrapper} />
              </div>
              <div className="content-wrapper">
                <ProductsSlider items={recentlyProducts} ref={recentlyItemsWrapper} />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </div>
  )
};

export default ProductDetailsDT;