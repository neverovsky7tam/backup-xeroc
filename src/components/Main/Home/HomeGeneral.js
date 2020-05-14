import React from 'react';
import HomeOnsale from './OnSale/HomeOnsale';
import HomeFilters from './Filters/HomeFilters';
import HomeListings from './Listings/HomeListings';
import HomeNews from './News/HomeNews';
import { productsObj } from '../../../data/productsData';

const Home = () => {
  return (
    <div className="home-wrapper">
      <HomeFilters />
      <HomeOnsale />
      <HomeListings productsObj={productsObj} />
      <HomeNews />
    </div>
  );
};

export default Home;