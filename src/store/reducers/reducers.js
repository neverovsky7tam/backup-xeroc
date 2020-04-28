import {
  SET_ON_SALE_DISPLAY,
  CHANGE_LANG,
  SET_MAIN_CONTENT,
  SET_ACCOUNT_MENU,
  SET_ELECTRICITY_VALUE,
  SET_CURRENT_SCROLL_TOP,
  SET_FILTERS_STATE,
  SET_USER_FILTER_SELECT,
} from '../actions';

import { langEN, langCH } from '../../data/languages';
import { productsObj } from '../../data/productsData';

export const userFilterSelect = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_FILTER_SELECT:
      return Object.assign({}, state, action.filters);
    default:
      return state;
  }
}

export const filtersState = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTERS_STATE:
      return Object.assign({}, state, action.filters);
    default:
      return state;
  }
}

export const productsDisplay = (state = productsObj, action) => {
  switch (action.type) {
    case SET_ON_SALE_DISPLAY:
      if (Array.isArray(action.products)) return action.products;
      else return productsObj;
    default:
      return state;
  }
}

export const langObj = (state = langEN, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      const langObj = (action.lang === 'eng') ? langEN : langCH;
      return langObj;
    default:
      return state;
  }
}

export const mainBlock = (state = 'home', action) => {
  switch (action.type) {
    case SET_MAIN_CONTENT:
      return action.content;
    default:
      return state;
  }
}

export const accountMenu = (state = false, action) => {
  switch (action.type) {
    case SET_ACCOUNT_MENU:
      return action.isLogin;
    default:
      return state;
  }
}

export const electricityValue = (state = 0.17, action) => {
  switch (action.type) {
    case SET_ELECTRICITY_VALUE:
      return action.val;
    default:
      return state;
  }
}

const SATART_POINT_INFINITY_SCROLL = 243;
export const scrollHeight = (state = SATART_POINT_INFINITY_SCROLL, action) => {
  switch (action.type) {
    case SET_CURRENT_SCROLL_TOP:
      return action.val;
    default:
      return state;
  }
}
