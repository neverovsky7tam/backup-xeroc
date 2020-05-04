import React, { useLayoutEffect, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { expandFilter } from '../logicFilters';
import { renderTags, deleteTag, setSelectFieldState, setSearchBlock, setSearchFilterItems } from '../logicInput';
import { ReactComponent as ArrowDots } from '../../../../../assets/img/arrow-dots.svg';

const AlgorithmSelect = ({ isExpand, setExpand, isSearch, setSearchExpand, setFiltersArr }) => {
  const filter = React.createRef();
  const arrow = React.createRef();
  const input = React.createRef();
  const userSelect = useSelector((state) => state.filtersState);

  let storeTags = null;
  let tags = null;
  if (userSelect.algorithm) storeTags = userSelect.algorithm.tag;

  if (storeTags) {
    tags = renderTags(storeTags, 'algorithm');
  };

  useEffect(() => {
    const closeFilters = (e) => {
      const target = e.target;
      if (!target.closest('.algorithm') && !target.closest('.filter__item')) {
        setExpand(false);
        setSearchExpand(false);
        document.removeEventListener('click', closeFilters);
      };
    };
    document.addEventListener('click', closeFilters);
  });

  useLayoutEffect(() => {
    setSelectFieldState(filter.current, input.current, arrow.current, storeTags, isExpand, isSearch);
  });

  const onInputChange = () => {
    setSearchBlock(input.current, setExpand, setSearchExpand);
    setSearchFilterItems('algorithm', input.current.value, setFiltersArr);
  };

  const onInputKey = (e) => {
    if ((tags && tags.length) && (e.key === 'Backspace' && !e.target.value)) {
      deleteTag('algorithm');
    }
  };

  return (
    <div
      className="filter__select"
      onClick={(e) => expandFilter(e, isExpand, setExpand, setSearchExpand, input.current)}
      ref={filter}>
      <div className="select-wrapper">
        {tags}
        <input
          ref={input}
          onChange={onInputChange}
          onKeyDown={onInputKey}
          type="text"
          placeholder="By Algorithm"
          maxLength="10" />
      </div>
      <div className="arrow" ref={arrow}>
        <ArrowDots />
      </div>
    </div>
  )
};

export default AlgorithmSelect;
