import store from '../../../../store/store';
import { setOnSaleDisplay, setJointSearchObj } from '../../../../store/actions';

const checkFilters = (globalSearchArr, globalSearchObj) => {
  // check filters
  const filterOrigin = store.getState().filterOrigin;
  console.log('filterOrigin', filterOrigin);

  if (Object.keys(filterOrigin).length) {
    console.log('length-true');
    const filterSearchObj = {};
    globalSearchArr.forEach((el) => {
      if (filterOrigin[el.id]) filterSearchObj[el.id] = el;
    });
  } else {
    console.log('setOnSaleDisplay');
    store.dispatch(setOnSaleDisplay(globalSearchArr));
  };
};

const compareData = (searchObj) => {
  let compareArr = null;
  let compareName = null;
  // selection the object wich has the minimum length
  let length = null;
  for (let key in searchObj) {
    if (searchObj[key].value) {
      if (length === null) {
        length = searchObj[key].data.length;
        compareArr = searchObj[key].data;
        compareName = key;
      } else {
        if (searchObj[key].data.length <= length) {
          length = searchObj[key].data.length;
          compareArr = searchObj[key].data;
          compareName = key;
        };
      };
      console.log('key', key, length, compareName);
    };
  };

  if (!length) {
    store.dispatch(setOnSaleDisplay([]));
  } else {
    // make objects with keys as item's id and props = items; and push them to array
    const objectsForCompare = [];
    for (let key in searchObj) {
      if (key !== compareName) {
        console.log('not-equal', key);
        const targetCompareObj = {};
        searchObj[key].data.forEach((el) => targetCompareObj[el.id] = el);
        objectsForCompare.push(targetCompareObj);
      };
    };
    console.log('objectsForCompare', objectsForCompare);
    // make one object for compare from array with objects
    const unionObj = {};
    objectsForCompare.forEach((item) => Object.assign(unionObj, item));
    console.log('unionObj', unionObj);
    console.log('compareArr', compareArr);
    // let's go to compare
    let globalSearchArr = [];
    const globalSearchObj = {};

    if (!Object.keys(unionObj).length) {
      globalSearchArr = compareArr;
      compareArr.forEach((el) => globalSearchObj[el.id] = el);
    } else {
      compareArr.forEach((el) => {
        if (unionObj[el.id]) {
          globalSearchArr.push(el);
          globalSearchObj[el.id] = el;
        }
      });
    }
    console.log('globalSearchArr', globalSearchArr);
    checkFilters(globalSearchArr, globalSearchObj);
  };
};

export const logicSearch = (inputType) => {
  const searchObj = store.getState().searchObj
  console.log('searchObj', searchObj, inputType);

  let fieldsCounter = 0;
  for (let key in searchObj) {
    fieldsCounter += searchObj[key].value;
    console.log('fieldsCounter', fieldsCounter)
  };

  const currentData = searchObj[inputType].data;
  console.log('currentData', currentData);
  if (currentData.length) {
    if (fieldsCounter === 1) {
      store.dispatch(setOnSaleDisplay(currentData));
    } else {
      compareData(searchObj);
    };
  } else {
    if (fieldsCounter) {
      compareData(searchObj);
    } else {
      store.dispatch(setOnSaleDisplay(null));
    };
  };


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