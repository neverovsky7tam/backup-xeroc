import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TitleBlock from '../../../BlocksUI/TitleBlock';
import OnSale from './OnSale';
import DescriptionShipping from './DescriptionShipping';
import Specifications from '../Specifications';
import { ReactComponent as Dots } from '../../../../assets/img/3dots.svg';
import { ReactComponent as ToggleArrow } from '../../../../assets/img/toggle-arrow.svg';

const ProductDetails = () => {
  const item = useSelector((state) => state.currentProduct);
  const [showOnSale, setOnSale] = useState(false);
  const [showDescription, setDescription] = useState(false);
  const [showSpecifications, setSpecifications] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  });

  return (
    <>
      <div className="details-onsale">
        <TitleBlock
          text={'On sale'}
          icon={showOnSale ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setOnSale(!showOnSale)} />
        {showOnSale && <OnSale item={item} isExpand={showOnSale} />}
      </div>
      <div className="details-description">
        <TitleBlock
          text={'Description & Shipping details'}
          icon={showDescription ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setDescription(!showDescription)} />
        {showDescription && <DescriptionShipping item={item} />}
      </div>
      <div className="details-specifications">
        <TitleBlock
          text={'Specifications'}
          icon={showSpecifications ? <ToggleArrow /> : <Dots />}
          style={{ marginTop: '0' }}
          func={() => setSpecifications(!showSpecifications)} />
        {showSpecifications && <Specifications item={item} />}
      </div>
    </>
  );
};

export default ProductDetails;