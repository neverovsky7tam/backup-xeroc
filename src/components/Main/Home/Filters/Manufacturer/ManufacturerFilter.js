import React from 'react';
import { useSelector } from 'react-redux';
import { manufacturerSpecies } from '../../../../../data/productsData';
import FilterItems from '../FilterItems';
import { setFilters } from '../logicFilters';

const CoinsFilter = () => {
  const store = useSelector((store) => store.filtersState);

  let filtersStateObj = null;
  if (store.coins) filtersStateObj = store.coins.filter;
  else filtersStateObj = Object.fromEntries(manufacturerSpecies);

  const itemsArr = Object.entries(filtersStateObj);

  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, 'manufacturer');
  };

  return <FilterItems itemsArr={itemsArr} onItemClick={onItemClick} />
};

export default CoinsFilter;