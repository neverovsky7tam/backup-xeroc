import store from '../../../../store/store';
import { setOnSaleDisplay, setFiltersState, setSearchToggle } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';
import { searchLogic } from './Search/searchLogic';

export const setProductsDisplay = (isActive, value, isEnableFilter) => {
  let filterObj = store.getState().filterObj;
  console.log('filterObj', filterObj);

  const searchState = store.getState().searchToggle;
  console.log('searchState', searchState);

  const productsArr = Object.values(sortedProducts[value]);
  console.log('productsArr', productsArr);

  // filter active
  if (isActive) {
    if (searchState.isEnable) {
      let renderObj = {};
      productsArr.forEach((el) => {
        if (searchState.searchObj[el.id]) renderObj[el.id] = el;
      });

      renderObj = Object.assign(renderObj, searchState.searchFiltersObj);
      store.dispatch(setOnSaleDisplay(Object.values(renderObj)));
      store.dispatch(setSearchToggle(searchState.inputVal, true, searchState.searchObj, renderObj));
    } else {
      productsArr.forEach((el) => {
        if (!filterObj[el.id]) filterObj[el.id] = el;
      });

      if (isEnableFilter) store.dispatch(setOnSaleDisplay(Object.values(filterObj)));
      else store.dispatch(setOnSaleDisplay(null));
    }
    // filter disactive 
  } else {
    // search is active
    if (searchState.isEnable) {
      // search + filter
      console.log('searchFiltersObj', searchState.searchFiltersObj);
      productsArr.forEach((el) => {
        if (searchState.searchFiltersObj[el.id]) delete searchState.searchFiltersObj[el.id];
        if (filterObj[el.id]) delete filterObj[el.id];
      });

      if (isEnableFilter) {
        store.dispatch(setOnSaleDisplay(Object.values(searchState.searchFiltersObj)));
      } else {

        store.dispatch(setOnSaleDisplay(Object.values(searchState.searchObj)));
      }
      // filter + search
      // } else {
      //   productsArr.forEach((el) => {
      //     if (searchState.searchObj[el.id]) delete searchState.searchObj[el.id];
      //   });

      //   console.log('no filters')
      //   if (isEnableFilter) {
      //     store.dispatch(setOnSaleDisplay(Object.values(searchState.searchObj)));
      //   } else {
      //     searchLogic(searchState.inputVal);
      //   }
      // }
      // search disactive
    } else {
      productsArr.forEach((el) => {
        if (filterObj[el.id]) delete filterObj[el.id];
      });

      if (isEnableFilter) store.dispatch(setOnSaleDisplay(Object.values(filterObj)));
      else store.dispatch(setOnSaleDisplay(null));
    }
  };
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
