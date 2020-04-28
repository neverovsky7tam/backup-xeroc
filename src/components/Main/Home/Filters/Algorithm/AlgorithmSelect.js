import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { expandFilter } from '../logicFilters';
import { ReactComponent as ArrowDots } from '../../../../../assets/img/arrow-dots.svg';

const AlgorithmSelect = ({ isExpand, setExpandFilter }) => {
  const input = React.createRef();

  useEffect(() => {
    if (userSelect.algorithm) {
      if (userSelect.algorithm.tag.length) input.current.placeholder = '';
      else input.current.placeholder = 'By Algorithm';
    }
  });

  const userSelect = useSelector((state) => state.filtersState);

  let tags = null;
  if (userSelect.algorithm) {
    let tagsArr = userSelect.algorithm.tag.slice();
    const length = tagsArr.length;
    tagsArr.length = 3;

    tags = tagsArr.map((el, idx) => {
      let tag = null;
      if (el.length > 3) el = el.slice(0, 3);
      tag = el + '...';
      if (idx === 2) tag = `+${length - 2}...`;

      return (
        <div key={el} className="user-select">{tag}</div>
      )
    })
  };

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
          ref={input}
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