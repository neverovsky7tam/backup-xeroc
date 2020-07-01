import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../BlocksUI/Container';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';


const CoinAbout = ({ coin, item, currentHash }) => {
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
            <div className="column">
              <div className="column__header">Hello</div>
              <ul className="column__body-head">
                <li className="column__item"></li>
                <li className="column__item"></li>
                <li className="column__item"></li>
              </ul>
            </div>
            <div className="column">
              <div className="column__header">Hello</div>
              <ul className="column__body">
                <li className="column__item"></li>
                <li className="column__item"></li>
                <li className="column__item"></li>
              </ul>
            </div>
            <div className="column">
              <div className="column__header">Hello</div>
              <ul className="column__bod">
                <li className="column__item"></li>
                <li className="column__item"></li>
                <li className="column__item"></li>
              </ul>
            </div>
            <div className="column">
              <div className="column__header">Hello</div>
              <ul className="column__body">
                <li className="column__item"></li>
                <li className="column__item"></li>
                <li className="column__item"></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CoinAbout;