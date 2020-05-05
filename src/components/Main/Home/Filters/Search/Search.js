import React from 'react';
import { searchLogic } from './searchLogic';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Search = () => {
  const element = React.createRef();
  const setBorder = (e) => {
    if (e.target.value) element.current.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    else element.current.style = '';
  }

  const onInputChange = (e) => {
    setBorder(e);
    searchLogic(e);
  };

  return (
    <div className="search p-relative">
      <div className="p-relative">
        <div className="filter__select" ref={element}>
          <input
            type="text"
            placeholder="Search"
            onChange={onInputChange} />
        </div>
        <BoxDecor />
      </div>
    </div>
  )
};

export default Search;