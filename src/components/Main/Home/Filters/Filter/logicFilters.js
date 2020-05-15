import store from '../../../../../store/store';
import { setOnSaleDisplay, setFiltersState, setFilterObj, setJointSearchObj } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../../data/productsData';

export const setProductsDisplay = (filter, value, isActive, filtersCounter) => {
  const filterOrigin = store.getState().filterOrigin;
  let filterObj = store.getState().filterObj;
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

    renderObj = Object.assign(renderObj, filterObj);
    store.dispatch(setFilterObj(renderObj));
    store.dispatch(setJointSearchObj(search.isEnable, search.globalSearchObj, Object.assign(search.filterSearchObj, renderObj)));
  } else {
    const filtersState = store.getState().filtersState;
    const tempObj = {};

    filtersState[filter].tag.forEach((el) => {
      Object.assign(renderObj, sortedProducts[filter][el]);
    });

    if (search.isEnable) {
      const compareArr = Object.keys(search.filterSearchObj);
      compareArr.forEach((el) => {
        if (renderObj[el]) tempObj[el] = renderObj[el];
      });
      renderObj = tempObj;
    };
    store.dispatch(setFilterObj(renderObj));
  };

  if (filtersCounter) {
    console.log('set', Object.values(renderObj));
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

  let isEnableFilter = 0;
  const currentFilterCounter = Object.values(filtersStateObj).reduce((sum, val) => sum += val);
  if (currentFilterCounter) isEnableFilter = 1;

  store.dispatch(setFiltersState(filter, 'filter', filtersStateObj, isEnableFilter));
  store.dispatch(setFiltersState(filter, 'tag', value, isEnableFilter));

  const filtersState = store.getState().filtersState;
  console.log('filtersState', filtersState);
  let filtersCounter = 0;
  for (let key in filtersState) {
    console.log('isEnableFilter', filtersState[key].isEnableFilter);
    filtersCounter += filtersState[key].isEnableFilter;
  };
  console.log('filtersCounter', filtersCounter);

  setProductsDisplay(filter, value, isActive, filtersCounter);
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
  if (!isExpand && !input.value) setExpand(!isExpand);

  if (e.target.closest('.arrow')) {
    if (isSearch) setSearchExpand(false);
    setExpand(!isExpand);
  };
};
