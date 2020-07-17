import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import setSliderItems from './ProductsSlider/setSliderItems';
import TitleBlock from 'components/BlocksUI/TitleBlock';
import OnSale from './OnSale/OnSale_MB';
import DescriptionShipping from './DescriptionShipping/DescriptionShipping';
import Specifications from './Specifications/Specifications';
import Coins from './Coins/Coins';
import ProductsSliderControls from './ProductsSlider/ProductsSliderControls';
import ProductsSlider from './ProductsSlider/ProductsSlider';
import { Dots, ToggleArrow } from 'svg/svg';

const ProductDetails_MB = () => {
  const item = useSelector((state) => state.currentProduct);

  const [currentHash, setCurrentHash] = useState(item.hash.value[0].h);
  const [showOnSale, setOnSale] = useState(true);
  const [showDescription, setDescription] = useState(true);
  const [showSpecifications, setSpecifications] = useState(true);
  const [showCoins, setCoinsDisplay] = useState(true);
  const [showRelated, setRelatedDisplay] = useState(true);
  const [showRecently, setRecentlyDisplay] = useState(true);

  const relatedProducts = setSliderItems(item, 'related');
  const recentlyProducts = setSliderItems(item);

  const [relatedItem, setRelatedItem] = useState([relatedProducts[0]]);
  const [recentlyItem, setRecentlyItem] = useState([recentlyProducts[0]]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [item]);

  return (
    <>
      <div className={showOnSale ? "details details_onsale" : "details-collapse"}>
        <TitleBlock
          text={'On sale'}
          icon={showOnSale ? { ToggleArrow } : { Dots }}
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
      <div className={showDescription ? "details" : "details-collapse"}>
        <TitleBlock
          text={'Description & Shipping details'}
          icon={showDescription ? { ToggleArrow } : { Dots }}
          style={{ marginTop: '0' }}
          func={() => setDescription(!showDescription)} />
        {showDescription && <DescriptionShipping item={item} />}
      </div>
      <div className={showSpecifications ? "details" : "details-collapse"}>
        <TitleBlock
          text={'Specifications'}
          icon={showSpecifications ? { ToggleArrow } : { Dots }}
          style={{ marginTop: '0' }}
          func={() => setSpecifications(!showSpecifications)} />
        {showSpecifications && <Specifications item={item} />}
      </div>
      <div className={showCoins ? "details" : "details-collapse"}>
        <TitleBlock
          text={'Minable coins'}
          icon={showCoins ? { ToggleArrow } : { Dots }}
          style={{ marginTop: '0' }}
          func={() => setCoinsDisplay(!showCoins)} />
        {showCoins && <Coins item={item} currentHash={currentHash} />}
      </div>
      <div className={showRelated ? "details" : "details-collapse"}>
        <div className="details-header-combine">
          <TitleBlock
            text={'Related products'}
            icon={showRelated ? { ToggleArrow } : { Dots }}
            style={{ marginTop: '0' }}
            func={() => setRelatedDisplay(!showRelated)} />
          <ProductsSliderControls items={relatedProducts} setItem={setRelatedItem} />
        </div>
        {showRelated && <ProductsSlider items={relatedItem} />}
      </div>
      <div className={showRecently ? "details" : "details-collapse"}>
        <div className="details-header-combine">
          <TitleBlock
            text={'Recently viewed'}
            icon={showRecently ? { ToggleArrow } : { Dots }}
            style={{ marginTop: '0' }}
            func={() => setRecentlyDisplay(!showRecently)} />
          <ProductsSliderControls items={recentlyProducts} setItem={setRecentlyItem} />
        </div>
        {showRecently && <ProductsSlider items={recentlyItem} />}
      </div>
    </>
  );
};

export default ProductDetails_MB;