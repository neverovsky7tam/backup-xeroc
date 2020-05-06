import store from '../../../../../store/store';
import { setOnSaleDisplay, setSearchToggle } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';

export const searchLogic = (e) => {
  const filterOrigin = store.getState().filterOrigin;

  const globalObj = sortedProducts.byID;

  const globalSearchObj = {};
  const filterSearchObj = {};
  const tempObj = {};

  let inputVal = null;
  if (e.type) inputVal = e.target.value.toLowerCase();
  else inputVal = e;

  const source = Object.keys(sortedProducts.search);
  const resultKeys = source.filter((el) => el.includes(inputVal));

  resultKeys.forEach((el) => {
    if (sortedProducts.search[el]) tempObj[el] = sortedProducts.search[el];
  });

  const findItems = Object.values(tempObj);
  findItems.forEach((el) => {
    if (globalObj[el.id]) globalSearchObj[el.id] = el;

    if (Object.keys(filterOrigin).length) {
      if (filterOrigin[el.id]) filterSearchObj[el.id] = el;
    }
  });

  if (Object.keys(filterOrigin).length) store.dispatch(setOnSaleDisplay(Object.values(filterSearchObj)));
  else store.dispatch(setOnSaleDisplay(Object.values(globalSearchObj)));

  if (inputVal) {
    store.dispatch(setSearchToggle(inputVal, true, globalSearchObj, filterSearchObj));
  } else {
    store.dispatch(setSearchToggle(null, false, {}, {}));
  }
};