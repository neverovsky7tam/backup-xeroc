import React from 'react';
import { topSellers } from '../../../../data/users/users';
import { ReactComponent as VerifiedIcon } from '../../../../assets/img/Product_details/verified.svg';
import { ReactComponent as StarsBlockIcon } from '../../../../assets/img/Product_details/stars.svg';
import { ReactComponent as CommonIcon } from '../../../../assets/img/Product_details/common.svg';

const SellerInfo = () => {
  return (
    <div className="seller-info">
      <div className="seller-info__person">
        <div className="seller-img-holder">
          <img className="seller-img-holder__ava" src={topSellers[0].img} alt={topSellers[0].name} />
          <div className="seller-img-holder__chat"><CommonIcon /></div>
        </div>
        <div className="seller-rating-holder">
          <div className="seller-rating-holder__name">
            <span className="name">Nick Jones</span>
            <div className="verified"><VerifiedIcon /></div>
          </div>
          <div className="seller-rating-holder__stars">
            <StarsBlockIcon />
          </div>
        </div>
      </div>
      <div className="seller-info__data">
        <ul className="seller-info__data-wrapper">
          <li className="seller-info__data-item">
            <span className="item__value">256</span>
            <span className="item__caption">Total sold</span>
          </li>
          <li className="seller-info__data-item">
            <span className="item__value">13</span>
            <span className="item__caption">This week sold</span>
          </li>
          <li className="seller-info__data-item">
            <span className="item__value">117</span>
            <span className="item__caption">Feedback</span>
          </li>
          <li className="seller-info__data-item">
            <span className="item__value">4.83</span>
            <span className="item__caption">Rating</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerInfo;