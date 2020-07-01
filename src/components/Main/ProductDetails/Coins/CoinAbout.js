import React from 'react';
import Container from '../../../BlocksUI/Container';
import { ReactComponent as GreenArrow } from '../../../../assets/img/green-arrow.svg';
import { ReactComponent as RedArrow } from '../../../../assets/img/red-arrow.svg';


const CoinAbout = ({ coin }) => {
  console.log('coin', coin);
  return (
    <Container>
      <div className="coin-about">
        <div className="coin-about__header">
          <h3>Bitcoin {coin.value.toUpperCase()}</h3>
          <div className="coin-about__header-left">
            <span className="price">${coin['Bitcoin Price']}</span>
            <span className="dynamics">{coin.dynamics}%</span>
            {(coin.dynamics > 0) ? <GreenArrow /> : <RedArrow />}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoinAbout;