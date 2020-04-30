import React from 'react';
import { useSelector } from 'react-redux';
import { algorithmsSpecies } from '../../../../../data/productsData';
import FilterItems from '../FilterItems';
import { setFilters } from '../logicFilters';

const AlgorithmFilter = () => {
  const store = useSelector((store) => store.filtersState);

  let filtersStateObj = null;
  if (store.algorithm) {
    filtersStateObj = store.algorithm.filter;
  } else {
    filtersStateObj = Object.fromEntries(algorithmsSpecies);
  };

  const filtersArr = Object.entries(filtersStateObj);

  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, 'algorithm');
  };

  return <FilterItems filtersArr={filtersArr} onItemClick={onItemClick} />
};

export default AlgorithmFilter;
