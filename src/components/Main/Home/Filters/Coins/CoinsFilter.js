import React from 'react';
import { useSelector } from 'react-redux';
import { coinsSpecies } from '../../../../../data/productsData';
import FilterItems from '../FilterItems';
import { setFilters } from '../logicFilters';

const CoinsFilter = () => {
  const store = useSelector((store) => store.filtersState);

  let filtersStateObj = null;
  if (store.coins) filtersStateObj = store.coins.filter;
  else filtersStateObj = Object.fromEntries(coinsSpecies);

  const itemsArr = Object.entries(filtersStateObj);

  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, 'coins');
  };

  return <FilterItems itemsArr={itemsArr} onItemClick={onItemClick} img={true} />
};

export default CoinsFilter;