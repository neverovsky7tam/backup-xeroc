import React, { useEffect } from 'react';
import { setFiltersState } from '../../../../store/actions';
import { useDispatch, useStore } from 'react-redux';
import { onItemClick } from './logicFilters';
import { algorithmsSpecies } from '../../../../data/productsData';
import { BoxDecor } from '../../../Parts/BoxDecor';

const AlgorithmFilter = ({ field }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setFiltersState('algorithm', filtersStateObj));
  });

  const store = useStore();
  const state = store.getState();

  let filtersStateObj = null;
  if (state.filtersState.algorithm) {
    filtersStateObj = state.filtersState.algorithm;
  } else {
    filtersStateObj = Object.fromEntries(algorithmsSpecies);
  }

  const filtersStateArr = Object.entries(filtersStateObj);

  const onFilterClick = (e) => {
    onItemClick(e, field);
    const item = e.currentTarget;
    const isActive = (+item.dataset.active);
    const value = item.dataset.value;
    filtersStateObj[value] = isActive;
  }

  return (
    <ul className="filter filter_text-block">
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
