import React, { useState, useLayoutEffect } from 'react';
import Select from '../Select/Select';
import { BoxDecor } from '../../Parts/BoxDecor';
// import { hideDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../assets/img/product-half-star.svg';
import { ReactComponent as ArrowBack } from '../../../assets/img/arrow_back.svg';

const ProductTileMobile = ({ item, itemHash, itemPrice, hashArr }) => {
  const [price, setPrice] = useState(hashArr[0].price);
  const [hash, setHash] = useState(hashArr[0].h);

  const itemInner = React.createRef();
  const closeOrder = React.createRef();
  const productImg = React.createRef();
  const rateStar = React.createRef();
  const pdoductParam_PSU = React.createRef();
  const openOrderArrow = React.createRef();

  const arrow = React.createRef();
  const select = React.createRef();
  const refObj = { arrow, select };

  const onHashListClick = (el) => {
    setPrice(el.price);
    setHash(el.h);
  }

  const expandItemInner = () => {
    if (!select.current.style.overflow) {
      arrow.current.style.transform = 'rotate(180deg)';
      select.current.style.overflow = 'visible';
    } else {
      arrow.current.style = '';
      select.current.style = '';
    }
  }

  const toggleOrder = (param) => {
    productImg.current.classList.toggle('item-img_hover-on');
    rateStar.current.classList.toggle('d-none');
    pdoductParam_PSU.current.classList.toggle('d-none');
    openOrderArrow.current.classList.toggle('d-none');

    if (param) {
      itemInner.current.style.right = '218px';
      closeOrder.current.style.display = 'block';
    } else {
      closeOrder.current.style = '';
      itemInner.current.style = '';
      if (select.current.style.overflow) expandItemInner();
    }
  }

  if (item.title.length > 21) {
    item.title = item.title.slice(0, 23) + '...';
  }

  return (
    <li className="products__item-wrapper products__item-wrapper_mobile">
      <div className="decor-holder p-relative">
        <div
          className="products__item">
          <div
            className="products__item-inner"
            ref={itemInner}>
            <div className="products__item-show-block">
              <div className="products__item-header d-flex justify-content-between">
                <div className="products__item-header-text">
                  <h5 className="poducts__item-title">{item.title}</h5>
                  <span className="products__item-hash">{itemHash} {item.hash.option}</span>
                </div>
                <div className="products__item-star" ref={rateStar}>
                  {(!item.star) ? '' : (item.star === 'full') ? <ProductStar /> : <ProductHalfStar />}
                </div>
              </div>
              <div
                className="products__item-img"
                style={{ backgroundImage: `url("${item.img}")` }}
                ref={productImg}>
              </div>
              <div className="products__item-footer">
                <span className="item-price">{itemPrice}</span>
                <span className="item-psu" ref={pdoductParam_PSU}>{item.psu && 'psu'}</span>
              </div>
              <div
                className="products__item-open-order"
                onClick={() => toggleOrder(true)}>
                <ArrowBack ref={openOrderArrow} />
              </div>
              <div
                className="products__item-close-order"
                onClick={() => toggleOrder(false)}
                ref={closeOrder}>
                <ArrowBack />
              </div>
            </div>
            <div className="order-mob">
              <div className="order-mob__price-shown">
                <span className="order-mob__price-symb">$</span>
                <span className="order-mob__price">{price}</span>
              </div>
              <div className="select-wrapper">
                <Select
                  hashArr={hashArr}
                  displayHash={hash}
                  hashOpt={item.hash.option}
                  expandFunc={expandItemInner}
                  hashClick={onHashListClick}
                  ref={refObj} />
              </div>
              <div className="order-mob__btns-wrapper">
                <button className="order-mob__btn order-mob__btn_details">Details</button>
                <button className="order-mob__btn order-mob__btn_add">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <BoxDecor />
      </div>
    </li>
  )
};

export default ProductTileMobile;
