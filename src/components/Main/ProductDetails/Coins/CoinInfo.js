import React from 'react';
import { ReactComponent as InfoIcon } from '../../../../assets/img/Product_details/info-icon.svg';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';

export const renderCoinInfoItems = (coin, isMobile) => {
  const propNames = ['Price', 'Market Cap', 'Trading Volume', '24h Low', '24h High', 'Market Cap Rank', 'All-Time High', 'Since All-Time High', 'All-Time High Date', '1 Hour', '24 Hours', '7 Days', '14 Days', '30 Days', '60 Days', '1 year'];

  const items = propNames.map((el, idx) => {
    let prop = el;
    let key = coin[el];
    let propVal = null;

    if (el === 'Price') {
      prop = coin.title + ' ' + el;
      key = '$' + key;
    }

    if (typeof key === 'number') {
      if (key >= 0) {
        propVal = (<dd className="growth"><div className="prop-value">{`+${key}%`}<GreenArrow className="volume-arrow" /></div></dd>);
      } else {
        propVal = (<dd className="fall"><div className="prop-value">{`${key}%`}<RedArrow className="volume-arrow" /></div></dd>)
      };
    } else {
      propVal = (<dd>{key}</dd>)
    }

    if (isMobile) {
      return (
        <dl key={idx}>
          <dt>{prop}</dt>
          {propVal}
        </dl>
      );
    } else {
      return (
        <div key={idx}>
          <dt>{prop}</dt>
          {propVal}
        </div>
      );
    }
  });

  return items;
};

const CoinInfo = ({ coin }) => {
  return (
    <section className="coin-info">
      <div className="coin-info__header">
        <h3>Info</h3>
        <div className="icon-holder">
          <InfoIcon />
        </div>
      </div>
      <dl className="coin-info__body">
        {renderCoinInfoItems(coin)}
      </dl>
    </section>
  );
};

export default CoinInfo;
