import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import setSliderItems from './ProductsSlider/setSliderItems';
import Controls from './Controls/Controls';
import Scroll from '../Scroll/Scroll';
import OnSale from './OnSale/OnSale';
import DescriptionShipping from './DescriptionShipping/DescriptionShipping';
import Specifications from './Specifications/Specifications';
import Coins from './Coins/Coins';
import ProductsSliderControls from './ProductsSlider/ProductsSliderControls';
import ProductsSlider from './ProductsSlider/ProductsSlider';
import { calcToScroll } from '../Scroll/Scroll';

const ProductDetails_DT = () => {
  const item = useSelector((state) => state.currentProduct);
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
        <Controls itemID={item.id} />
        <div
          className="scroll-container"
          style={{ paddingRight: '1px' }}
          ref={scrollBlock}
          onScroll={setScroll}>
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
          <section>
            <div className="details-header-combine">
              <div className="magic-header">
                <h2>related products</h2>
              </div>
              <ProductsSliderControls itemsWrapper={relatedItemsWrapper} />
            </div>
            <div className="content-wrapper">
              <ProductsSlider items={relatedProducts} ref={relatedItemsWrapper} />
            </div>
          </section>
          <section>
            <div className="details-header-combine">
              <div className="magic-header">
                <h2>recently viewed</h2>
              </div>
              <ProductsSliderControls itemsWrapper={recentlyItemsWrapper} />
            </div>
            <div className="content-wrapper">
              <ProductsSlider items={recentlyProducts} ref={recentlyItemsWrapper} />
            </div>
          </section>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </div>
  )
};

export default ProductDetails_DT;