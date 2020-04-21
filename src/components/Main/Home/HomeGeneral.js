import React from 'react';
import HomeOnsale from './OnSale/HomeOnsale';
import HomeFilters from './Filters/HomeFilters';
import HomeListings from './Listings/HomeListings';
import HomeNews from './News/HomeNews';

const Home = () => {
  return (
    <div className="main-inner">
      <HomeFilters />
      <HomeOnsale />
      <HomeListings />
      <HomeNews />
    </div>
  )
}

export default Home;