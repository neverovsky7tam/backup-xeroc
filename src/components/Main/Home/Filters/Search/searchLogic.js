import store from '../../../../../store/store';
import { setOnSaleDisplay, setSearchToggle } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';

export const searchLogic = (e) => {
  const filterObj = store.getState().filterObj;
  console.log('sort-filterObj', filterObj);

  const globalObj = sortedProducts.byID;

  const globalSearchObj = {};
  const searchObj = {};
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

    if (Object.keys(filterObj).length) {
      if (filterObj[el.id]) searchObj[el.id] = el;
    }
  });

  if (Object.keys(filterObj).length) store.dispatch(setOnSaleDisplay(Object.values(searchObj)));
  else store.dispatch(setOnSaleDisplay(Object.values(globalSearchObj)));

  if (inputVal) {
    store.dispatch(setSearchToggle(inputVal, true, globalSearchObj, searchObj));
  } else {
    store.dispatch(setSearchToggle(null, false, null, null));
  }
};