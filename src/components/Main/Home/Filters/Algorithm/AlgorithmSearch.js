import React from 'react';
import FilterItems from '../FilterItems';
import { setFilters } from '../logicFilters';

const AlgorithmSearch = ({ filtersArr, setExpand, setSearchExpand }) => {
  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, 'algorithm');

    setExpand(true);
    setSearchExpand(false);
  };

  return (
    <FilterItems filtersArr={filtersArr} onItemClick={onItemClick} />
  )
};

export default AlgorithmSearch;