import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarMenu, setSidebarState, setCloseCrossLeft } from 'store/actions';
import { Filters } from './components/Filters';
import { AccountContent, AccountBtn } from './components/Account';
import { BalanceContent, BalanceBtn } from './components/Balance';
import { NotificationsContent, NotificationsBtn } from './components/Notifications';
import { Socials } from './components/Socials';
import { TopSellersSidebar } from './components/TopSellersSidebar';
import { Awards } from './components/Awards';
import { LangSwitcher } from './components/LangSwitcher';
import {
  MenuSeparate,
  FiltersIcon,
  AuthIcon,
  BalanceIcon,
  NotificationIcon,
  FacebookIcon,
  TopSellersIcon,
  AwardsIcon,
  LanguageIcon,
} from 'svg/svgSideBar';

const SideBar = () => {
  const dispatch = useDispatch();

  const navInner = React.createRef();
  const accountBtn = React.createRef();

  const isLogin = useSelector((state) => state.accountMenu);
  let menu = useSelector((state) => state.sidebarMenu);
  const notificationCounter = useSelector((state) => state.notificationsData.length);

  let prevMenu = null;
  let content = null;
  let buttons = null;
  let contentCssClass = 'sidebar__content-inner';

  if (!menu.currentMenu) content = <Filters />;
  if (menu.currentMenu === 'Filters') content = <Filters />;
  if (menu.currentMenu === 'Account' && isLogin) {
    content = <AccountContent />;
    buttons = <AccountBtn />;
  };
  if (menu.currentMenu === 'Account' && !isLogin) content = <Filters />;
  if (menu.currentMenu === 'Balance') {
    content = <BalanceContent />;
    buttons = <BalanceBtn />;
  }
  if (menu.currentMenu === 'Notifications') {
    content = <NotificationsContent />;
    buttons = <NotificationsBtn />;
  }
  if (menu.currentMenu === 'Social') content = <Socials />
  if (menu.currentMenu === 'Sellers') content = <TopSellersSidebar />
  if (menu.currentMenu === 'Awards') content = <Awards />
  if (menu.currentMenu === 'Lang') content = <LangSwitcher />

  if (buttons) contentCssClass = 'sidebar__content-inner_mod';

  const setMenuState = (menuElem, color, param) => {
    let action = null;
    if (param) action = 'add';
    else action = 'remove';

    menuElem.classList[action]('active');
    menuElem.previousElementSibling.classList[action]('active');
    menuElem.nextElementSibling.classList[action]('active');

    if (menuElem.previousElementSibling.firstElementChild) {
      menuElem.previousElementSibling.firstElementChild.classList[action]('d-none');
    }

    if (menuElem.nextElementSibling.firstElementChild) {
      menuElem.nextElementSibling.firstElementChild.classList[action]('d-none');
    }

    const menuIcon = menuElem.firstElementChild.firstElementChild.children;

    for (let path of menuIcon) {
      if (menuElem.firstElementChild.firstElementChild.dataset.icon === 'facebook') {
        path.style.fill = color;
      } else {
        path.style.stroke = color;
      }
    };

    // notifications amount div
    if (menuElem.firstElementChild.children.length > 1) {
      const fontColor = (menuElem.firstElementChild.children[1].style.color) ? '' : '#fff';
      menuElem.firstElementChild.children[1].style.color = fontColor;
    }
  };

  useEffect(() => {
    const navBar = navInner.current.children;
    let currentElem = null;
    let prevElem = null;

    const initState = () => {
      currentElem = navBar[1];
      prevMenu = navBar[1].dataset.menu;
    }

    if (!menu.currentMenu) initState();
    else if (menu.currentMenu === 'Account' && !isLogin) {
      initState();
      if (accountBtn.current.classList.contains('active')) {
        setMenuState(accountBtn.current, '#c4c4c4', false);
      }
    }
    else {
      for (let elem of navBar) {
        if (elem.dataset.menu === menu.currentMenu) currentElem = elem;
        if (elem.dataset.menu === menu.prevMenu) prevElem = elem;
      };
      prevMenu = menu.currentMenu;
      setMenuState(prevElem, '#c4c4c4', false);
    };
    setMenuState(currentElem, '#fff', true);
  });

  useEffect(() => {
    dispatch(setCloseCrossLeft(true));
    return () => dispatch(setCloseCrossLeft(false));
  }, []);

  const setMenu = (e) => {
    const currentMenu = e.currentTarget.dataset.menu;
    dispatch(setSidebarMenu(currentMenu, prevMenu));
    if (currentMenu === 'Account' && !isLogin) dispatch(setSidebarState(false));
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <div className="sidebar__menu">
          <nav className="sidebar__nav">
            <ul className="sidebar__nav-inner" ref={navInner}>
              <div className="menu-separate"></div>
              <li
                className="sidebar__nav-item"
                data-menu="Filters"
                onClick={setMenu}>
                <div className="sidebar__nav-item-btn sidebar__nav-item-btn_filters">
                  {FiltersIcon}
                </div>
              </li>
              <div className="menu-separate">
                {MenuSeparate}
              </div>
              <li
                className="sidebar__nav-item"
                data-menu="Account"
                onClick={setMenu}
                ref={accountBtn}>
                <div className="sidebar__nav-item-btn sidebar__nav-item-btn_acc">
                  {
                    (isLogin) ?
                      (<div onClick={setMenu}>{AuthIcon}</div>) :
                      (<Link to="/log-in">{AuthIcon}</Link>)
                  }
                </div>
              </li>
              <div className="menu-separate">
                {MenuSeparate}
              </div>
              {
                isLogin &&
                <>
                  <li
                    className="sidebar__nav-item"
                    data-menu="Balance"
                    onClick={setMenu}>
                    <div className="sidebar__nav-item-btn sidebar__nav-item-btn_balance">
                      {BalanceIcon}
                    </div>
                  </li>
                  <div className="menu-separate">
                    {MenuSeparate}
                  </div>
                  <li
                    className="sidebar__nav-item"
                    data-menu="Notifications"
                    onClick={setMenu}>
                    <div className="sidebar__nav-item-btn sidebar__nav-item_notification p-relative">
                      {NotificationIcon}
                      <div className="notification-quantity">{notificationCounter}</div>
                    </div>
                  </li>
                  <div className="menu-separate">
                    {MenuSeparate}
                  </div>
                </>
              }
              <li
                className="sidebar__nav-item"
                data-menu="Social"
                onClick={setMenu}>
                <div className="sidebar__nav-item-btn sidebar__nav-item-btn_social">
                  {FacebookIcon}
                </div>
              </li>
              <div className="menu-separate">
                {MenuSeparate}
              </div>
              <li
                className="sidebar__nav-item"
                data-menu="Sellers"
                onClick={setMenu}>
                <div className="sidebar__nav-item-btn sidebar__nav-item-btn_sellers">
                  {TopSellersIcon}
                </div>
              </li>
              <div className="menu-separate">
                {MenuSeparate}
              </div>
              <li
                className="sidebar__nav-item"
                data-menu="Awards"
                onClick={setMenu}>
                <div className="sidebar__nav-item-btn sidebar__nav-item-btn_awards">
                  {AwardsIcon}
                </div>
              </li>
              <div className="menu-separate">
                {MenuSeparate}
              </div>
              <li
                className="sidebar__nav-item"
                data-menu="Lang"
                onClick={setMenu}>
                <div className="sidebar__nav-item-btn sidebar__nav-item-btn_lang">
                  {LanguageIcon}
                </div>
              </li>
              <div className="menu-separate"></div>
            </ul>
          </nav>
        </div>
        <div className="sidebar__content">
          <div className={contentCssClass}>
            {content}
          </div>
          {buttons &&
            <div className="sidebar__buttons-holder">{buttons}</div>
          }
        </div>
      </div>
    </div>
  );
};

export default SideBar;
