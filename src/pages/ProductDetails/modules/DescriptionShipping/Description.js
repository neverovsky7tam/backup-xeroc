import React from 'react';
import { productsProcessing } from 'utils/renderProducts';
import { SpecificIcon, ShippingIcon } from 'svg/svgProductDetails';

const Description = ({ item }) => {
  const hashArr = productsProcessing(item).hashArr;
  return (
    <div className="description">
      <p className="description__main-txt">
        {`The ${item.title} from ${item.manufacturer} uses a ${item.algorithm} based algorithm with a maximum hashrate of ${hashArr[hashArr.length - 1].h} ${item.hash.option} at a power consumption of ${item.power}W.`}
      </p>
      <ul className="description__conditions">
        <li className="description__conditions-item">
          <div className="icon-holder">{SpecificIcon}</div>
          <span className="bullet">Minimum Order Quantity = 100</span>
        </li>
        <li className="description__conditions-item">
          <div className="icon-holder">{ShippingIcon}</div>
          <span className="bullet">Ships Within 7 Working Days</span>
        </li>
      </ul>
      <div className="description__seller-text">
        <span>All used equipment tested prior to shipping</span>
        <span>Please email sales@domain.com for bulk inquiries</span>
      </div>
    </div>
  );
};

export default Description;
