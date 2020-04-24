import {
  CHANGE_LANG,
  SET_MAIN_CONTENT,
  SET_ACCOUNT_MENU,
  SET_ELECTRICITY_VALUE,
  SET_CURRENT_SCROLL_TOP,
} from '../actions';

import { langEN, langCH } from '../../data/languages';

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

export const scrollHeight = (state = 243, action) => {
  switch (action.type) {
    case SET_CURRENT_SCROLL_TOP:
      return action.val;
    default:
      return state;
  }
}
