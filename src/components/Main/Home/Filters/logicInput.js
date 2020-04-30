import React from 'react';
import store from '../../../../store/store';
import { setFilters } from './logicFilters';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';

let tagOriginValue = null;
const onMouseTag = (e) => {
  if (e.type === 'mouseenter') {
    tagOriginValue = e.target.innerHTML;
    e.target.innerHTML = '&times;';
    e.target.style.fontSize = '16px';
    e.target.style.fontWeight = '400';
  } else {
    e.target.innerHTML = tagOriginValue;
    e.target.style = '';
  }
};

const onClickTag = (e) => {
  console.log('e', +e.target.dataset.tag);
  const tag = e.target.dataset.tag;
  deleteTag('algorithm', tag);
};

export const renderTags = (storeTags) => {
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
        className="user-select"
        onMouseEnter={onMouseTag}
        onMouseLeave={onMouseTag}
        onClick={onClickTag}
        data-tag={dataTarget}>
        {tag}
      </div>
    )
  });
};

export const deleteTag = (filter, tag) => {
  const state = store.getState();
  const targetObj = state.filtersState[filter];

  const hasName = (+tag === 0) ? false : true;
  console.log('hasName', hasName);
  if (hasName) {
    setFilters(tag, filter);
  }
  else {
    const value = targetObj.tag[targetObj.tag.length - 1];
    setFilters(value, filter);
  }
};

export const setSelectFieldState = (filter, input, arrow, storeTags, isExpand, isSearch) => {
  if (storeTags) {
    if (storeTags.length) {
      filter.classList.add('filter__select_active', 'filter__select_expand');
      input.placeholder = '';
      input.focus();
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
  // console.log('renderFiltersArr', renderFiltersArr);
  setFiltersArr(renderFiltersArr);
};

