import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Select from 'components/Select/Select';
import { ButtonMain, ButtonDark } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { ProductStar, ProductHalfStar } from 'svg/svg';

const ProductTile = ({ item, itemHash, itemPrice, hashArr }) => {
  const [price, setPrice] = useState(itemPrice);
  const [hash, setHash] = useState('');

  const product = React.createRef();
  const itemInner = React.createRef();
  const productImg = React.createRef();
  const orderBlock = React.createRef();

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

  const star = (!item.star) ? '' : (item.star === 'full') ? ProductStar : ProductHalfStar;

  const itemLink = item.title.replace(/\.+/g, '').replace(/\s+/g, '-');

  return (
    <>
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
                <h5 className="poducts__item-title main-font">{item.title}</h5>
                <span className="main-font">{itemHash} {item.hash.option}</span>
              </div>
              <div className="products__item-star">{star}</div>
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
                <span className="item-psu main-font">{item.psu && 'psu'}</span>
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
              <div className="grid-template-2fr">
                <ButtonDark>
                  <Link to={`/product-details/${itemLink}/${item.id}`} className="link-to">Details</Link>
                </ButtonDark>
                <ButtonMain text={'Add to cart'} func={null} />
              </div>
            </div>
          </div>
        </div>
        <BoxDecor />
      </li>
    </>
  );
};

export default ProductTile;


