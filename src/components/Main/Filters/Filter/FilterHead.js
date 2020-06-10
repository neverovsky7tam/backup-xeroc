import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { expandFilter } from './logicFilters';
import { renderTags, deleteTag, setSelectFieldState, setSearchBlock, setSearchFilterItems } from './logicInput';
import { ReactComponent as ToggleArrow } from '../../../../assets/img/toggle-arrow.svg';

const FilterHead = ({ filterName, isExpand, setExpand, isSearch, setSearchExpand, setItemsArr }) => {
  const filter = React.createRef();
  const arrow = React.createRef();
  const input = React.createRef();

  const storeFiltersState = useSelector((state) => state.filtersState);

  let userSelect = null;
  let tags = null;
  if (storeFiltersState[filterName]) userSelect = storeFiltersState[filterName].tag;

  if (userSelect) {
    if (userSelect.length) tags = renderTags(userSelect, filterName);
  };

  if (isExpand) {
    const closeFilters = (e) => {
      const target = e.target;
      if (!target.closest(`.${filterName}`) && !target.closest('.filter__item') && !target.closest('.filter-tag__close') && !target.closest('.scroll-layer')) {
        setExpand(false);
        setSearchExpand(false);
        document.removeEventListener('click', closeFilters);
      };
    };
    document.addEventListener('click', closeFilters);
  }

  useLayoutEffect(() => {
    setSelectFieldState(filter.current, input.current, arrow.current, userSelect, isExpand, isSearch);

    if (document.documentElement.clientWidth < 768 && userSelect) {
      if (userSelect.length) input.current.classList.add('d-none');
      else input.current.classList.remove('d-none');
    }
  });

  const onInputChange = () => {
    setSearchBlock(input.current, setExpand, setSearchExpand);
    setSearchFilterItems(filterName, input.current.value, setItemsArr);
  };

  const onInputKey = (e) => {
    if ((userSelect && userSelect.length) && (e.key === 'Backspace' && !e.target.value)) {
      deleteTag(filterName);
    }
  };

  const onFieldClick = (e) => {
    expandFilter(e, isExpand, setExpand, isSearch, setSearchExpand, input.current)
  };

  const placeholder = filterName[0].toUpperCase() + filterName.slice(1);

  return (
    <div
      className="filter__select input-holder"
      data-filter-placeholder={`By ${placeholder}`}
      onClick={onFieldClick}
      ref={filter}>
      <div className="select-wrapper">
        {tags}
        <input
          ref={input}
          onChange={onInputChange}
          onKeyDown={onInputKey}
          type="text"
          placeholder={`By ${placeholder}`}
          maxLength="10" />
      </div>
      <div className="arrow" ref={arrow}>
        <ToggleArrow className="toggle-arrow" />
      </div>
    </div>
  );
};

export default FilterHead;