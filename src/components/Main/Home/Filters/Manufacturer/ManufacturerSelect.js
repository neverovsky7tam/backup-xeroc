import React, { useLayoutEffect, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { expandFilter } from '../logicFilters';
import { renderTags, deleteTag, setSelectFieldState, setSearchBlock, setSearchFilterItems } from '../logicInput';
import { ReactComponent as ArrowDots } from '../../../../../assets/img/arrow-dots.svg';

const ManufacturerSelect = ({ isExpand, setExpand, isSearch, setSearchExpand, setItemsArr }) => {
  const filter = React.createRef();
  const arrow = React.createRef();
  const input = React.createRef();
  const userSelect = useSelector((state) => {
    if (state.filtersState.manufacturer) return state.filtersState.manufacturer.tag;
  });

  let tags = null;
  if (userSelect) {
    tags = renderTags(userSelect, 'manufacturer');
  };

  useEffect(() => {
    const closeFilters = (e) => {
      const target = e.target;
      if ((!target.closest('.manufacturer') && !target.closest('.filter__item')) && !target.closest('.filter-tag__close')) {
        setExpand(false);
        setSearchExpand(false);
        document.removeEventListener('click', closeFilters);
      };
    };
    document.addEventListener('click', closeFilters);
  });

  useLayoutEffect(() => {
    setSelectFieldState(filter.current, input.current, arrow.current, userSelect, isExpand, isSearch);
  });

  const onInputChange = () => {
    setSearchBlock(input.current, setExpand, setSearchExpand);
    setSearchFilterItems('manufacturer', input.current.value, setItemsArr);
  };

  const onInputKey = (e) => {
    if ((userSelect && userSelect.length) && (e.key === 'Backspace' && !e.target.value)) {
      deleteTag('manufacturer');
    }
  };

  const onFieldClick = (e) => {
    expandFilter(e, isExpand, setExpand, isSearch, setSearchExpand, input.current)
  };

  return (
    <div
      className="filter__select"
      data-filter-placeholder="By Manufacturer"
      onClick={onFieldClick}
      ref={filter}>
      <div className="select-wrapper">
        {tags}
        <input
          ref={input}
          onChange={onInputChange}
          onKeyDown={onInputKey}
          type="text"
          placeholder="By Manufacturer"
          maxLength="10" />
      </div>
      <div className="arrow" ref={arrow}>
        <ArrowDots />
      </div>
    </div>
  );
};

export default ManufacturerSelect;