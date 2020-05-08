import React from 'react';
import { setInputState } from '../logicInput';
import { priceLogic } from './priceLogic';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Price = () => {
  const onInputChange = (e) => {
    const val = +e.target.value;
    if (isNaN(val)) e.target.value = '';
    else {
      setInputState(e);
      priceLogic(e);
    };
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
              onClick={(e) => e.target.focus()}
              onChange={(e) => onInputChange(e)} />
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
              onClick={(e) => e.target.focus()}
              onChange={(e) => onInputChange(e)} />
          </div>
          <BoxDecor />
        </div>
      </div>
    </>
  )
};

export default Price;