import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Controls from './Controls';
import Scroll from '../../Scroll/Scroll';
import Container from '../../../BlocksUI/Container';
import OnSaleDT from './OnSaleDT';
import Description from '../Description';
import SellerInfo from '../SellerInfo';
import Specifications from '../Specifications';
import { calcToScroll } from '../../Scroll/Scroll';

const ProductDetailsDT = () => {
  const item = useSelector((state) => state.currentProduct);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const description = React.createRef();
  const specifications = React.createRef();

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
          <div className="description" ref={description}>
            <div className="magic-header">
              <h2>DESCRIPTION & SHIPPING</h2>
            </div>
            <Container>
              <div className="description-inner">
                <Description item={item} />
                <div className="seller-info-header">
                  <h3>Seller’s info</h3>
                </div>
                <SellerInfo />
              </div>
            </Container>
          </div>
          <div className="specifications" ref={specifications}>
            <div className="magic-header">
              <h2>specifications</h2>
            </div>
            <Specifications item={item} />
          </div>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </div>
  )
};

export default ProductDetailsDT;