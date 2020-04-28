import React from 'react';
import { useSelector } from 'react-redux';
import { expandFilter } from '../logicFilters';
import { ReactComponent as ArrowDots } from '../../../../../assets/img/arrow-dots.svg';



const AlgorithmSelect = ({ isExpand, setExpandFilter }) => {
  const userSelect = useSelector((state) => state.filtersState);
  console.log('userSelect', userSelect);

  let tags = [];
  if (userSelect.algorithm) {
    console.log('check');
    for (let key in userSelect.algorithm) {
      if (userSelect.algorithm[key]) tags.push(key);
    }
  }
  // console.log('tag', tags)

  let inputValue = null;
  const onInputChange = (e) => {
    console.log('onChange', e.target.value);
    inputValue = e.target.value
  };

  return (
    <div
      className="filter__select"
      onClick={(e) => expandFilter(e, isExpand, setExpandFilter)}>
      <div className="select-wrapper">
        {tags}
        <input
          onChange={onInputChange}
          type="text"
          placeholder="By Algorithm" />
      </div>
      <div className="arrow">
        <ArrowDots />
      </div>
    </div>
  )
};

export default AlgorithmSelect;

// <div className="user-select">X11...</div>