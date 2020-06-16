import store from '../../../../store/store';
import { setOnSaleDisplay, setFiltersState, setFilterObj, setJointSearchObj, setFilterOrigin } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';

export const setProductsDisplay = (filter, value, isActive) => {
  const filterOrigin = store.getState().filterOrigin;
  const filterOriginObj = {};
  const filterObj = store.getState().filterObj;
  console.log('filterObj', filterObj);
  const search = store.getState().jointSearchObj;
  console.log('search', search);
  const productsArr = Object.values(sortedProducts[filter][value]);
  let renderObj = {};
  let filtersCounter = 0;

  if (isActive) {
    filtersCounter = 1;
    productsArr.forEach((el) => {
      if (search.isEnable) {
        if (search.globalSearchObj[el.id]) renderObj[el.id] = el;
      } else {
        if (!filterObj[el.id]) renderObj[el.id] = el;
      };
      // save filters without searching data
      if (!filterOrigin[el.id]) filterOriginObj[el.id] = el;
    });
    store.dispatch(setFilterOrigin(filterOriginObj, true));

    renderObj = Object.assign(renderObj, filterObj);
    console.log('renderObj', renderObj);
    store.dispatch(setFilterObj(renderObj));
    store.dispatch(setJointSearchObj(search.isEnable, search.globalSearchObj, Object.assign(search.filterSearchObj, renderObj)));
  } else {
    const filtersState = store.getState().filtersState;

    for (let key in filtersState) {
      filtersCounter += filtersState[key].isEnableFilter;

      if (filtersState[key].isEnableFilter) {
        filtersState[key].tag.forEach((el) => {
          Object.assign(renderObj, sortedProducts[key][el]);
        });
      };
    };
    // save filters without searching data
    Object.assign(filterOriginObj, renderObj);
    store.dispatch(setFilterOrigin(filterOriginObj, false));

    if (search.isEnable) {
      const tempObj = {};
      const compareArr = Object.keys(search.filterSearchObj);
      compareArr.forEach((el) => {
        if (renderObj[el]) tempObj[el] = renderObj[el];
      });
      renderObj = tempObj;
    };
    
    store.dispatch(setFilterObj(renderObj));
  };

  console.log('filterOrigin-after', store.getState().filterOrigin)
  if (filtersCounter) {
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

  setProductsDisplay(filter, value, isActive);
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
