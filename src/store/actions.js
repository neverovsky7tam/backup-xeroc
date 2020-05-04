export const SET_ON_SALE_DISPLAY = "SET_ON_SALE_DISPLAY";
export const CHANGE_LANG = "CHANGE_LANG";
export const SET_MAIN_CONTENT = "SET_MAIN_CONTENT";
export const SET_ACCOUNT_MENU = "SET_ACCOUNT_MENU";
export const SET_ELECTRICITY_VALUE = "SET_ELECTRICITY_VALUE";
export const SET_CURRENT_SCROLL_TOP = "SET_CURRENT_SCROLL_TOP";
export const SET_FILTERS_STATE = "SET_FILTERS_STATE";
export const SET_RENDER_OBJ = "SET_RENDER_OBJ";

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

export const setRenderObj = (obj) => ({
  type: SET_RENDER_OBJ,
  obj,
});
