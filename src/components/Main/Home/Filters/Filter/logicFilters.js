import store from '../../../../../store/store';
import { setOnSaleDisplay, setFiltersState, setFilterObj, setJointSearchObj } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../../data/productsData';

export const setProductsDisplay = (filter, value, isActive, isEnableFilter) => {
  const filterOrigin = store.getState().filterOrigin;
  console.log('filterOrigin', filterOrigin)
  let filterObj = store.getState().filterObj;
  console.log('filterObj', filterObj)
  const search = store.getState().jointSearchObj;
  const productsArr = Object.values(sortedProducts[filter][value]);
  let renderObj = {};

  if (isActive) {
    productsArr.forEach((el) => {
      if (search.isEnable) {
        if (search.globalSearchObj[el.id]) renderObj[el.id] = el;
      } else {
        if (!filterObj[el.id]) renderObj[el.id] = el;
      };
      // save filters without searching data
      if (!filterOrigin[el.id]) filterOrigin[el.id] = el;
    });

    renderObj = Object.assign(renderObj, search.filterSearchObj);
    store.dispatch(setFilterObj(renderObj));
    store.dispatch(setJointSearchObj(search.isEnable, search.globalSearchObj, renderObj));
  } else {
    if (search.isEnable) filterObj = search.filterSearchObj;
    productsArr.forEach((el) => {
      if (filterObj[el.id]) delete filterObj[el.id];
      // save filters without searching data
      if (filterOrigin[el.id]) delete filterOrigin[el.id];
    });

    renderObj = filterObj;
    store.dispatch(setFilterObj(renderObj));
  };

  if (isEnableFilter) {
    store.dispatch(setOnSaleDisplay(Object.values(renderObj)));
  } else {
    if (search.isEnable) store.dispatch(setOnSaleDisplay(Object.values(search.globalSearchObj)));
    else store.dispatch(setOnSaleDisplay(null));
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
  setProductsDisplay(filter, value, isActive, isEnableFilter);
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
        case 'coins':
          filtersStateObj = coinsSpecies;
          break;
        case 'equipment':
          filtersStateObj = equipmentSpecies;
          break;
        case 'manufacturer':
          filtersStateObj = manufacturerSpecies;
          break;
        default:
          return filtersStateObj;
      };
      filtersStateObj = Object.fromEntries(filtersStateObj);
    };
  };
  return filtersStateObj;
};

export const expandFilter = (e, isExpand, setExpand, isSearch, setSearchExpand, input) => {
  if (!isExpand && !input.value) {
    console.log(isExpand, input.value)
    setExpand(!isExpand);
  };
  
  if (e.target.closest('.arrow')) {
    if (isSearch) setSearchExpand(false);
    setExpand(!isExpand);
  };
};
