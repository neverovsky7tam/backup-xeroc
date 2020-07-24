import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCloseCross, setPageTopContent } from 'store/actions';
import StickyTitleBlock from 'components/BlocksUI/StickyTitleBlock';
import TitleBlock from 'components/BlocksUI/TitleBlock';
import OnSale from './modules/OnSale/OnSaleMB';
import DescriptionShipping from './modules/DescriptionShipping';
import Specifications from './modules/Specifications';
import Coins from './modules/Coins';
import ProductsSlider from './modules/ProductsSlider';
import ProductsSliderControls from './modules/ProductsSlider/ProductsSliderControls';
import setSliderItems from './modules/ProductsSlider/setSliderItems';
import { Dots, ToggleArrow } from 'svg/svg';

const ProductDetailsMB = ({ item }) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(setCloseCross(true));
    dispatch(setPageTopContent('Details'));
  }, []);

  return (
    <>
      <div className={showOnSale ? "details details_onsale" : "details-collapse"}>
        <StickyTitleBlock
          text={'On sale'}
          icon={showOnSale ? <span className="dots">{Dots}</span> : <span className="toggle-arrow">{ToggleArrow}</span>}
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
        <StickyTitleBlock
          text={'Description & Shipping details'}
          icon={showDescription ? <span className="dots">{Dots}</span> : <span className="toggle-arrow">{ToggleArrow}</span>}
          func={() => setDescription(!showDescription)} />
        {showDescription && <DescriptionShipping item={item} />}
      </div>
      <div className={showSpecifications ? "details" : "details-collapse"}>
        <StickyTitleBlock
          text={'Specifications'}
          icon={showSpecifications ? <span className="dots">{Dots}</span> : <span className="toggle-arrow">{ToggleArrow}</span>}
          func={() => setSpecifications(!showSpecifications)} />
        {showSpecifications && <Specifications item={item} />}
      </div>
      <div className={showCoins ? "details" : "details-collapse"}>
        <StickyTitleBlock
          text={'Minable coins'}
          icon={showCoins ? <span className="dots">{Dots}</span> : <span className="toggle-arrow">{ToggleArrow}</span>}
          func={() => setCoinsDisplay(!showCoins)} />
        {showCoins && <Coins item={item} currentHash={currentHash} />}
      </div>
      <div className={showRelated ? "details" : "details-collapse"}>
        <div className="sticky-header d-flex">
          <TitleBlock
            text={'Related products'}
            icon={showRelated ? <span className="dots">{Dots}</span> : <span className="toggle-arrow">{ToggleArrow}</span>}
            style={{ marginTop: '0' }}
            func={() => setRelatedDisplay(!showRelated)} />
          <ProductsSliderControls items={relatedProducts} setItem={setRelatedItem} />
        </div>
        {showRelated && <ProductsSlider items={relatedItem} />}
      </div>
      <div className={showRecently ? "details" : "details-collapse"}>
        <div className="sticky-header d-flex">
          <TitleBlock
            text={'Recently viewed'}
            icon={showRecently ? <span className="dots">{Dots}</span> : <span className="toggle-arrow">{ToggleArrow}</span>}
            style={{ marginTop: '0' }}
            func={() => setRecentlyDisplay(!showRecently)} />
          <ProductsSliderControls items={recentlyProducts} setItem={setRecentlyItem} />
        </div>
        {showRecently && <ProductsSlider items={recentlyItem} />}
      </div>
    </>
  );
};

export default ProductDetailsMB;