import store from '../../../../../store/store';
import { setSearchObj } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';
import { logicSearch } from '../logicSearch';

export const searchLogic = (e) => {
  const inputType = e.target.dataset.type;
  const inputVal = e.target.value.toLowerCase();

  const source = Object.keys(sortedProducts.search);
  const resultKeys = source.filter((el) => el.includes(inputVal));

  let tempArr = [];
  resultKeys.forEach((el) => {
    tempArr = tempArr.concat(sortedProducts.search[el]);
  });

  if (inputVal) {
    store.dispatch(setSearchObj(inputType, tempArr));
  } else {
    store.dispatch(setSearchObj(inputType, null));
  };

  logicSearch(inputType);
};