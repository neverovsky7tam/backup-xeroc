import React, { useState } from 'react';
import ToggleBlock from '../../../BlocksUI/ToggleBlock';
import CoinAbout from './CoinAbout';
import { coinsData } from '../../../../data/coinsData';

const Coins = ({ item }) => {
  const [coin, setCoin] = useState(coinsData.btc);

  let prevItem = null;
  const setActiveCoin = (...args) => {
    console.log('args', args);
    const currentItem = args[0];
    if (prevItem) prevItem.classList.toggle('item-active');
    prevItem = currentItem;
  };

  return (
    <div className="coins">
      <div className="coins__control ">
        <ToggleBlock
          func={(item) => setActiveCoin(item, 'btc')}
          isActiveDefault={true}>
          <div className="icon-holder">
            <img src="./data/coins_img/btc.svg" alt="btc coin" />
          </div>
          <div className="text-block">
            <span className="text-block__title">Hello</span>
            <span className="text-block__subtitle">world</span>
          </div>
        </ToggleBlock>
        <ToggleBlock
          func={(item) => setActiveCoin(item, 'btc')}>
          <span>World</span>
          <span></span>
        </ToggleBlock>
      </div>
      <CoinAbout coin={coin} />
    </div>
  );
};

export default Coins;
