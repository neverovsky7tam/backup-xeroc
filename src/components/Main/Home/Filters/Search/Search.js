import React from 'react';
import { searchLogic } from './searchLogic';
import { setInputState } from '../logicInput';
import { setPreviuosSearch, calcPrevResult } from '../logicSearch';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Search = () => {
  const onInputClick = (e) => {
    e.target.focus();
    setPreviuosSearch();
  };

  const onInputChange = (e) => {
    setInputState(e);
    searchLogic(e);
  };

  const onInputKey = (e) => {
    if (e.key === 'Backspace') calcPrevResult();
  }

  return (
    <div className="p-relative">
      <div className="p-relative">
        <div className="filter__select">
          <input
            type="text"
            placeholder="Search"
            data-type="text"
            onClick={onInputClick}
            onChange={onInputChange}
            onKeyUp={onInputKey} />
        </div>
        <BoxDecor />
      </div>
    </div>
  )
};

export default Search;