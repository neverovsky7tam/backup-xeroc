import React from 'react';
import { useSelector } from 'react-redux';
import FilterItems from './FilterItems';
import { setFilters } from './logicFilters';

const FilterMain = ({ filterName, filterProps }) => {
  const store = useSelector((store) => store.filtersState);

  let filtersStateObj = null;
  if (store[filterName]) filtersStateObj = store[filterName].filter;
  else filtersStateObj = Object.fromEntries(filterProps);

  const itemsArr = Object.entries(filtersStateObj);

  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, filterName);
  };

  const image = (filterName === 'coins') ? true : false;
  return <FilterItems itemsArr={itemsArr} onItemClick={onItemClick} img={image} />
};

export default FilterMain;