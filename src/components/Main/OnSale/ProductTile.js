import React, { useState } from 'react';
import Select from '../Select/Select';
import { BoxDecor } from '../../Parts/BoxDecor';
import { hideDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../assets/img/product-half-star.svg';

const ProductTile = ({ item, itemHash, itemPrice, hashArr, showDetails }) => {
  const [price, setPrice] = useState(itemPrice);
  const [hash, setHash] = useState('');

  const product = React.createRef();
  const itemInner = React.createRef();
  const productImg = React.createRef();
  const orderBlock = React.createRef();
  const boxDecor = React.createRef();

  const arrow = React.createRef();
  const select = React.createRef();
  const refObj = { arrow, select };

  const itemHoverOn = () => {
    product.current.classList.add('products__item-desctop_active');
    productImg.current.classList.remove('item-img_hover-off');
    productImg.current.classList.add('item-img_hover-on');
    orderBlock.current.classList.remove('order_hover-off');
    orderBlock.current.classList.add('order_hover-on');

    setPrice(`$${hashArr[0].price}`);
    setHash(hashArr[0].h);
  };

  const itemHoverOff = () => {
    product.current.classList.remove('products__item-desctop_active');
    productImg.current.classList.remove('item-img_hover-on');
    productImg.current.classList.add('item-img_hover-off');
    orderBlock.current.classList.remove('order_hover-on');
    orderBlock.current.classList.add('order_hover-off');
    setPrice(itemPrice);

    if (select.current.style.overflow) {
      expandItemInner();
    };
  };

  const onHashListClick = (el) => {
    setPrice(`$${el.price}`);
    setHash(el.h);
  };

  const expandItemInner = () => {
    if (!select.current.style.overflow) {
      itemInner.current.style.overflow = 'visible';
      arrow.current.style.transform = 'rotate(180deg)';
      select.current.style.overflow = 'visible';
    } else {
      itemInner.current.style = '';
      arrow.current.style = '';
      select.current.style = '';
    };
  };

  if (item.title.length > 21) {
    item.title = item.title.slice(0, 23) + '...';
  };

  return (
    <li className="products__item-wrapper">
      <div
        className="products__item"
        onMouseEnter={itemHoverOn}
        onMouseLeave={itemHoverOff}
        ref={product}>
        <div
          className="products__item-inner"
          ref={itemInner}>
          <div className="products__item-header d-flex justify-content-between">
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
          <div
            className="order"
            ref={orderBlock}>
            <div className="item-price-wrapper d-flex justify-content-between align-items-center">
              <span className="item-price">{price}</span>
              <span className="item-psu">{item.psu && 'psu'}</span>
            </div>
            <div className="select-wrapper">
              <Select
                hashArr={hashArr}
                displayHash={hash}
                hashOpt={item.hash.option}
                expandFunc={expandItemInner}
                hashClick={onHashListClick}
                ref={refObj}
                isDesctopTemplate={true} />
            </div>
            <div className="order__btns-wrapper">
              <button className="order__btn-details"
                onMouseEnter={() => hideDecor(boxDecor, 'none')}
                onMouseLeave={() => hideDecor(boxDecor, '')}
                onClick={() => showDetails(item)}>
                Details
              <BoxDecor ref={boxDecor} />
              </button>
              <button className="order__btn-add">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <BoxDecor />
    </li>
  )
};

export default ProductTile;
