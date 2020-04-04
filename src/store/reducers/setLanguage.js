import { CHANGE_LANG } from '../actions';

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
