import React from 'react';
import OnSale from '../OnSale/OnSale';
import Filters from '../Filters/Filters';
import Listings from '../Listings/Listings';
import News from '../News/News';
import { productsObj } from '../../../data/productsData';

const HomeDesctop = () => {
  return (
    <div className="home-wrapper">
      <Filters />
      <OnSale />
      <Listings productsObj={productsObj} />
      <News />
    </div>
  );
};

export default HomeDesctop;