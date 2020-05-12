import React from 'react';
import { useSelector } from 'react-redux';
import { equipmentSpecies } from '../../../../../data/productsData';
import FilterItems from '../FilterItems';
import { setFilters } from '../logicFilters';

const EquipmentFilter = () => {
  const store = useSelector((store) => store.filtersState);

  let filtersStateObj = null;
  if (store.equipment) filtersStateObj = store.equipment.filter;
  else filtersStateObj = Object.fromEntries(equipmentSpecies);

  const itemsArr = Object.entries(filtersStateObj);

  const onItemClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, 'equipment');
  };

  return <FilterItems itemsArr={itemsArr} onItemClick={onItemClick} />
};

export default EquipmentFilter;