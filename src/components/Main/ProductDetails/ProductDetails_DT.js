import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Controls from './Controls/Controls';
import Scroll from '../Scroll/Scroll';
import OnSaleDT from './OnSale/OnSale';
import DescriptionShipping from './DescriptionShipping/DescriptionShipping';
import Specifications from './Specifications/Specifications';
import Coins from './Coins/Coins';
import { calcToScroll } from '../Scroll/Scroll';

const ProductDetails_DT = () => {
  const item = useSelector((state) => state.currentProduct);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const description = React.createRef();
  const specifications = React.createRef();
  const coins = React.createRef();

  const setScroll = () => {
    const HEADER_HEIGHT = 50;
    const scroll = calcToScroll(scrollBlock.current, HEADER_HEIGHT);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  };

  useEffect(() => {
    description.current.style = '';
    specifications.current.style = '';
    description.current.style.height = `${description.current.clientHeight + 61}px`;
    specifications.current.style.height = `${specifications.current.clientHeight + 61}px`;
  });

  return (
    <div className="details">
      <div className="details__left">
        <OnSaleDT item={item} />
      </div>
      <div className="details__right">
        <Controls itemID={item.id} />
        <div
          className="scroll-container"
          ref={scrollBlock}
          onScroll={setScroll}>
          <div
            className="details-description"
            ref={description}>
            <div className="magic-header">
              <h2>DESCRIPTION & SHIPPING</h2>
            </div>
            <DescriptionShipping item={item} />
          </div>
          <div
            className="details-specifications"
            ref={specifications}>
            <div className="magic-header">
              <h2>specifications</h2>
            </div>
            <Specifications item={item} />
          </div>
          <div
            className="details-coins"
            ref={coins}>
            <div className="magic-header">
              <h2>minable coins</h2>
            </div>
            <Coins item={item} />
          </div>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </div>
  )
};

export default ProductDetails_DT;