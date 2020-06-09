import React from 'react';
import { topSellers } from '../../../data/users/users';
import { ReactComponent as RatingStar } from '../../../assets/img/rating-star.svg';

export const TopSellersSidebar = () => {
  const sellersArr = topSellers.concat(topSellers, topSellers, topSellers, topSellers, topSellers, topSellers, topSellers, topSellers, topSellers);

  const renderItems = () => {
    const items = sellersArr.map((el, idx) => {
      let starArr = [];
      let i = el.star;
      while (i > 0) {
        starArr.push(<RatingStar key={i} className="sellers__item-rating" />);
        i -= 1;
      };

      return (
        <li className="sellers__item" key={idx}>
          <div className="d-flex">
            <div className="img-wrapper">
              <img src={el.img} alt={el.name} />
            </div>
            <div className="sellers__item-text">
              <h4 className="h4-mob">{el.name}</h4>
              <span className="span-mob">{el.rating}</span>
            </div>
          </div>
          <div>
            {starArr}
          </div>
        </li>
      )
    });

    return items;
  }

  return (
    <>
      <h2>top sellers</h2>
      <div className="content">
        <ul className="sellers">
          {renderItems()}
        </ul>
      </div>
    </>
  )
}