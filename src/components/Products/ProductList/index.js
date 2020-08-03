import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setListingsSectionCssClass } from 'store/actions';
import Select from 'components/Select';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { addToCart } from 'mod/Cart/logic';
import {
  ProductStar,
  ProductHalfStar,
  GreenArrow,
  RedArrow
} from 'svg/svg';

export const ProductList = ({ item, idx, itemHash, itemPrice, hashArr, itemPath }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setListingsSectionCssClass('listings-d-var'));
  });

  useEffect(() => {
    return () => {
      dispatch(setListingsSectionCssClass(null));
    }
  }, []);

  const [price, setPrice] = useState(itemPrice);
  const [hash, setHash] = useState('');

  const itemCarriage = React.createRef();
  const itemInner = React.createRef();
  const orderBlock = React.createRef();

  const arrow = React.createRef();
  const select = React.createRef();
  const refObj = { arrow, select };

  const colorItem = (idx % 2) ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)';

  const electricityVal = useSelector((state) => state.electricityValue);
  const profit = (+item.efficiency / electricityVal) - (item.power * electricityVal) / 10;
  const colorProfit = (profit > 0) ? '#00a651' : '#d02e32';
  const rate = (profit > 0) ? GreenArrow : RedArrow;

  const itemHoverOn = () => {
    setPrice(`$${hashArr[0].price}`);
    setHash(hashArr[0].h);

    itemCarriage.current.style.right = '322px';
    itemInner.current.style.border = '1px solid rgba(255, 255, 255, 0.05)';
    orderBlock.current.style.right = '0';
  };

  const itemHoverOff = () => {
    setPrice(itemPrice);
    itemCarriage.current.style.right = '0';
    itemInner.current.style.border = '1px solid rgba(255, 255, 255, 0.0)';
    orderBlock.current.style.right = '-60%';

    if (select.current.style.overflow) showHashList();
  };

  const showHashList = () => {
    if (!select.current.style.overflow) {
      select.current.style.overflow = 'visible';
      arrow.current.style.transform = 'rotate(180deg)';
    } else {
      select.current.style.overflow = '';
      arrow.current.style = '';
    };
  };

  const onHashListClick = (item) => {
    setPrice(`$${item.price}`);
    setHash(item.h);
  };

  const star = (!item.star) ? '' : (item.star === 'full') ? ProductStar : ProductHalfStar;

  return (
    <li
      className="list-item-wrapper"
      onMouseEnter={itemHoverOn}
      onMouseLeave={itemHoverOff}>
      <Link to={itemPath}>
        <div
          className="list-item-carriage"
          style={{ backgroundColor: colorItem }}
          ref={itemCarriage}>
          <div
            className="list-item-inner"
            ref={itemInner}>
            <div className="list">
              <div className="list__star">{star}</div>
              <div className="list__rate">{rate}</div>
              <div className="list__release">{item.release}</div>
              <div className="list__manufacturer">{item.manufacturer}</div>
              <div className="list__model">{item.model}</div>
              <div className="list__hash">{itemHash}{item.hash.option}</div>
              <div className="list__noise">{item.noise}</div>
              <div className="list__power">{item.power}</div>
              <div className="list__algorithm">{item.algorithm}</div>
              <div className="list__efficiency">{item.efficiency}</div>
              <div className="list__profit"><span style={{ color: colorProfit }}>{profit.toFixed(2)}</span> / day</div>
              <div className="list__price">{price}</div>
            </div>
          </div>
          <BoxDecor />
        </div>
      </Link>
      <div
        className="order d-flex"
        ref={orderBlock}>
        <div
          className="select-wrapper">
          <Select
            item={item}
            hashArr={hashArr}
            displayHash={hash}
            hashOpt={item.hash.option}
            expandFunc={showHashList}
            hashClick={onHashListClick}
            ref={refObj} />
        </div>
        <ButtonMain
          text={'Add to cart'}
          func={() => addToCart(item)}
          style={{ width: '112px', height: '40px' }} />
      </div>
    </li>
  );
};

export const ProductListHead = () => {
  return (
    <div className="list-head-wrapper">
      <div className="p-relative">
        <div className="list-inner-header">
          <div className="list">
            <div className="list__star"></div>
            <div className="list__rate"></div>
            <div className="list__release">Release</div>
            <div className="list__manufacturer">Manufacturer</div>
            <div className="list__model">Model</div>
            <div className="list__hash">Hash</div>
            <div className="list__noise">Noise</div>
            <div className="list__power">Power</div>
            <div className="list__algorithm">Algorithm</div>
            <div className="list__efficiency">Efficiency</div>
            <div className="list__profit">Profit</div>
            <div className="list__price">Price</div>
          </div>
        </div>
        <BoxDecor />
      </div>
    </div>
  );
};
