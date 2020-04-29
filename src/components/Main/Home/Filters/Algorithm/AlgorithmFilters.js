import React from 'react';
import { useSelector } from 'react-redux';
import { setFilters } from '../logicFilters';
import { algorithmsSpecies } from '../../../../../data/productsData';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const AlgorithmFilter = () => {

  const store = useSelector((store) => store.filtersState);

  let filtersStateObj = null;
  if (store.algorithm) {
    filtersStateObj = store.algorithm.filter;
  } else {
    filtersStateObj = Object.fromEntries(algorithmsSpecies);
  };

  const filtersStateArr = Object.entries(filtersStateObj);

  const onFilterClick = (e) => {
    const value = e.currentTarget.dataset.value;
    setFilters(value, filtersStateObj, 'algorithm');
  };

  return (
    <ul className="filter__items-container filter__items-container_txt">
      {filtersStateArr.map((el, idx) => {
        return (
          <li
            key={idx}
            className={(el[1]) ? 'filter__item filter__item_active' : 'filter__item'}
            data-active={el[1]}
            data-value={el[0]}
            onClick={onFilterClick}>
            <div className="filter__item-inner">
              {el[0]}
              <BoxDecor />
            </div>
          </li>
        )
      })}
    </ul>
  )
};

export default AlgorithmFilter;
