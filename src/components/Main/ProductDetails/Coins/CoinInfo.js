import React from 'react';
import { ReactComponent as InfoIcon } from '../../../../assets/img/Product_details/info-icon.svg';

const CoinInfo = () => {
  return (
    <section className="coin-info">
      <div className="coin-info__header">
        <h3>Info</h3>
        <div className="icon-holder">
          <InfoIcon />
        </div>
      </div>
      <dl className="coin-info__body">
        <dt>name</dt>
        <dd>description</dd>
        <dt>name</dt>
        <dd>description</dd>
        <dt>name</dt>
        <dd>description</dd>
        <dt>name</dt>
        <dd>description</dd>
      </dl>
    </section>
  );
};

export default CoinInfo;