import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TitleBlock from '../../BlocksUI/TitleBlock';
import OnSale from './OnSale/OnSale_MB';
import DescriptionShipping from './DescriptionShipping/DescriptionShipping';
import Specifications from './Specifications/Specifications';
import Coins from './Coins/Coins';
import { ReactComponent as Dots } from '../../../assets/img/3dots.svg';
import { ReactComponent as ToggleArrow } from '../../../assets/img/toggle-arrow.svg';

const ProductDetails_MB = () => {
  const item = useSelector((state) => state.currentProduct);
  const [currentHash, setCurrentHash] = useState(item.hash.value[0].h);
  const [showOnSale, setOnSale] = useState(true);
  const [showDescription, setDescription] = useState(true);
  const [showSpecifications, setSpecifications] = useState(true);
  const [showCoins, setCoinsDisplay] = useState(true);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });

  return (
    <>
      <div className={showOnSale ? "details-onsale" : "details-onsale-collapse"}>
        <TitleBlock
          text={'On sale'}
          icon={showOnSale ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setOnSale(!showOnSale)} />
        {
          showOnSale &&
          <OnSale
            item={item}
            currentHash={currentHash}
            setCurrentHash={setCurrentHash} />
        }
      </div>
      <div className={showDescription ? "details-description" : "details-description-collapse"}>
        <TitleBlock
          text={'Description & Shipping details'}
          icon={showDescription ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setDescription(!showDescription)} />
        {showDescription && <DescriptionShipping item={item} />}
      </div>
      <div className={showSpecifications ? "details-specifications" : "details-specifications-collapse"}>
        <TitleBlock
          text={'Specifications'}
          icon={showSpecifications ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setSpecifications(!showSpecifications)} />
        {showSpecifications && <Specifications item={item} />}
      </div>
      <div className={showCoins ? "details-coins" : "details-coins-collapse"}>
        <TitleBlock
          text={'Minable coins'}
          icon={showCoins ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setCoinsDisplay(!showCoins)} />
        {showCoins && <Coins item={item} currentHash={currentHash} />}
      </div>
    </>
  );
};

export default ProductDetails_MB;