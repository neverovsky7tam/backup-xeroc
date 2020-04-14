import React, { useState } from 'react';
import Select from '../Select/Select';
import { BoxDecor } from '../../Parts/BoxDecor';
import { hideDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../assets/img/product-half-star.svg';

const ProductCard = ({ item, itemHash, itemPrice, hashArr }) => {
  const [price, setPrice] = useState(itemPrice);
  const [hash, setHash] = useState('');

  const itemInner = React.createRef();
  const productImg = React.createRef();
  const orderBlock = React.createRef();
  const boxDecor = React.createRef();

  const arrow = React.createRef();
  const select = React.createRef();
  const refObj = { arrow, select };

  const itemHoverOn = (img, order) => {
    img.current.classList.remove('item-img_hover-off');
    img.current.classList.add('item-img_hover-on');
    order.current.classList.remove('order_hover-off');
    order.current.classList.add('order_hover-on');

    setPrice(`$${hashArr[0].price}`);
    setHash(hashArr[0].h);
  }

  const itemHoverOff = (img, order) => {
    img.current.classList.remove('item-img_hover-on');
    img.current.classList.add('item-img_hover-off');
    order.current.classList.remove('order_hover-on');
    order.current.classList.add('order_hover-off');
    setPrice(itemPrice);

    if (select.current.style.overflow) {
      expandItemInner();
    }
  }

  const onHashListClick = (item) => {
    setPrice(`$${item.price}`);
    setHash(item.h);
  }

  const expandItemInner = () => {
    if (!select.current.style.overflow) {
      itemInner.current.style.overflow = 'visible';
      arrow.current.style.transform = 'rotate(180deg)';
      select.current.style.overflow = 'visible';
    } else {
      itemInner.current.style = '';
      arrow.current.style = '';
      select.current.style = '';
    }
  }

  if (item.title.length > 21) {
    item.title = item.title.slice(0, 23) + '...';
  }

  return (
    <li
      className="products__item"
      onMouseEnter={() => itemHoverOn(productImg, orderBlock)}
      onMouseLeave={() => itemHoverOff(productImg, orderBlock)}>
      <div
        className="products__item-inner"
        ref={itemInner}>
        <div className="products__item-header d-flex justify-content-between">
          <div className="products__item-header-left">
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
          <div className="order__price-wrapper d-flex justify-content-between align-items-center">
            <span className="order__price">{price}</span>
            <span className="order__psu">{item.psu && 'psu'}</span>
          </div>
          <Select
            hashArr={hashArr}
            displayHash={hash}
            hashOpt={item.hash.option}
            expandFunc={expandItemInner}
            hashClick={onHashListClick}
            ref={refObj} />
          <div className="order__btns-wrapper">
            <button className="order__btn-details"
              onMouseEnter={() => hideDecor(boxDecor, 'none')}
              onMouseLeave={() => hideDecor(boxDecor, '')}>
              Details
              <BoxDecor ref={boxDecor} />
            </button>
            <button className="order__btn-add">Add to cart</button>
          </div>
        </div>
      </div>
    </li>
  )
}

const ProductList = ({ data }) => {
  const items = data.map((el, idx) => {
    let hash = null;
    let price = null;

    const priceRangeArr = [];
    const hashArr = el.hash.value;

    if (hashArr.length > 1) {
      hashArr.forEach((item) => {
        priceRangeArr.push(+item.price);
      });

      hashArr.sort((a, b) => a.h - b.h);
      priceRangeArr.sort((a, b) => a - b);

      hash = `${hashArr[0].h} - ${hashArr[hashArr.length - 1].h}`;
      price = `$${priceRangeArr[0]} - $${priceRangeArr[priceRangeArr.length - 1]}`;
    } else {
      hash = `${hashArr[0].h}`;
      price = `$${hashArr[0].price}`;
    }

    return <ProductCard
      key={idx}
      itemHash={hash}
      itemPrice={price}
      id={idx}
      item={el}
      hashArr={hashArr} />;
  });

  return items;
}

export default ProductList;
