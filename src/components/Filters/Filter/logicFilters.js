import store from 'store/store';
import { setOnSaleDisplay, setFiltersState, setFilterObj, setJointSearchObj, setFilterOrigin } from 'store/actions';
import { sortedProducts } from 'data/productsProcessing';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from 'data/productsData';

export const setProductsDisplay = (filter, value, isActive) => {
  const filterOrigin = store.getState().filterOrigin;
  const filterOriginObj = {};
  const search = store.getState().jointSearchObj;
  const productsArr = Object.values(sortedProducts[filter][value]);
  let renderObj = {};
  let filtersCounter = 0;

  if (isActive) {
    filtersCounter = 1;
    productsArr.forEach((el) => {
      if (!filterOrigin[el.id]) filterOriginObj[el.id] = el;
    });

    store.dispatch(setFilterOrigin(filterOriginObj, true));
    const filterOriginMod = store.getState().filterOrigin;

    if (search.isEnable) {
      const tempObj = {};
      const filterProductsIDs = Object.keys(filterOriginMod);
      filterProductsIDs.forEach((id) => {
        if (search.globalSearchObj[id]) tempObj[id] = search.globalSearchObj[id];
      });
      renderObj = tempObj;
      store.dispatch(setFilterOrigin(renderObj, false));
    } else {
      renderObj = Object.assign({}, filterOriginMod);
    }

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

    if (search.isEnable) {
      const tempObj = {};
      const productsIDs = Object.keys(renderObj);
      productsIDs.forEach((id) => {
        if (search.filterSearchObj[id]) tempObj[id] = search.filterSearchObj[id];
      });
      renderObj = tempObj;
    };

    store.dispatch(setFilterOrigin(renderObj, false));
  };

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
