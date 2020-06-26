import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../BlocksUI/Container';
import OnSaleDT from './OnSaleDT';
import Description from '../Description';
import SellerInfo from '../SellerInfo';
import Controls from './Controls';
import Scroll from '../../Scroll/Scroll';
import { calcToScroll } from '../../Scroll/Scroll';

const ProductDetailsDT = () => {
  const item = useSelector((state) => state.currentProduct);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const HEADER_HEIGHT = 50;
    const scroll = calcToScroll(scrollBlock.current, HEADER_HEIGHT);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  };

  return (
    <div className="details">
      <div className="details__left">
        <OnSaleDT item={item} />
      </div>
      <div className="details__right">
        <Controls />
        <div
          className="scroll-container"
          ref={scrollBlock}
          onScroll={setScroll}>
          <div className="description">
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
          <div className="specifications">
            <div className="magic-header">
              <h2>specifications</h2>
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
          <div className="specifications">
            <div className="magic-header">
              <h2>minable coins</h2>
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
          <div className="specifications">
            <div className="magic-header">
              <h2>Related products</h2>
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
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </div>
  )
};

export default ProductDetailsDT;