import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { productsProcessing } from '../../../../utils/renderProducts';
import TitleBlock from '../../../BlocksUI/TitleBlock';
import DropList from '../../../BlocksUI/DropList';
import { ButtonMain } from '../../../BlocksUI/Buttons/Buttons';
import { BoxDecor } from '../../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../../assets/img/product-half-star.svg';
import { ReactComponent as ToggleArrow } from '../../../../assets/img/toggle-arrow.svg';
import { ReactComponent as Dots } from '../../../../assets/img/3dots.svg';
import { ReactComponent as ShareIcon } from '../../../../assets/img/share.svg';

const OnSale = () => {
  const item = useSelector((state) => state.currentProduct);
  const itemProcessed = productsProcessing(item);

  const [price, setPrice] = useState(item.hash.value[0].price);
  const [currentHash, setCurrentHash] = useState(item.hash.value[0].h);
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
    <div className="details-onsale">
      <TitleBlock text={'On sale'} icon={<Dots />} style={{ marginTop: '0' }} />
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
                  {(!item.star) ? '' : (item.star === 'full') ? <ProductStar /> : <ProductHalfStar />}
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
        icon={<ToggleArrow className="toggle-arrow" style={{ transform: arrowState }} />}
        func={() => setListState(!listState)} />
      {listState && <DropList contentArr={renderHashList(item.hash)} />}
      <div className="grid-template-2fr details-onsale__order">
        <div className="d-flex">
          <div className="input-holder main-font">
            <div className="input-wrapper">
              <input type="text" defaultValue="1" />
            </div>
            <BoxDecor />
          </div>
          <div className="details-onsale__share-holder">
            <ShareIcon className="share-icon" />
          </div>
        </div>
        <ButtonMain text={'Add to cart'} />
      </div>
    </div>
  );
};

export default OnSale;
