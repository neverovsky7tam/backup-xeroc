import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../BlocksUI/Container';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';


const CoinAbout = ({ coin, item, currentHash }) => {
  const [electricityCost, setElectricityCost] = useState(0.17);
  const isMobile = useSelector((state) => state.deviceType);

  let price = coin['Price'];
  const checkPriceLength = () => {
    if (price.indexOf('.') !== -1) {
      const pos = price.indexOf('.');
      price = price.slice(0, pos);
    }
    return price;
  };

  const priceDisplay = (isMobile) ? checkPriceLength() : price;

  const incomeDay = (currentHash * (item.efficiency / 3.3)).toFixed(2);
  const electricityDay = (electricityCost * item.efficiency * currentHash).toFixed(2);
  const profitDay = (incomeDay - electricityDay).toFixed(2);

  return (
    <Container>
      <section className="coin-about">
        <div className="coin-about__header">
          <h3>{coin.title} {coin.value.toUpperCase()}</h3>
          <div className="coin-about__header-left">
            <span className="price"><span className="price__unit">$</span>{priceDisplay}</span>
            <span className="dynamics">{coin.dynamics.toFixed(1)}%</span>
            {(coin.dynamics > 0) ? <GreenArrow /> : <RedArrow />}
          </div>
        </div>
        <p className="coin-about__txt-block">{coin.description}</p>
        <div className="coin-about__params">
          <h3>Mining with {item.manufacturer} {item.model}, HR - {currentHash}</h3>
          <div className="digit">
            <div className="column column_head">
              <div className="column__header">Term</div>
              <ul className="column__body">
                <li className="column__item">Income</li>
                <li className="column__item">Electricity</li>
                <li className="column__item">Profit</li>
              </ul>
            </div>
            <div className="column">
              <div className="column__header">Day</div>
              <ul className="column__body">
                <li className="column__item column__item_income">${incomeDay}</li>
                <li className="column__item column__item_electricity">${electricityDay}</li>
                <li className="column__item column__item_profit">${profitDay}</li>
              </ul>
            </div>
            <div className="column">
              <div className="column__header">Month</div>
              <ul className="column__body">
                <li className="column__item column__item_income">${(incomeDay * 30).toFixed(2)}</li>
                <li className="column__item column__item_electricity">${(electricityDay * 30).toFixed(2)}</li>
                <li className="column__item column__item_profit">${(profitDay * 30).toFixed(2)}</li>
              </ul>
            </div>
            <div className="column">
              <div className="column__header">Year</div>
              <ul className="column__body">
                <li className="column__item column__item_income">${(incomeDay * 365).toFixed(2)}</li>
                <li className="column__item column__item_electricity">${(electricityDay * 365).toFixed(2)}</li>
                <li className="column__item column__item_profit">${(profitDay * 365).toFixed(2)}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CoinAbout;