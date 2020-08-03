export const SWITCH_LANG = "SWITCH_LANG";
export const SET_DEVICE_TYPE = "SET_DEVICE_TYPE";
export const SET_SIDEBAR_STATE = "SET_SIDEBAR_STATE";
export const SET_SIDEBAR_MENU = "SET_SIDEBAR_MENU";
export const SET_ON_SALE_DISPLAY = "SET_ON_SALE_DISPLAY";
export const SET_PRODUCTS_LIST_TYPE = "SET_PRODUCTS_LIST_TYPE";
export const SET_CLOSE_CROSS_LEFT = "SET_CLOSE_CROSS_LEFT";
export const SET_CLOSE_CROSS_RIGHT = "SET_CLOSE_CROSS_RIGHT";
export const SET_PAGE_TOP_STYLE = "SET_PAGE_TOP_STYLE";
export const SET_PAGE_TOP_CONTENT = "SET_PAGE_TOP_CONTENT";
export const SET_ITEM_TO_CART = "SET_ITEM_TO_CART";
export const SET_ACCOUNT_MENU = "SET_ACCOUNT_MENU";
export const SET_FOOTER_STATE = "SET_FOOTER_STATE";
export const SET_HEADER_NAVBAR_CSS_CLASS = "SET_HEADER_NAVBAR_CSS_CLASS";
export const SET_LISTINGS_SECTION_CSS_CLASS = "SET_LISTINGS_SECTION_CSS_CLASS";
export const SET_ELECTRICITY_VALUE = "SET_ELECTRICITY_VALUE";
export const SET_CURRENT_SCROLL_TOP = "SET_CURRENT_SCROLL_TOP";
export const SET_FILTERS_STATE = "SET_FILTERS_STATE";
export const SET_FILTER_ORIGIN = "SET_FILTER_ORIGIN";
export const SET_FILTER_OBJ = "SET_FILTER_OBJ";
export const SET_SEARCH_OBJ = "SET_SEARCH_OBJ";
export const SAVE_SEARCH_VALUE = "SAVE_SEARCH_VALUE";
export const SET_PREVIOUS_SEARCH_RESULT = "SET_PREVIOUS_SEARCH_RESULT";
export const SET_JOINT_SEARCH_OBJ = "SET_JOINT_SEARCH_OBJ";
export const SET_WITHDRAWAL = "SET_WITHDRAWAL";
export const SET_NOTIFICATIONS_DATA = "SET_NOTIFICATIONS_DATA";

export const switchLang = (lang) => ({
  type: SWITCH_LANG,
  lang,
});

export const setDeviceType = (isMobileDevice) => ({
  type: SET_DEVICE_TYPE,
  isMobileDevice,
});

export const setSidebarState = (isSidebar) => ({
  type: SET_SIDEBAR_STATE,
  isSidebar,
});

export const setSidebarMenu = (currentMenu, prevMenu) => ({
  type: SET_SIDEBAR_MENU,
  menu: { currentMenu, prevMenu },
});

export const setOnSaleDisplay = (products) => ({
  type: SET_ON_SALE_DISPLAY,
  products,
});

export const setProductsListType = (isGridView) => ({
  type: SET_PRODUCTS_LIST_TYPE,
  isGridView,
});

export const setCloseCrossLeft = (param) => ({
  type: SET_CLOSE_CROSS_LEFT,
  param,
});

export const setCloseCrossRight = (param) => ({
  type: SET_CLOSE_CROSS_RIGHT,
  param,
});

export const setPageTopStyle = (style) => ({
  type: SET_PAGE_TOP_STYLE,
  style,
});

export const setPageTopContent = (content) => ({
  type: SET_PAGE_TOP_CONTENT,
  content,
});

export const setItemToCart = (item) => ({
  type: SET_ITEM_TO_CART,
  item,
});

export const setAccountMenu = (isLogin) => ({
  type: SET_ACCOUNT_MENU,
  isLogin,
});

export const setFooterState = (cond) => ({
  type: SET_FOOTER_STATE,
  cond,
});

export const setHeaderNavbarCssClass = (val) => ({
  type: SET_HEADER_NAVBAR_CSS_CLASS,
  cssClass: val,
});

export const setListingsSectionCssClass = (val) => ({
  type: SET_LISTINGS_SECTION_CSS_CLASS,
  cssClass: val,
});

export const setElectricityValue = (val) => ({
  type: SET_ELECTRICITY_VALUE,
  val,
});

export const setCurrentScrollTop = (val) => ({
  type: SET_CURRENT_SCROLL_TOP,
  val,
});

export const setFiltersState = (filter, prop, value, isEnable) => ({
  type: SET_FILTERS_STATE,
  filters: {
    [filter]: {
      [prop]: value,
      isEnableFilter: isEnable,
    },
  },
});

export const setFilterOrigin = (obj, isAdd) => ({
  type: SET_FILTER_ORIGIN,
  obj,
  isAdd,
});

export const setFilterObj = (obj) => ({
  type: SET_FILTER_OBJ,
  obj,
});

export const setSearchObj = (type, value, data) => ({
  type: SET_SEARCH_OBJ,
  fields: { [type]: { value, data, }, },
});

export const saveSearchValue = (type, value) => ({
  type: SAVE_SEARCH_VALUE,
  fields: { [type]: value, },
});

export const setPreviuosSearchResult = (data) => ({
  type: SET_PREVIOUS_SEARCH_RESULT,
  prevSearch: data,
});

export const setJointSearchObj = (isEnable, globalSearchObj, filterSearchObj) => ({
  type: SET_JOINT_SEARCH_OBJ,
  searchState: {
    isEnable,
    globalSearchObj,
    filterSearchObj,
  },
});

export const setWithdrawal = (value) => ({
  type: SET_WITHDRAWAL,
  value,
});

export const setNotificationsData = (notificationsArr) => ({
  type: SET_NOTIFICATIONS_DATA,
  notificationsArr,
});

