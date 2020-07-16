import React from 'react';
import store from '../store/store';
import OnSale from '../components/OnSale/OnSale';

const Home = () => {
  const isGridView = store.getState().productsListType;

  return (
    <OnSale />

  );
};

export default Home;