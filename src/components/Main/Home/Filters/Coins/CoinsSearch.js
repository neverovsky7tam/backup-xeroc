import React from 'react';
import FilterItems from '../FilterItems';
import { setFilters } from '../logicFilters';

const CoinsSearch = ({ itemsArr, setExpand, setSearchExpand }) => {
  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, 'coins');
    setExpand(true);
    setSearchExpand(false);
  };

  return (
    <FilterItems itemsArr={itemsArr} onItemClick={onItemClick} />
  );
};

export default CoinsSearch;