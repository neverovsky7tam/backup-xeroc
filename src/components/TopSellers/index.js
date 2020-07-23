import React from 'react';
import { topSellers } from 'data/users/users';
import { RatingStarSmall } from 'svg/svg';

const TopSellers = () => {
  const sellersArr = topSellers.concat(topSellers, topSellers, topSellers, topSellers);

  const renderItems = () => {
    const sellers = sellersArr.map((item, idx) => {
      const starArr = [];
      let i = item.star;
      while (i > 0) {
        starArr.push(<span key={i}>{RatingStarSmall}</span>);
        i -= 1;
      }

      return (
        <li key={idx} className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="feedback__top-seller-img-wrapper">
              <img src={item.img} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="feedback__top-sellers-rating">{item.rating}</span>
            <div className="d-flex align-items-center justify-content-between" style={{ width: '47px', marginLeft: '15px' }}>
              {starArr}
            </div>
          </div>
        </li>
      )
    })
    return sellers;
  }

  return (
    <ul className="feedback__top-sellers">
      {renderItems()}
    </ul>
  )
};

export default TopSellers;