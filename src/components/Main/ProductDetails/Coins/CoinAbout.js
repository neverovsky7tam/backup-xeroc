import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../BlocksUI/Container';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';
import { ReactComponent as ToggleArrow } from '../../../../assets/img/toggle-arrow.svg';

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

  const incomeDay = (currentHash * (item.efficiency / coin.ratio)).toFixed(2);
  const electricityDay = (electricityCost * item.efficiency * currentHash).toFixed(2);
  const profitDay = (incomeDay - electricityDay).toFixed(2);

  const setElectricityVal = (e, param) => {
    let val = null;
    if (param) val = +electricityCost + 0.01;
    else val = +electricityCost - 0.01;

    if (val < 0) return;
    else setElectricityCost(val.toFixed(2));

    e.target.addEventListener('selectstart', (e) => {
      e.preventDefault();
    }, { once: true });
  };

  let prevInputVal = electricityCost;
  const setElectricityInputVal = (e) => {
    const value = +e.target.value
    if (isNaN(value) || value < 0) {
      e.target.value = prevInputVal;
      return;
    } else {
      setElectricityCost(value.toFixed(2));
    }
  };

  let electricityControl = (
    <div className="grah__control-input item-active">
      <input
        type="text"
        defaultValue={electricityCost}
        onChange={setElectricityInputVal} />
    </div>
  );

  if (!isMobile) {
    electricityControl = (
      <button className="graph__control-btn">
        <div
          className="arrow-holder arrow-holder__left"
          onClick={(e) => setElectricityVal(e, false)}>
          <ToggleArrow className="arrow arrow_left" />
        </div>
        <div className="electricity-val">{electricityCost}</div>
        <div
          className="arrow-holder arrow-holder__right"
          onClick={(e) => setElectricityVal(e, true)}>
          <ToggleArrow className="arrow arrow_right" />
        </div>
      </button>
    )
  };

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
            <div className="column column_main">
              <div className="column__header">Day</div>
              <ul className="column__body column__decor">
                <li className="column__item column__item_income">${incomeDay}</li>
                <li className="column__item column__item_electricity">${electricityDay}</li>
                <li className="column__item column__item_profit">${profitDay}</li>
              </ul>
            </div>
            <div className="column column_main">
              <div className="column__header">Month</div>
              <ul className="column__body column__decor">
                <li className="column__item column__item_income">${(incomeDay * 30).toFixed(2)}</li>
                <li className="column__item column__item_electricity">${(electricityDay * 30).toFixed(2)}</li>
                <li className="column__item column__item_profit">${(profitDay * 30).toFixed(2)}</li>
              </ul>
            </div>
            <div className="column column_main column_last">
              <div className="column__header">Year</div>
              <ul className="column__body column__decor custom">
                <li className="column__item column__item_income">${(incomeDay * 365).toFixed(2)}</li>
                <li className="column__item column__item_electricity">${(electricityDay * 365).toFixed(2)}</li>
                <li className="column__item column__item_profit">${(profitDay * 365).toFixed(2)}</li>
              </ul>
            </div>
          </div>
          <div className="graph">
            <h5 className="graph__header">Electricity, <span>$/kWh</span></h5>
            <div className="graph__inner">
              {electricityControl}
              {/* <div className="column column_head">{electricityControl}</div>
              <div className="column column_border-bottom"></div>
              <div className="column column_border-bottom column_border-left"></div>
              <div className="column column_border-bottom column_border-left column_last"></div> */}
              <div className="digit-graphic-holder">
                <img className="graphic-img" src="./data/img/digit-graphic-short.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CoinAbout;