import store from '../../../../store/store';
import { setOnSaleDisplay, setJointSearchObj, setPreviuosSearchResult } from '../../../../store/actions';

export const calcPrevResult = () => {
  const searchObj = store.getState().searchObj;
  console.log('searchObj', searchObj);
  // find the object with lowest length
  let length = null;
  let compareArr = [];
  let compareName = '';
  for (let key in searchObj) {
    if (searchObj[key].value) {
      console.log('key=1', key)
      if (length === null) {
        length = searchObj[key].data.length;
        compareArr = searchObj[key].data;
        compareName = key;
      } else {
        if (searchObj[key].data.length && searchObj[key].data.length <= length) {
          length = searchObj[key].data.length;
          compareArr = searchObj[key].data;
          compareName = key;
        };
      };
    };
  };
  console.log('length', length);

  let result = [];
  if (length === null) {
    result = null;
  } else {
    const objectsForCompare = [];
    for (let key in searchObj) {
      if (key !== compareName && searchObj[key].value) {
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

    if (Object.keys(unionObj).length) {
      compareArr.forEach((el) => {
        if (unionObj[el.id]) result.push(el);
      });
    } else {
      result = compareArr;
    };
  }

  console.log('result', result);
  setSearchState(result);
  setPreviuosSearch();
};

export const setPreviuosSearch = () => {
  const jointSearchObj = store.getState().jointSearchObj;
  console.log('jointSearchObj', jointSearchObj);
  if (jointSearchObj.isEnable) {
    if (Object.keys(jointSearchObj.filterSearchObj).length) store.dispatch(setPreviuosSearchResult(jointSearchObj.filterSearchObj));
    else store.dispatch(setPreviuosSearchResult(jointSearchObj.globalSearchObj));
  }
};

const comparePrevSearch = (currentData) => {
  const prevSearch = store.getState().previousSearch;
  let result = [];
  currentData.forEach((el) => {
    if (prevSearch[el.id]) result.push(el);
  });
  return result;
};

const checkActiveInputs = (searchObj, inputType) => {
  const currrentData = searchObj[inputType].data;
  const currentValue = searchObj[inputType].value;

  if (!currrentData.length && currentValue) {
    return [];
  };
  if (!currrentData.length && !currentValue) {
    const prevSearch = store.getState().previousSearch;
    return Object.values(prevSearch);
  };
};

const setSearchState = (result) => {
  const filterOrigin = store.getState().filterOrigin;

  const globalSearchObj = {};
  const filterSearchObj = {};

  if (result === null) {
    // set searching data to redux store
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
    if (Object.keys(filterSearchObj).length) {
      store.dispatch(setOnSaleDisplay(Object.values(filterSearchObj)));
    } else {
      store.dispatch(setOnSaleDisplay(Object.values(globalSearchObj)));
    };
  };
};

export const logicSearch = (inputType) => {
  const searchObj = store.getState().searchObj;

  let fieldsCounter = 0;
  for (let key in searchObj) {
    fieldsCounter += searchObj[key].value;
  };

  const currentData = searchObj[inputType].data;
  let result = null;

  if (currentData.length) {
    if (fieldsCounter === 1) {
      result = currentData;
    } else {
      result = comparePrevSearch(currentData);
    };
  } else {
    if (fieldsCounter) {
      result = checkActiveInputs(searchObj, inputType);
    } else {
      result = null;
    };
  };

  setSearchState(result, inputType);
};