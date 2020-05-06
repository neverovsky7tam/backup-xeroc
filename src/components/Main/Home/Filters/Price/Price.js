import React from 'react';
import { setInputState } from '../logicInput';
import { filterByPrice } from './priceLogic';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Price = () => {
  const onInputChange = (e) => {
    const val = +e.target.value;
    if (isNaN(val)) e.target.value = '';
    else {
      setInputState(e);
      filterByPrice(e);
    }
  };

  return (
    <>
      <div className="filter p-relative">
        <div className="p-relative">
          <div className="filter__select">
            <input
              type="text"
              placeholder="Minimum price"
              onClick={(e) => e.target.focus()}
              onChange={onInputChange} />
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
              onClick={(e) => e.target.focus()}
              onChange={onInputChange} />
          </div>
          <BoxDecor />
        </div>
      </div>
    </>
  )
};

export default Price;