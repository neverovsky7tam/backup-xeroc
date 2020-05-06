import store from '../../../../store/store';
import { setOnSaleDisplay, setFiltersState, setFilterObj, setSearchToggle, setFilterOrigin } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';
import { searchLogic } from './Search/searchLogic';

export const setProductsDisplay = (isActive, value, isEnableFilter) => {
  const filterOrigin = store.getState().filterOrigin;
  let filterObj = store.getState().filterObj;

  const search = store.getState().searchToggle;

  const productsArr = Object.values(sortedProducts[value]);
  let renderObj = {};

  if (isActive) {
    productsArr.forEach((el) => {
      if (search.isEnable) {
        if (search.globalSearchObj[el.id]) renderObj[el.id] = el;
      } else {
        if (!filterObj[el.id]) renderObj[el.id] = el;
      };
      // save filters without search value
      if (!filterOrigin[el.id]) filterOrigin[el.id] = el;
    });

    renderObj = Object.assign(renderObj, search.filterSearchObj);
    store.dispatch(setFilterObj(renderObj));
    store.dispatch(setSearchToggle(search.inputVal, search.isEnable, search.globalSearchObj, renderObj));
  } else {
    if (search.isEnable) filterObj = search.filterSearchObj;
    productsArr.forEach((el) => {
      if (filterObj[el.id]) delete filterObj[el.id];
      // save filters without search value
      if (filterOrigin[el.id]) delete filterOrigin[el.id];
    });

    renderObj = filterObj;
    store.dispatch(setFilterObj(renderObj));
  };

  if (isEnableFilter) {
    store.dispatch(setOnSaleDisplay(Object.values(renderObj)));
  } else {
    if (search.isEnable) searchLogic(search.inputVal);
    else store.dispatch(setOnSaleDisplay(null));
  }
};

export const setFilters = (value, filter) => {
  const filtersStateObj = defineObject(filter);

  let isActive = filtersStateObj[value];
  isActive = (+isActive) ? 0 : 1;
  filtersStateObj[value] = isActive;

  store.dispatch(setFiltersState(filter, 'filter', filtersStateObj));
  store.dispatch(setFiltersState(filter, 'tag', value));

  const isEnableFilter = Object.values(filtersStateObj).reduce((sum, val) => sum += val);
  setProductsDisplay(isActive, value, isEnableFilter);
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

export const expandFilter = (e, isExpand, setExpandFilter, input) => {
  if (!isExpand && !input.value) {
    setExpandFilter(!isExpand);
  };

  if (e.target.closest('.arrow')) setExpandFilter(!isExpand);
};
