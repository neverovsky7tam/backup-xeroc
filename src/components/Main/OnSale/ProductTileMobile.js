import React, { useState } from 'react';
import Select from '../Select/Select';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../assets/img/product-half-star.svg';
import { ReactComponent as ArrowBack } from '../../../assets/img/arrow_back.svg';

const ProductTileMobile = ({ item, itemHash, itemPrice, hashArr }) => {
  const [price, setPrice] = useState(hashArr[0].price);
  const [hash, setHash] = useState(hashArr[0].h);

  const productItem = React.createRef();
  const itemInner = React.createRef();
  const orderBlock = React.createRef();
  const closeOrder = React.createRef();
  const productImg = React.createRef();
  const itemHeader = React.createRef();
  const pdoductParam_PSU = React.createRef();
  const openOrderArrow = React.createRef();

  const boxDecor = React.createRef();
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
    itemHeader.current.classList.toggle('d-none');
    pdoductParam_PSU.current.classList.toggle('d-none');
    openOrderArrow.current.classList.toggle('d-none');
    boxDecor.current.children[0].classList.toggle('d-none');
    boxDecor.current.children[2].classList.toggle('d-none');
    productItem.current.classList.toggle('products__item_active');

    if (param) {
      const orderBlockWidth = orderBlock.current.clientWidth;

      itemInner.current.style.right = `${orderBlockWidth + 1}px`;
      closeOrder.current.style.display = 'block';
    } else {
      closeOrder.current.style = '';
      itemInner.current.style = '';
      if (select.current.style.overflow) expandItemInner();
    }
  }

  if (item.title.length > 21) {
    item.title = item.title.slice(0, 23) + '...';
  };

  return (
    <li className="products__item-wrapper products__item-wrapper_mobile">
      <div className="item-holder p-relative">
        <div
          className="products__item"
          ref={productItem}>
          <div
            className="products__item-inner"
            ref={itemInner}>
            <div className="products__item-show-block">
              <div className="products__item-header d-flex justify-content-between" ref={itemHeader}>
                <div className="products__item-header-text">
                  <h5 className="poducts__item-title">{item.title}</h5>
                  <span className="products__item-hash">{itemHash} {item.hash.option}</span>
                </div>
                <div className="products__item-star">
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
            <div className="order-mob" ref={orderBlock}>
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
        <BoxDecor ref={boxDecor} />
      </div>
    </li>
  );
};

export default ProductTileMobile;
