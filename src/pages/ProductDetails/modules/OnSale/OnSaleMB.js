import React, { useState } from 'react';
import { productsProcessing } from 'utils/renderProducts';
import TitleBlock from 'components/BlocksUI/TitleBlock';
import DropList from 'components/BlocksUI/DropList';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import {
  ProductStar,
  ProductHalfStar,
  ToggleArrow,
  ShareIcon
} from 'svg/svg';

const OnSaleMB = ({ item, currentHash, setCurrentHash }) => {
  const itemProcessed = productsProcessing(item);

  const [price, setPrice] = useState(item.hash.value[0].price);
  const [listState, setListState] = useState(false);

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

  const arrowState = (listState) ? 'rotate(180deg)' : 'rotate(0)';

  return (
    <>
      <div className="products__item-wrapper">
        <div className="item-holder p-relative">
          <div className="products__item">
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
              <div className="products__item-footer">
                <span className="item-price">{`$${price}`}</span>
                <span className="item-psu main-font">{item.psu && 'psu'}</span>
              </div>
            </div>
          </div>
          <BoxDecor />
        </div>
      </div>
      <TitleBlock text={item.manufacturer} />
      <TitleBlock
        text={`Hash: ${currentHash} ${item.hash.option}`}
        icon={<span className="toggle-arrow" style={{ transform: arrowState }}>{ToggleArrow}</span>}
        func={() => setListState(!listState)} />
      {listState && <DropList contentArr={renderHashList(item.hash)} />}
      <div className="grid-template-2fr details__order">
        <div className="d-flex">
          <div className="input-holder main-font details__order-input">
            <div className="input-wrapper">
              <input type="text" defaultValue="1" />
            </div>
            <BoxDecor />
          </div>
          <div className="details__order-share-holder">
            <span className="share-icon">{ShareIcon}</span>
          </div>
        </div>
        <ButtonMain text={'Add to cart'} />
      </div>
    </>
  );
};

export default OnSaleMB;
