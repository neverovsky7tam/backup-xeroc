import React from 'react';
import { BoxDecor } from '../../../Parts/BoxDecor';
import { ReactComponent as ProductStar } from '../../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../../assets/img/product-half-star.svg';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';

export const ProductList = ({ item, idx, itemHash, itemPrice, hashArr }) => {
  const colorItem = (idx % 2) ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)';

  const profit = (+item.efficiency / 0.17) - (item.power * 0.17) / 10;
  const colorProfit = (profit > 0) ? '#00a651' : '#d02e32';
  const rate = (profit > 0) ? <GreenArrow /> : <RedArrow />;

  return (
    <div className="list-item-wrapper">
      <div className="list-inner">
        <div className="list-inner-item p-relative" style={{ backgroundColor: colorItem }}>
          <li className="list">
            <div className="list__star">
              {(!item.star) ? '' : (item.star === 'full') ? <ProductStar /> : <ProductHalfStar />}
            </div>
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
            <div className="list__price">{itemPrice}</div>
          </li>
          <BoxDecor />
        </div>
        <div className="btn-wrapper">
          <button className="order__btn-add">Add to cart</button>
        </div>
      </div>
    </div>
  )
};

export const ProductListHead = () => {
  return (
    <div className="list-head-wrapper">
      <div className="list-inner-header p-relative">
        <div className="list list_header">
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
        <BoxDecor />
      </div>
    </div>
  )
}
