import React, { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { setFiltersState, setUserFilterSelect } from '../../../../../store/actions';
import { onItemClick } from '../logicFilters';
import { algorithmsSpecies } from '../../../../../data/productsData';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const AlgorithmFilter = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   return () => dispatch(setFiltersState('algorithm', filtersStateObj));
  // });

  // const store = useStore();
  // const state = store.getState();
  // console.log('state', state);
  const store = useSelector((store) => store.filtersState);
  console.log('store', store);

  let filtersStateObj = null;
  if (store.algorithm) {
    filtersStateObj = store.algorithm;
  } else {
    filtersStateObj = Object.fromEntries(algorithmsSpecies);
  };

  const filtersStateArr = Object.entries(filtersStateObj);

  // const userSelectObj = {};
  const onFilterClick = (e) => {
    onItemClick(e, filtersStateObj);
    // const item = e.currentTarget;
    // const isActive = (+item.dataset.active);
    // const value = item.dataset.value;
    // filtersStateObj[value] = isActive;
    // console.log('filtersStateObj', filtersStateObj)

    // if (isActive) {
    //   if (!userSelectObj[value]) userSelectObj[value] = isActive;
    // } else {
    //   if (userSelectObj[value]) delete userSelectObj[value];
    // }
    // console.log('userSelectObj', Object.keys(userSelectObj));

    // dispatch(setFiltersState('algorithm', filtersStateObj));
    // dispatch(setUserFilterSelect('algorithm', Object.keys(userSelectObj)));       
    // setUserSelect(Object.keys(userSelectObj));
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
