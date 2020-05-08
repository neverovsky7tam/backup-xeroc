import React from 'react';
import { searchLogic } from './searchLogic';
import { setInputState } from '../logicInput';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Search = () => {
  const onInputChange = (e) => {
    setInputState(e);
    searchLogic(e);
  };

  return (
    <div className="p-relative">
      <div className="p-relative">
        <div className="filter__select">
          <input
            type="text"
            placeholder="Search"
            data-type="text"
            onClick={(e) => e.target.focus()}
            onChange={onInputChange} />
        </div>
        <BoxDecor />
      </div>
    </div>
  )
};

export default Search;