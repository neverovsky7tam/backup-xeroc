import React from 'react';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Search = () => {
  return (
    <div className="search p-relative">
      <div className="p-relative">
        <div className="filter__select">
          <input
            type="text"
            placeholder="Search" />
        </div>
        <BoxDecor />
      </div>
    </div>
  )
};

export default Search;