import store from '../../../../store/store';
import { setOnSaleDisplay, setJointSearchObj } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsProcessing';

export const logicSearch = (inputType) => {
  const filterOrigin = store.getState().filterOrigin;
  const searchObj = store.getState().searchObj
  console.log('searchObj', searchObj, inputType);

  for (let key in searchObj) {
    console.log('length', searchObj[key].length)
    if (key !== inputType) {
      console.log('key', key);

    }
  }

  // const searchState = store.getState().jointSearchObj;
  // console.log('searchState', searchState);
  // let searchSource = null;
  // if (searchState.isEnable) searchSource = searchState.globalSearchObj;
  // else searchSource = sortedProducts.byID;

  // let inputType = null;
  // let inputVal = null;
  // if (e.type) {
  //   inputType = e.target.dataset.type;
  //   inputVal = e.target.value.toLowerCase();
  //   console.log('inputVal', inputVal);
  // } else {
  //   console.log('not-type', e);
  //   inputType = e.key;
  //   inputVal = e.prop;
  // };

  // const source = Object.keys(sortedProducts.search);
  // const resultKeys = source.filter((el) => el.includes(inputVal));

  // let tempArr = [];
  // resultKeys.forEach((el) => {
  //   tempArr = tempArr.concat(sortedProducts.search[el]);
  // });

  // const globalSearchObj = {};
  // const filterSearchObj = {};
  // tempArr.forEach((el) => {
  //   if (globalObj[el.id]) globalSearchObj[el.id] = el;

  //   if (Object.keys(filterOrigin).length) {
  //     if (filterOrigin[el.id]) filterSearchObj[el.id] = el;
  //   }
  // });

  // if (Object.keys(filterOrigin).length) store.dispatch(setOnSaleDisplay(Object.values(filterSearchObj)));
  // else store.dispatch(setOnSaleDisplay(Object.values(globalSearchObj)));

  // if (inputVal) {
  //   store.dispatch(setJointSearchObj(inputType, inputVal, true, globalSearchObj, filterSearchObj));
  // } else {
  //   store.dispatch(setJointSearchObj(inputType, null, false, {}, {}));
  // }
};