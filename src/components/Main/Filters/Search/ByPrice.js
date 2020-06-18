import React, { useEffect } from 'react';
import store from '../../../../store/store';
import { saveSearchValue } from '../../../../store/actions';
import { setInputState } from '../Filter/logicInput';
import { priceLogic } from './priceLogic';
import { setPreviuosSearch, calcPrevResult } from './logicSearch';
import { BoxDecor } from '../../../Parts/BoxDecor';

const Price = () => {
  console.log('price');
  const inputMinPrice = React.createRef();
  const inputMaxPrice = React.createRef();

  const storeValue = store.getState().searchValue;

  let inputMin = null;
  let inputMax = null;
  useEffect(() => {
    inputMin = inputMinPrice.current;
    inputMax = inputMaxPrice.current;
    if (storeValue.minPrice) inputMin.value = storeValue.minPrice;
    if (storeValue.maxPrice) inputMax.value = storeValue.maxPrice;

    return () => {
      store.dispatch(saveSearchValue('minPrice', inputMin.value));
      store.dispatch(saveSearchValue('maxPrice', inputMax.value));
    }
  });

  const onInputClick = (e) => {
    e.target.focus();
    setPreviuosSearch();
  };

  const onInputChange = (e) => {
    const val = +e.target.value;
    if (isNaN(val)) e.target.value = '';
    else {
      setInputState(e);
      priceLogic(e);
    };
  };

  const onInputKey = (e) => {
    if (e.key === 'Backspace') calcPrevResult();
  };

  return (
    <>
      <div className="filter p-relative">
        <div className="p-relative">
          <div className="filter__select input-holder">
            <input
              type="text"
              placeholder="Minimum price"
              data-type="minPrice"
              onClick={onInputClick}
              onChange={onInputChange}
              onKeyUp={onInputKey}
              ref={inputMinPrice} />
          </div>
          <BoxDecor />
        </div>
      </div>
      <div className="filter p-relative">
        <div className="p-relative">
          <div className="filter__select input-holder">
            <input
              type="text"
              placeholder="Maximum price"
              data-type="maxPrice"
              onClick={onInputClick}
              onChange={onInputChange}
              onKeyUp={onInputKey}
              ref={inputMaxPrice} />
          </div>
          <BoxDecor />
        </div>
      </div>
    </>
  )
};

export default Price;