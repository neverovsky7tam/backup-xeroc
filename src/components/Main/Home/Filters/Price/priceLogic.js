import store from '../../../../../store/store';
import { setSearchObj } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';
import { logicSearch } from '../logicSearch';

export const priceLogic = (e) => {
  const inputType = e.target.dataset.type;
  const inputVal = +e.target.value;

  const source = Object.keys(sortedProducts.byPrice);

  let tempArr = [];
  if (inputType === 'minPrice') {
    source.forEach((key) => {
      if (+key >= inputVal) tempArr = tempArr.concat(sortedProducts.byPrice[key]);
    });
  } else {
    source.forEach((key) => {
      if (+key <= inputVal) tempArr = tempArr.concat(sortedProducts.byPrice[key]);
    });
  };

  if (inputVal) {
    store.dispatch(setSearchObj(inputType, tempArr));
  } else {
    store.dispatch(setSearchObj(inputType, []));
  };

  logicSearch(inputType);
};