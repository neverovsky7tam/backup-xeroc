import store from '../../../../../store/store';
import { setSearchObj } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';
import { logicSearch } from '../logicSearch';

export const searchLogic = (e) => {
  const inputType = e.target.dataset.type;
  const inputVal = e.target.value.toLowerCase();

  if (inputVal) {
    const source = Object.keys(sortedProducts.search);
    const resultKeys = source.filter((el) => el.includes(inputVal));

    let tempArr = [];
    resultKeys.forEach((el) => {
      tempArr = tempArr.concat(sortedProducts.search[el]);
    });
    console.log('tempArr', tempArr);
    store.dispatch(setSearchObj(inputType, 1, tempArr));
  } else {
    store.dispatch(setSearchObj(inputType, 0, []));
  };

  logicSearch(inputType);
};