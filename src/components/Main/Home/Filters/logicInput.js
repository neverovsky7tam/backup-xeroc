import React from 'react';
import store from '../../../../store/store';
import { setFilters } from './logicFilters';

export const renderTags = (storeTags) => {
  let tagsArr = storeTags.slice();
  const length = tagsArr.length;
  if (tagsArr.length > 3) tagsArr.length = 3;

  return tagsArr.map((el, idx) => {
    let tag = null;
    if (el.length > 3) el = el.slice(0, 3);
    tag = el + '...';
    if (idx === 2) tag = `+${length - 2}...`;

    return (
      <div key={el} className="user-select">{tag}</div>
    )
  });
};

export const deleteTag = (filter) => {
  const state = store.getState();
  const targetObj = state.filtersState[filter];
  const filtersStateObj = targetObj.filter;
  const value = targetObj.tag[targetObj.tag.length - 1];
  setFilters(value, filtersStateObj, 'algorithm');
};
