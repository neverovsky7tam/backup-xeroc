import React from 'react';
import HomeOnsale from './HomeOnsale';
import HomeFilters from './HomeFilters';
import HomeListings from './HomeListings';

const Home = () => {
  return (
    <div className="main-inner">
      <HomeFilters />
      <HomeOnsale />
      <HomeListings />
      <section className="news">
        <h2>news</h2>
        <div className="main-section-inner">Hello world</div>
      </section>
    </div>
  )
}

export default Home;