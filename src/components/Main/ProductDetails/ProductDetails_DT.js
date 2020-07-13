import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Controls from './Controls/Controls';
import Scroll from '../Scroll/Scroll';
import OnSale from './OnSale/OnSale';
import DescriptionShipping from './DescriptionShipping/DescriptionShipping';
import Specifications from './Specifications/Specifications';
import Coins from './Coins/Coins';
import RelatedControlsDT from './Related/RelatedControlsDT';
import Related from './Related/Related';
import { calcToScroll } from '../Scroll/Scroll';

const ProductDetails_DT = () => {
  const item = useSelector((state) => state.currentProduct);
  const [currentHash, setCurrentHash] = useState(item.hash.value[0].h);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const description = React.createRef();
  const specifications = React.createRef();
  const coins = React.createRef();
  const related = React.createRef();
  const relatedItemsWrapper = React.createRef();

  const setScroll = () => {
    const HEADER_HEIGHT = 50;
    const scroll = calcToScroll(scrollBlock.current, HEADER_HEIGHT);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  };

  useEffect(() => {
    description.current.style = '';
    specifications.current.style = '';
    coins.current.style = '';
    related.current.style = '';
    description.current.style.height = `${description.current.clientHeight + 60}px`;
    specifications.current.style.height = `${specifications.current.clientHeight + 60}px`;
    coins.current.style.height = `${coins.current.clientHeight + 60}px`;
    related.current.style.height = `${related.current.clientHeight + 60}px`;
  });

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
          <section
            className="details-description"
            ref={description}>
            <div className="magic-header">
              <h2>DESCRIPTION & SHIPPING</h2>
            </div>
            <DescriptionShipping item={item} />
          </section>
          <section
            className="details-specifications"
            ref={specifications}>
            <div className="magic-header">
              <h2>specifications</h2>
            </div>
            <Specifications item={item} />
          </section>
          <section
            className="details-coins"
            ref={coins}>
            <div className="magic-header">
              <h2>minable coins</h2>
            </div>
            <Coins item={item} currentHash={currentHash} />
          </section>
          <section
            className="details-related"
            ref={related}>
            <div className="related-header">
              <div className="magic-header">
                <h2>related products</h2>
              </div>
              <RelatedControlsDT itemsWrap={relatedItemsWrapper} />
            </div>
            <Related item={item} ref={relatedItemsWrapper} />
          </section>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </div>
  )
};

export default ProductDetails_DT;