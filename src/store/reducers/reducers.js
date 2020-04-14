import {
  CHANGE_LANG,
  SET_MAIN_CONTENT,
  SET_ACCOUNT_MENU,
  SET_MAIN_CONTAINER_HEIGHT,
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

export const mainContainerHeight = (state = 'auto', action) => {
  switch (action.type) {
    case SET_MAIN_CONTAINER_HEIGHT:
      return action.height;
    default:
      return state;
  }
}
