import {
  SWITCH_LANG,
  SET_DEVICE_TYPE,
  SET_SIDEBAR_STATE,
  SET_SIDEBAR_MENU,
  SET_ON_SALE_DISPLAY,
  SET_PRODUCTS_LIST_TYPE,
  SET_CLOSE_CROSS_LEFT,
  SET_CLOSE_CROSS_RIGHT,
  SET_PAGE_TOP_STYLE,
  SET_PAGE_TOP_CONTENT,
  SET_CURRENT_PRODUCT,
  SET_ACCOUNT_MENU,
  SET_FOOTER_STATE,
  SET_HEADER_NAVBAR_CSS_CLASS,
  SET_LISTINGS_SECTION_CSS_CLASS,
  SET_ELECTRICITY_VALUE,
  SET_CURRENT_SCROLL_TOP,
  SET_FILTERS_STATE,
  SET_FILTER_ORIGIN,
  SET_FILTER_OBJ,
  SET_SEARCH_OBJ,
  SAVE_SEARCH_VALUE,
  SET_JOINT_SEARCH_OBJ,
  SET_PREVIOUS_SEARCH_RESULT,
  SET_WITHDRAWAL,
  SET_NOTIFICATIONS_DATA,
} from '../actions';

import { langEN } from 'data/languages';
import { productsObj } from 'data/productsData';
import { notificationsArr } from 'data/notifications';
import MenuItems from 'mod/MainMenu/MenuItems';

export const langObj = (state = langEN, action) => {
  switch (action.type) {
    case SWITCH_LANG:
      return action.lang;
    default:
      return state;
  }
}

export const deviceType = (state = false, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return action.isMobileDevice;
    default:
      return state;
  }
}

export const sidebarState = (state = false, action) => {
  switch (action.type) {
    case SET_SIDEBAR_STATE:
      return action.isSidebar;
    default:
      return state;
  }
}

export const sidebarMenu = (state = { currentMenu: null, prevMenu: null, }, action) => {
  switch (action.type) {
    case SET_SIDEBAR_MENU:
      return action.menu;
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

export const productsListType = (state = true, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST_TYPE:
      return action.isGridView;
    default:
      return state;
  }
}

export const closeCrossLeft = (state = false, action) => {
  switch (action.type) {
    case SET_CLOSE_CROSS_LEFT:
      return action.param;
    default:
      return state;
  }
}

export const closeCrossRight = (state = false, action) => {
  switch (action.type) {
    case SET_CLOSE_CROSS_RIGHT:
      return action.param;
    default:
      return state;
  }
}

// export const currentProduct = (state = null, action) => {
//   switch (action.type) {
//     case SET_CURRENT_PRODUCT:
//       return action.product;
//     default:
//       return state;
//   }
// }

export const pageTopStyle = (state = null, action) => {
  switch (action.type) {
    case SET_PAGE_TOP_STYLE:
      return action.style;
    default:
      return state;
  }
}

export const pageTopContent = (state = MenuItems, action) => {
  switch (action.type) {
    case SET_PAGE_TOP_CONTENT:
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

export const footerState = (state = 'footer-standart', action) => {
  switch (action.type) {
    case SET_FOOTER_STATE:
      return action.cond;
    default:
      return state;
  }
}

export const headerNavbarCssClass = (state = 'header__navbar', action) => {
  switch (action.type) {
    case SET_HEADER_NAVBAR_CSS_CLASS:
      return action.cssClass;
    default:
      return state;
  }
}

export const listingsSectionCssClass = (state = null, action) => {
  switch (action.type) {
    case SET_LISTINGS_SECTION_CSS_CLASS:
      return action.cssClass;
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

export const filtersState = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTERS_STATE:
      if (action.fiters === null) {
        return {};
      } else {
        const newState = Object.assign({}, state);
        const key = Object.keys(action.filters);
        const actionFilter = action.filters[key[0]].filter;
        const actionTag = action.filters[key[0]].tag;

        if (!newState[key[0]]) {
          newState[key[0]] = { filter: {}, tag: [] }
        };

        if (actionFilter) newState[key[0]].filter = actionFilter;

        if (actionTag) {
          if (newState[key[0]].tag.length) {
            const checkObj = {};
            newState[key[0]].tag.forEach((el) => {
              checkObj[el] = 1;
            });

            if (checkObj[actionTag]) delete checkObj[actionTag];
            else checkObj[actionTag] = 1;

            newState[key[0]].tag = Object.keys(checkObj);
          } else {
            newState[key[0]].tag.push(actionTag);
          }
        }

        newState[key[0]].isEnableFilter = action.filters[key[0]].isEnableFilter;
        return newState;
      }
    default:
      return state;
  }
}

export const filterOrigin = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER_ORIGIN:
      if (action.isAdd) return Object.assign({}, state, action.obj);
      else return action.obj;
    default:
      return state;
  }
}

export const filterObj = (state = {}, action) => {
  switch (action.type) {
    case SET_FILTER_OBJ:
      return action.obj;
    default:
      return state;
  }
}

export const searchObj = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH_OBJ:
      return Object.assign({}, state, action.fields);
    default:
      return state;
  }
}

export const searchValue = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SEARCH_VALUE:
      return Object.assign(state, action.fields);
    default:
      return state;
  }
}

export const jointSearchObj = (state = {
  isEnable: false,
  globalSearchObj: {},
  filterSearchObj: {},
},
  action) => {
  switch (action.type) {
    case SET_JOINT_SEARCH_OBJ:
      return action.searchState;
    default:
      return state;
  }
}

export const previousSearch = (state = {}, action) => {
  switch (action.type) {
    case SET_PREVIOUS_SEARCH_RESULT:
      return action.prevSearch;
    default:
      return state;
  }
}

export const withdrawal = (state = 0, action) => {
  switch (action.type) {
    case SET_WITHDRAWAL:
      return action.value;
    default:
      return state;
  }
}

export const notificationsData = (state = notificationsArr, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS_DATA:
      return action.notificationsArr;
    default:
      return state;
  }
}

