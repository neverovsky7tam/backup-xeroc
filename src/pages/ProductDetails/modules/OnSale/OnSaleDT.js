import React, { useState } from 'react';
import { productsProcessing } from 'utils/renderProducts';
import TitleBlock from 'components/BlocksUI/TitleBlock';
import DropList from 'components/BlocksUI/DropList';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { Facebook, Twitter, Reddit } from 'components/Socials/Socials';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { ProductStar, ProductHalfStar, ToggleArrow } from 'svg/svg';

const OnSaleDT = ({ item, currentHash, setCurrentHash }) => {
  const itemProcessed = productsProcessing(item);
  const [price, setPrice] = useState(item.hash.value[0].price);
  const [listState, setListState] = useState(false);
  const [productCounter, setProductCounter] = useState(1);

  const renderHashList = (hashObj) => {
    const hashOpt = hashObj.option;
    const elements = hashObj.value.map((el) => {
      return {
        text: `${el.h} ${hashOpt}`,
        func: () => {
          setPrice(el.price);
          setCurrentHash(el.h);
        },
      };
    });
    return elements;
  };

  const setProductQuantity = (e, param) => {
    if (param) setProductCounter(productCounter + 1);
    else {
      if (productCounter === 1) return;
      else setProductCounter(productCounter - 1);
    }

    e.target.addEventListener('selectstart', (e) => {
      e.preventDefault();
    }, { once: true });
  };

  const arrowState = (listState) ? 'rotate(180deg)' : 'rotate(0)';

  return (
    <>
      <div className="main-header">
        <h2>on sale</h2>
      </div>
      <div className="products__item-wrapper">
        <div className="products__item products__item-desctop_active">
          <div className="products__item-inner">
            <div className="products__item-header d-flex justify-content-between">
              <div className="products__item-header-text">
                <h5 className="poducts__item-title main-font">{item.title}</h5>
                <span className="main-font">{itemProcessed.hash} {item.hash.option}</span>
              </div>
              <div className="products__item-star">
                {(!item.star) ? '' : (item.star === 'full') ? ProductStar : ProductHalfStar}
              </div>
            </div>
            <div
              className="products__item-img"
              style={{ backgroundImage: `url("${item.img}")` }}>
            </div>
            <div className="details__item-price-wrapper">
              <span className="item-price">{`$${price}`}</span>
              <span className="item-psu main-font">{item.psu && 'psu'}</span>
            </div>
          </div>
        </div>
        <BoxDecor />
      </div>
      <TitleBlock text={item.manufacturer} />
      <TitleBlock
        text={`Hash rate: ${currentHash} ${item.hash.option}`}
        icon={(item.hash.value.length > 1) && <span className="toggle-arrow" style={{ transform: arrowState }}>{ToggleArrow}</span>}
        func={() => setListState(!listState)} />
      {listState && <DropList contentArr={renderHashList(item.hash)} />}
      <div className="grid-template-2fr details__order">
        <div className="counter-box">
          <div className="counter-box__inner main-font">
            <button
              className="arrow-holder arrow-holder__left"
              onClick={(e) => setProductQuantity(e, false)}>
              <span className="arrow arrow_left">{ToggleArrow}</span>
            </button>
            <div className="product-quantity">{productCounter}</div>
            <button
              className="arrow-holder arrow-holder__right"
              onClick={(e) => setProductQuantity(e, true)}>
              <span className="arrow arrow_right">{ToggleArrow}</span>
            </button>
          </div>
          <BoxDecor />
        </div>
        <ButtonMain text={'Add to cart'} />
      </div>
      <aside className="socials">
        <h2>share to</h2>
        <div className="socials-inner">
          <Facebook />
          <Twitter />
          <Reddit />
        </div>
      </aside>
    </>
  );
};

export default OnSaleDT;
