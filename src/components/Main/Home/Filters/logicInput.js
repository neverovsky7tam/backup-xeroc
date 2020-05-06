import React from 'react';
import store from '../../../../store/store';
import { setFilters } from './logicFilters';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';

const onMouseTag = (e) => {
  if (e.type === 'mouseenter') {
    e.currentTarget.children[1].style.top = '0';
  }
  if (e.type === 'mouseleave') {
    e.currentTarget.children[1].style = '';
  }
};

const onClickTag = (e) => {
  const tag = e.target.dataset.tag;
  const filterTag = e.target.dataset.filter;
  deleteTag(filterTag, tag);
};

export const renderTags = (storeTags, filter) => {
  let tagsArr = storeTags.slice();
  const length = tagsArr.length;
  if (tagsArr.length > 3) tagsArr.length = 3;

  return tagsArr.map((el, idx) => {
    let tag = null;
    let dataTarget = el;

    if (el.length > 3) el = el.slice(0, 3);
    tag = el + '...';
    if (idx === 2) {
      tag = `+${length - 2}`;
      dataTarget = 0;
    }

    return (
      <div
        key={el}
        className="filter-tag"
        onMouseEnter={onMouseTag}
        onMouseLeave={onMouseTag}>
        <div className="filter-tag__content">
          {tag}
        </div>
        <div
          className="filter-tag__close"
          data-tag={dataTarget}
          data-filter={filter}
          onClick={onClickTag}>
          &times;
        </div>
      </div>
    )
  });
};

export const deleteTag = (filter, tag) => {
  const state = store.getState();
  const targetObj = state.filtersState[filter];

  let hasName = null;
  if (tag) hasName = (+tag === 0) ? false : true;

  if (hasName) {
    setFilters(tag, filter);
  }
  else {
    const value = targetObj.tag[targetObj.tag.length - 1];
    setFilters(value, filter);
  }
};

export const setInputState = (e) => {
  const element = e.target.closest('.filter__select');
  if (e.target.value) element.classList.add('filter__select_active', 'filter__select_expand');
  else element.classList.remove('filter__select_active', 'filter__select_expand');
}

export const setSelectFieldState = (filter, input, arrow, storeTags, isExpand, isSearch) => {
  if (storeTags) {
    if (storeTags.length) {
      filter.classList.add('filter__select_active', 'filter__select_expand');
      input.placeholder = '';
      // input.focus();
      input.maxLength = 3;
    }
    else {
      filter.classList.remove('filter__select_active', 'filter__select_expand');
      input.placeholder = 'By Algorithm';
      input.maxLength = 10;
    }
  };

  if ((!isExpand && !isSearch) || isExpand) input.value = '';
  if (!isExpand && !input.value) {
    arrow.style.transform = '';
  };
  if (isExpand) {
    arrow.style.transform = 'rotate(180deg)';
  }
};

export const setSearchBlock = (input, setExpand, setSearchExpand) => {
  if (input.value && input.value.length === 1) {
    setExpand(false);
    setSearchExpand(true);
  };
  if (!input.value) {
    setSearchExpand(false);
    setExpand(true);
  };
};

export const setSearchFilterItems = (filter, value, setFiltersArr) => {
  const state = store.getState();

  let originFiltersObj = null;
  if (state.filtersState) {
    if (state.filtersState[filter]) originFiltersObj = state.filtersState[filter].filter;
  }

  let filtersArr = null;
  if (originFiltersObj) {
    filtersArr = Object.entries(originFiltersObj);
  } else {
    switch (filter) {
      case 'algorithm':
        filtersArr = algorithmsSpecies;
        break;
      case 'coin':
        filtersArr = coinsSpecies;
        break;
      case 'equipment':
        filtersArr = equipmentSpecies;
        break;
      case 'manufacturer':
        filtersArr = manufacturerSpecies;
        break;
    }
  };

  const val = value.toLowerCase();
  const renderFiltersArr = filtersArr.filter((item) => item[0].toLowerCase().includes(val));
  setFiltersArr(renderFiltersArr);
};

