import React from 'react';
import { useSelector } from 'react-redux';
import Filters from '../Filters/Filters';
import OnSale from '../OnSale/OnSale';
import Listings from '../Listings/Listings';
import News from '../News/News';
import Details from '../ProductDetails/Details';
import { productsObj } from '../../../data/productsData';

const GeneralBlock = () => {
  const isMobile = useSelector((state) => state.deviceType);
  const contentVar = useSelector((state) => state.generalBlockState);

  let content = null;
  if (contentVar === 'home') content = <OnSale />;
  if (contentVar === 'productDetails') content = <Details />;

  return (
    <div className="general">
      {!isMobile && <Filters />}
      {content}
      {!isMobile && <Listings productsObj={productsObj} />}
      {!isMobile && <News />}
    </div>
  );
};

export default GeneralBlock;