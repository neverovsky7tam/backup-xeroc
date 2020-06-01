export const SET_DEVICE_TYPE = "SET_DEVICE_TYPE";
export const SET_SIDEBAR_STATE = "SET_SIDEBAR_STATE";
export const SET_SIDEBAR_MENU = "SET_SIDEBAR_MENU";
export const SET_ON_SALE_DISPLAY = "SET_ON_SALE_DISPLAY";
export const CHANGE_LANG = "CHANGE_LANG";
export const SET_PAGE_TOP_STATE = "SET_PAGE_TOP_STATE";
export const SET_CAROUSEL_MENU_POS = "SET_CAROUSEL_MENU_POS";
export const SET_MAIN_CONTENT = "SET_MAIN_CONTENT";
export const SET_ACCOUNT_MENU = "SET_ACCOUNT_MENU";
export const SET_TERMS_CLOSE_BTN = "SET_TERMS_CLOSE_BTN";
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

export const switchLang = (lang) => ({
  type: CHANGE_LANG,
  lang,
});

export const setPageTopState = (content, isDisplay, additionCssClass) => ({
  type: SET_PAGE_TOP_STATE,
  state: { content, isDisplay, additionCssClass },
});

export const setCarouselMenuPos = (pos, itemIndex) => ({
  type: SET_CAROUSEL_MENU_POS,
  store: { pos, itemIndex },
});

export const setMainContent = (content) => ({
  type: SET_MAIN_CONTENT,
  content,
});

export const setAccountMenu = (isLogin) => ({
  type: SET_ACCOUNT_MENU,
  isLogin,
});

export const setTermsCloseBtn = (val) => ({
  type: SET_TERMS_CLOSE_BTN,
  isOpen: val,
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

