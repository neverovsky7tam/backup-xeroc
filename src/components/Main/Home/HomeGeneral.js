import React from 'react';
import HomeOnsale from './OnSale/HomeOnsale';
import HomeFilters from './Filters/HomeFilters';
import HomeListings from './Listings/HomeListings';

const Home = () => {
  return (
    <div className="main-inner">
      <HomeFilters />
      <HomeOnsale />
      <HomeListings />
      <section className="news home-page">
        <div className="main-header">
          <h2>news</h2>
        </div>
        <div className="main-body">Hello world</div>
      </section>
    </div>
  )
}

export default Home;