import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/BlocksUI/Container';
import ToggleBlock from 'components/BlocksUI/ToggleBlock';
import { renderCoinInfoItems } from './CoinInfo';
import CoinAbout from './CoinAbout';
import CoinInfo from './CoinInfo';
import { coinsData } from 'data/coinsData';
import { BoxDecor } from 'components/Parts/BoxDecor';

let prevItem = null;
const Coins = ({ item, currentHash }) => {
  const isMobile = useSelector((state) => state.deviceType);
  const [coin, setCoin] = useState(coinsData[0]);
  const initialBlock = React.createRef();

  const setActiveCoin = (...args) => {
    const currentItem = args[0];
    if (prevItem) prevItem.classList.toggle('item-active');
    prevItem = currentItem;
    setCoin(args[1]);
  };

  useEffect(() => {
    initialBlock.current.click();
  }, []);

  return (
    <div className="coins">
      <div className="coins__control ">
        <ToggleBlock
          ref={initialBlock}
          func={(item) => setActiveCoin(item, coinsData[0])}>
          <div className="icon-holder">
            <img src={`./data/coins_img/${coinsData[0].value}.svg`} alt={`${coinsData[0].value} coin`} />
          </div>
          <div className="text-block">
            <span className="text-block__title">{coinsData[0].title} {coinsData[0].value.toUpperCase()}</span>
            <span className="text-block__subtitle">0.040563 / day</span>
          </div>
        </ToggleBlock>
        <ToggleBlock
          func={(item) => setActiveCoin(item, coinsData[1])}>
          <div className="icon-holder">
            <img src={`./data/coins_img/${coinsData[1].value}.svg`} alt={`${coinsData[1].value} coin`} />
          </div>
          <div className="text-block">
            <span className="text-block__title">{coinsData[1].title} {coinsData[1].value.toUpperCase()}</span>
            <span className="text-block__subtitle">5.448463 / day</span>
          </div>
        </ToggleBlock>
      </div>
      {
        isMobile &&
        <div className="coin-info">
          <div className="coin-info__body">
            {renderCoinInfoItems(coin, isMobile)}
          </div>
          <BoxDecor />
        </div>
      }
      <Container >
        <div className="d-flex">
          <CoinAbout coin={coin} item={item} currentHash={currentHash} />
          <div className="coin-info-widescreen"><CoinInfo coin={coin} /></div>
        </div>
      </Container>
    </div>
  );
};

export default Coins;
