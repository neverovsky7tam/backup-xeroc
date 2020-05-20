import React from 'react';
import FilterItems from './FilterItems';
import { setFilters } from './logicFilters';

const EquipmentSearch = ({ filterName, itemsArr, setExpand, setSearchExpand }) => {
  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, filterName);
    setExpand(true);
    setSearchExpand(false);
  };

  const image = (filterName === 'coins') ? true : false;
  return <FilterItems itemsArr={itemsArr} onItemClick={onItemClick} img={image} />
};

export default EquipmentSearch;