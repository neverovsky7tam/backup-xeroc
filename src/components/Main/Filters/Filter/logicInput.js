import React from 'react';
import store from '../../../../store/store';
import { setFilters } from './logicFilters';
import { algorithmsSpecies, manufacturerSpecies, equipmentSpecies, coinsSpecies } from '../../../../data/productsData';
import { ReactComponent as DeleteIcon } from '../../../../assets/img/delete.svg';

const onMouseTag = (e) => {
  if (e.type === 'mouseover') {
    e.currentTarget.children[1].style.top = '0';
  }
  if (e.type === 'mouseleave') {
    e.currentTarget.children[1].style = '';
  }
};

const onClickTag = (e) => {
  let tagName = null;
  if (e.currentTarget.dataset) tagName = e.currentTarget.dataset.tag;
  const filterTag = e.currentTarget.dataset.filter;
  deleteTag(filterTag, tagName);
};

const tagsMob = (storeTags, filter) => {
  let tagsArr = storeTags.slice();
  const length = tagsArr.length;
  if (tagsArr.length > 2) tagsArr.length = 2;

  const items = tagsArr.map((el, idx) => {
    let tag = null;
    let dataTarget = el;

    if (idx === 1) {
      tag = `+${length - 1}`;
      dataTarget = 0;
    } else {
      if (el.length > 3) tag = el.slice(0, 3) + '...';
      else tag = el;

      if (filter === 'coins') tag = tag.toUpperCase();
    };

    return (
      <div
        key={el}
        className="filter-tag">
        <div className="filter-tag__content">
          {tag}
        </div>
      </div>
    );
  });

  return (
    <>
      {items}
      <div
        className="filter-tag filter-tag__delete"
        onClick={onClickTag}
        data-filter={filter}>
        <DeleteIcon />
      </div>
    </>
  );
};

const tagsDesctop = (storeTags, filter) => {
  let tagsArr = storeTags.slice();
  const length = tagsArr.length;
  if (tagsArr.length > 3) tagsArr.length = 3;

  return tagsArr.map((el, idx) => {
    let tag = null;
    let dataTarget = el;

    if (idx === 2) {
      tag = `+${length - 2}`;
      dataTarget = 0;
    } else {
      if (el.length > 3) tag = el.slice(0, 3) + '...';
      else tag = el;

      if (filter === 'coins') tag = tag.toUpperCase();
    };

    return (
      <div
        key={el}
        className="filter-tag"
        onMouseLeave={onMouseTag}
        onMouseOver={onMouseTag}>
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
    );
  });
};

export const renderTags = (storeTags, filter) => {
  if (document.documentElement.clientWidth < 768) return tagsMob(storeTags, filter);
  else return tagsDesctop(storeTags, filter);
};

export const deleteTag = (filter, tagName) => {
  const state = store.getState();
  const targetObj = state.filtersState[filter];

  let hasName = null;
  if (tagName) hasName = (+tagName === 0) ? false : true;

  if (hasName) {
    setFilters(tagName, filter);
  } else {
    const value = targetObj.tag[targetObj.tag.length - 1];
    setFilters(value, filter);
  };
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
      input.maxLength = 3;
    }
    else {
      filter.classList.remove('filter__select_active', 'filter__select_expand');
      input.placeholder = filter.dataset.filterPlaceholder;
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

export const setSearchFilterItems = (filter, value, setItemsArr) => {
  const state = store.getState();

  let originFiltersObj = null;
  if (state.filtersState) {
    if (state.filtersState[filter]) originFiltersObj = state.filtersState[filter].filter;
  };

  let itemsArr = null;
  if (originFiltersObj) {
    itemsArr = Object.entries(originFiltersObj);
  } else {
    switch (filter) {
      case 'algorithm':
        itemsArr = algorithmsSpecies;
        break;
      case 'coins':
        itemsArr = coinsSpecies;
        break;
      case 'equipment':
        itemsArr = equipmentSpecies;
        break;
      case 'manufacturer':
        itemsArr = manufacturerSpecies;
        break;
    };
  };

  const val = value.toLowerCase();
  const renderFiltersArr = itemsArr.filter((item) => item[0].toLowerCase().includes(val));
  setItemsArr(renderFiltersArr);
};

