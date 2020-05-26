import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarMenu, setSidebarState, setMainContent } from '../../store/actions';
import LogIn from '../Main/Auth/LogIn';
import Test from './Test';
import Test2 from './Test2';
import { ReactComponent as MenuSeparate } from '../../assets/img/SideBar/sidebar-menu-separate.svg';
import { ReactComponent as FiltersIcon } from '../../assets/img/SideBar/filters.svg';
import { ReactComponent as AuthIcon } from '../../assets/img/SideBar/auth.svg';
import { ReactComponent as BalanceIcon } from '../../assets/img/SideBar/balance.svg';
import { ReactComponent as NotificationIcon } from '../../assets/img/SideBar/notification.svg';
import { ReactComponent as FacebookIcon } from '../../assets/img/SideBar/facebook.svg';
import { ReactComponent as TopSellersIcon } from '../../assets/img/SideBar/top-sellers.svg';
import { ReactComponent as AwardsIcon } from '../../assets/img/SideBar/awards.svg';
import { ReactComponent as LanguageIcon } from '../../assets/img/SideBar/language.svg';

const SideBar = () => {
  const dispatch = useDispatch();
  const navInner = React.createRef();

  let menu = useSelector((state) => state.sidebarMenu);
  console.log('menu', menu);
  let prevMenu = null;
  let content = null;

  if (!menu.currentMenu) content = <Test />;
  if (menu.currentMenu === 'Balance') content = <Test2 />


  const setMenuState = (menuElem, color) => {
    menuElem.classList.toggle('active');

    menuElem.previousElementSibling.classList.toggle('active');
    if (menuElem.previousElementSibling.firstElementChild) {
      menuElem.previousElementSibling.firstElementChild.classList.toggle('d-none');
    }

    menuElem.nextElementSibling.classList.toggle('active');
    if (menuElem.nextElementSibling.firstElementChild) {
      menuElem.nextElementSibling.firstElementChild.classList.toggle('d-none');
    }

    const menuIcon = menuElem.firstElementChild.firstElementChild.children;
    for (let path of menuIcon) {
      path.style.stroke = color;
    }
  };

  useEffect(() => {
    const root = document.getElementById('root');
    root.classList.add('stop-scroll-y');
    const navBar = navInner.current.children;
    let currentElem = null;
    let prevElem = null;

    if (!menu.currentMenu) {
      currentElem = navBar[1];
      prevMenu = navBar[1].dataset.menu;
    } else {
      for (let elem of navBar) {
        if (elem.dataset.menu === menu.currentMenu) currentElem = elem;
        if (elem.dataset.menu === menu.prevMenu) prevElem = elem;
      };
      prevMenu = menu.currentMenu;
      setMenuState(prevElem, '#c4c4c4');
    };
    setMenuState(currentElem, '#fff');

    return () => {
      root.classList.remove('stop-scroll-y');
    }
  });


  const setMenu = (e) => {
    const currentMenu = e.currentTarget.dataset.menu;
    console.log('set', prevMenu, currentMenu);
    if (currentMenu !== 'Account') dispatch(setSidebarMenu(currentMenu, prevMenu));
    else {
      dispatch(setMainContent('log-in'));
      dispatch(setSidebarMenu(null, null));
      dispatch(setSidebarState(false));
    }
  };

  return (
    <section className="sidebar">
      <div className="sidebar__menu">
        <nav className="sidebar__nav">
          <ul className="sidebar__nav-inner" ref={navInner}>
            <div className="menu-separate"></div>
            <li
              className="sidebar__nav-item"
              data-menu="Filters"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_filters">
                <FiltersIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Account"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_acc">
                <AuthIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Balance"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_balance">
                <BalanceIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Notification"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item_notification">
                <NotificationIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Social"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_social">
                <FacebookIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Sellers"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_sellers">
                <TopSellersIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Awards"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_awards">
                <AwardsIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Lang"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_lang">
                <LanguageIcon />
              </div>
            </li>
            <div className="menu-separate"></div>
          </ul>
        </nav>
      </div>
      <div className="sidebar__content">
        <div className="sidebar__content-inner">
          {content}
        </div>
      </div>
    </section>
  )
};

export default SideBar;
