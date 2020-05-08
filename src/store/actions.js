export const SET_ON_SALE_DISPLAY = "SET_ON_SALE_DISPLAY";
export const CHANGE_LANG = "CHANGE_LANG";
export const SET_MAIN_CONTENT = "SET_MAIN_CONTENT";
export const SET_ACCOUNT_MENU = "SET_ACCOUNT_MENU";
export const SET_ELECTRICITY_VALUE = "SET_ELECTRICITY_VALUE";
export const SET_CURRENT_SCROLL_TOP = "SET_CURRENT_SCROLL_TOP";
export const SET_FILTERS_STATE = "SET_FILTERS_STATE";
export const SET_FILTER_ORIGIN = "SET_FILTER_ORIGIN";
export const SET_FILTER_OBJ = "SET_FILTER_OBJ";
export const SET_SEARCH_OBJ = "SET_SEARCH_OBJ";
export const SET_JOINT_SEARCH_OBJ = "SET_JOINT_SEARCH_OBJ";

export const setOnSaleDisplay = (products) => ({
  type: SET_ON_SALE_DISPLAY,
  products,
});

export const switchLang = (lang) => ({
  type: CHANGE_LANG,
  lang,
});

export const mainContent = (content) => ({
  type: SET_MAIN_CONTENT,
  content,
});

export const setAccountMenu = (isLogin) => ({
  type: SET_ACCOUNT_MENU,
  isLogin,
});

export const setElectricityValue = (val) => ({
  type: SET_ELECTRICITY_VALUE,
  val,
});

export const setCurrentScrollTop = (val) => ({
  type: SET_CURRENT_SCROLL_TOP,
  val,
});

export const setFiltersState = (filter, prop, value) => ({
  type: SET_FILTERS_STATE,
  filters: { [filter]: { [prop]: value, }, },
});

export const setFilterOrigin = (obj) => ({
  type: SET_FILTER_ORIGIN,
  obj,
});

export const setFilterObj = (obj) => ({
  type: SET_FILTER_OBJ,
  obj,
});

export const setSearchObj = (type, value, data) => ({
  type: SET_SEARCH_OBJ,
  fields: { [type]: { value, data, }, },
});

export const setJointSearchObj = (isEnable, globalSearchObj, filterSearchObj) => ({
  type: SET_JOINT_SEARCH_OBJ,
  searchState: {
    isEnable,
    globalSearchObj,
    filterSearchObj,
  },
});
