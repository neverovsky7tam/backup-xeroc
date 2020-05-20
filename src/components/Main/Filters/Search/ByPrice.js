import React from 'react';
import { setInputState } from '../Filter/logicInput';
import { priceLogic } from './priceLogic';
import { setPreviuosSearch, calcPrevResult } from './logicSearch';
import { BoxDecor } from '../../../Parts/BoxDecor';

const Price = () => {
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
          <div className="filter__select">
            <input
              type="text"
              placeholder="Minimum price"
              data-type="minPrice"
              onClick={onInputClick}
              onChange={onInputChange}
              onKeyUp={onInputKey} />
          </div>
          <BoxDecor />
        </div>
      </div>
      <div className="filter p-relative">
        <div className="p-relative">
          <div className="filter__select">
            <input
              type="text"
              placeholder="Maximum price"
              data-type="maxPrice"
              onClick={onInputClick}
              onChange={onInputChange}
              onKeyUp={onInputKey} />
          </div>
          <BoxDecor />
        </div>
      </div>
    </>
  )
};

export default Price;