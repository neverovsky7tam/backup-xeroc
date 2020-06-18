import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TitleBlock from '../../../BlocksUI/TitleBlock';
import DropList from '../../../BlocksUI/DropList';
import { BoxDecor } from '../../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../../assets/img/product-half-star.svg';
import { ReactComponent as ToggleArrow } from '../../../../assets/img/toggle-arrow.svg';

const DetailsOnSale = () => {
  const item = useSelector((state) => state.currentProduct);
  const [price, setPrice] = useState(item.hash.value[0].price);
  const [listState, setListState] = useState(false);

  const renderHashList = (hashObj) => {
    const hashOpt = hashObj.option;
    const elements = hashObj.value.map((el) => {
      return {
        text: `${el.h} ${hashOpt}`,
        func: () => setPrice(el.price),
      };
    });
    return elements;
  };

  const arrowState = (listState) ? 'rotate(180deg)' : 'rotate(0)';

  return (
    <div className="general__center-right">
      <div className="main-header">
        <h2>on sale</h2>
      </div>
      <div className="products__item-wrapper">
        <div className="products__item products__item-desctop_active">
          <div className="products__item-inner">
            <div className="products__item-header d-flex justify-content-between">
              <div className="products__item-header-text">
                <h5 className="poducts__item-title">{item.title}</h5>
                <span className="products__item-hash">{null} {item.hash.option}</span>
              </div>
              <div className="products__item-star">
                {(!item.star) ? '' : (item.star === 'full') ? <ProductStar /> : <ProductHalfStar />}
              </div>
            </div>
            <div
              className="products__item-img"
              style={{ backgroundImage: `url("${item.img}")` }}>
            </div>
            <div className="details__item-price-wrapper">
              <span className="item-price">{`$${price}`}</span>
              <span className="item-psu">{item.psu && 'psu'}</span>
            </div>
          </div>
        </div>
        <BoxDecor />
      </div>
      <TitleBlock text={item.manufacturer} />
      <TitleBlock
        text={`Hash rate ${item.hash.value[0].h} ${item.hash.option}`}
        icon={(item.hash.value.length > 1) && <ToggleArrow className="toggle-arrow" style={{transform: arrowState}} />}
        func={() => setListState(!listState)} />
      {listState && <DropList contentArr={renderHashList(item.hash)} />}
    </div>
  );
};

export default DetailsOnSale;