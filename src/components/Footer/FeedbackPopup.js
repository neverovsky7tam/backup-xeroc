import React from 'react';
import { useSelector } from 'react-redux';
import { topSellers } from '../../data/users/users';
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg';
import { ReactComponent as RatingStarSmall } from '../../assets/img/rating-star-smaller.svg';
import { Diamond } from '../Parts/Parts';

const renderItems = () => {
  const sellersArr = topSellers.concat(topSellers, topSellers, topSellers, topSellers, topSellers, topSellers, topSellers, topSellers, topSellers);
  const sellers = sellersArr.map((item, idx) => {
    const starArr = [];
    let i = item.star;
    while (i > 0) {
      starArr.push(<RatingStarSmall key={i} />);
      i -= 1;
    }

    return (
      <li key={idx} className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="feedback__top-seller-num">{idx + 1}.</span>
          <div className="feedback__top-seller-img-wrapper">
            <img src={item.img} alt={item.name} />
          </div>
          <span>{item.name}</span>
        </div>
        <div className="d-flex align-items-center">
          <span>{item.rating}</span>
          <div className="d-flex align-items-center justify-content-between" style={{ width: '47px', marginLeft: '15px' }}>
            {starArr}
          </div>
        </div>
      </li>
    )
  })
  return sellers;
}

const FeedbackPopup = React.forwardRef(({ hidePop }, ref) => {
  const lang = useSelector((state) => state.langObj.footer);
  return (
    <div
      className="drop-menu"
      ref={ref}
      onMouseLeave={() => hidePop(ref, '')}>
      <div className="drop-menu__inner">
        <div className="drop-menu__header">
          <h4>{lang.sellersTitle}</h4>
          <CloseIcon className="cursor-pointer" />
        </div>
        <ul className="feedback__top-sellers">
          {renderItems()}
        </ul>
        <Diamond custom={{ right: '77%' }} />
      </div>
    </div>
  )
});

export default FeedbackPopup;