import store from '../../../../store/store';
import { setOnSaleDisplay, setJointSearchObj, setPreviuosSearchResult } from '../../../../store/actions';

const comparePrevSearch = (currentData) => {
  const prevSearch = store.getState().previousSearch;
  console.log('prevSearch', prevSearch);

  let result = [];
  currentData.forEach((el) => {
    if (prevSearch[el.id]) result.push(el);
  });
  return result;
};

const compareActiveInput = (searchObj, inputType) => {
  const currrentData = searchObj[inputType].data;
  const currentValue = searchObj[inputType].value;
  console.log('data-length=0', searchObj[inputType].data.length);

  if (!currrentData.length && currentValue) {
    return [];
  };
  if (!currrentData.length && !currentValue) {
    // find the object with lowest length
    let length = null;
    let compareArr = [];
    let compareName = '';
    for (let key in searchObj) {
      if (length === null) {
        length = searchObj[key].data.length;
        compareArr = searchObj[key].data;
        compareName = key
      } else {
        if (searchObj[key].data.length <= length) {
          length = searchObj[key].data.length;
          compareArr = searchObj[key].data;
          compareName = key
        };
      };
    };
    console.log('check-length', length);

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

    let result = [];
    if (Object.keys(unionObj).length) {
      compareArr.forEach((el) => {
        if (unionObj[el.id]) result.push(el);
      });
    } else {
      result = compareArr;
    };
    return result;
  };
};

const setSearchState = (result) => {
  const filterOrigin = store.getState().filterOrigin;
  console.log('filterOrigin', filterOrigin);

  const globalSearchObj = {};
  const filterSearchObj = {};

  if (result === null) {
    // set searching data to redux store
    // store.dispatch(setPreviuosSearchResult({}));
    store.dispatch(setJointSearchObj(false, globalSearchObj, filterSearchObj));
    // render results
    store.dispatch(setOnSaleDisplay(null));
  } else if (!result.length) {
    store.dispatch(setJointSearchObj(true, globalSearchObj, filterSearchObj));
    store.dispatch(setOnSaleDisplay([]));
  } else {
    result.forEach((el) => {
      globalSearchObj[el.id] = el;

      if (filterOrigin[el.id]) filterSearchObj[el.id] = el;
    });
    // set searching data to redux store
    store.dispatch(setJointSearchObj(true, globalSearchObj, filterSearchObj));
    // render results
    console.log('globalSearchObj', globalSearchObj);
    console.log('filterSearchObj', filterSearchObj);

    if (Object.keys(filterSearchObj).length) {
      // set searching data to redux store
      store.dispatch(setPreviuosSearchResult(filterSearchObj));
      // render results
      store.dispatch(setOnSaleDisplay(Object.values(filterSearchObj)));
    } else {
      // set searching data to redux store
      store.dispatch(setPreviuosSearchResult(globalSearchObj));
      // render results
      store.dispatch(setOnSaleDisplay(Object.values(globalSearchObj)));
    };
  };
};

export const logicSearch = (inputType) => {
  const searchObj = store.getState().searchObj;
  console.log('searchObj', searchObj, inputType);

  let fieldsCounter = 0;
  for (let key in searchObj) {
    fieldsCounter += searchObj[key].value;
    console.log('fieldsCounter', fieldsCounter)
  };

  const currentData = searchObj[inputType].data;
  console.log('currentData', currentData);
  let result = null;

  if (currentData.length) {
    if (fieldsCounter === 1) {
      result = currentData;
    } else {
      result = comparePrevSearch(currentData);
    };
  } else {
    if (fieldsCounter) {
      result = compareActiveInput(searchObj, inputType);
    } else {
      result = null;
    };
  };

  setSearchState(result, inputType);
};