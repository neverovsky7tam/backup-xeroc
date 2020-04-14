export const CHANGE_LANG = "CHANGE_LANG";
export const SET_MAIN_CONTENT = "SET_MAIN_CONTENT";
export const SET_ACCOUNT_MENU = "SET_ACCOUNT_MENU";
export const SET_MAIN_CONTAINER_HEIGHT = "SET_MAIN_CONTAINER_HEIGHT";

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
})

export const setMainContainerHeight = (height) => ({
  type: SET_MAIN_CONTAINER_HEIGHT,
  height,
})

