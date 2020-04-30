import store from '../../../../store/store';
import { setOnSaleDisplay, setFiltersState } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';

const tempObj = {};
export const setProductsDisplay = (isActive, value, isEmpty) => {
  const productsArr = Object.values(sortedProducts[value]);

  if (productsArr.length) {
    productsArr.forEach((el) => {
      if (isActive) {
        if (!tempObj[el.id]) tempObj[el.id] = el;
      } else {
        if (tempObj[el.id]) delete tempObj[el.id];
      }
    });
  }

  if (isEmpty) store.dispatch(setOnSaleDisplay(Object.values(tempObj)));
  else store.dispatch(setOnSaleDisplay(null));
};

export const setFilters = (value, filter) => {
  const filtersStateObj = defineObject(filter);

  let isActive = filtersStateObj[value];
  isActive = (+isActive) ? 0 : 1;
  filtersStateObj[value] = isActive;

  store.dispatch(setFiltersState(filter, 'filter', filtersStateObj));
  store.dispatch(setFiltersState(filter, 'tag', value));

  const isEmpty = Object.values(filtersStateObj).reduce((sum, val) => sum + val);
  setProductsDisplay(isActive, value, isEmpty);
};

const defineObject = (filter) => {
  const state = store.getState();
  let filtersStateObj = null;

  if (state.filtersState) {
    if (state.filtersState[filter]) {
      filtersStateObj = state.filtersState[filter].filter;
    }
    else {
      switch (filter) {
        case 'algorithm':
          filtersStateObj = algorithmsSpecies;
          break;
        case 'coin':
          filtersStateObj = coinsSpecies;
          break;
        case 'equipment':
          filtersStateObj = equipmentSpecies;
          break;
        case 'manufacturer':
          filtersStateObj = manufacturerSpecies;
          break;
      };
      filtersStateObj = Object.fromEntries(filtersStateObj);
    };
  };
  return filtersStateObj;
};

export const expandFilter = (e, isExpand, setExpandFilter, setSearchExpand, input) => {
  if (!isExpand && !input.value) {
    setExpandFilter(!isExpand);
  };

  if (e.target.closest('.arrow')) setExpandFilter(!isExpand);
};
