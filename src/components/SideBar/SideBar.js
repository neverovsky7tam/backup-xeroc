import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const navInner = React.createRef();
  let prevMenu = useSelector((state) => state.sidebarMenu);

  if (prevMenu) setMenuState(prevMenu, '#fff');

  const setMenuState = (menuItem, color) => {
    menuItem.classList.toggle('active');

    menuItem.previousElementSibling.classList.toggle('active');
    if (menuItem.previousElementSibling.firstElementChild) {
      menuItem.previousElementSibling.firstElementChild.classList.toggle('d-none');
    }
    menuItem.nextElementSibling.classList.toggle('active');
    if (menuItem.nextElementSibling.firstElementChild) {
      menuItem.nextElementSibling.firstElementChild.classList.toggle('d-none');
    }

    const menuIcon = menuItem.firstElementChild.firstElementChild.children;
    for (let path of menuIcon) {
      path.style.stroke = color;
    }
  };

  useEffect(() => {
    const root = document.getElementById('root');
    root.classList.add('stop-scroll-y');

    if (!prevMenu) {
      prevMenu = navInner.current.children[1];
      setMenuState(prevMenu, '#fff');
    }
    return () => root.classList.remove('stop-scroll-y');
  });


  const setMenu = (e) => {
    const menuType = e.currentTarget.dataset.menu;
    console.log('e', e.currentTarget);
    setMenuState(prevMenu, '#c4c4c4');
    prevMenu = e.currentTarget;
    setMenuState(e.currentTarget, '#fff');
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
              data-menu="Filters"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_auth">
                <AuthIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Filters"
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
              data-menu="Filters"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-notification">
                <NotificationIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Filters"
              onClick={setMenu}>
              <div className="sidebar__nav-item-btn sidebar__nav-item-btn_facebook">
                <FacebookIcon />
              </div>
            </li>
            <div className="menu-separate">
              <MenuSeparate />
            </div>
            <li
              className="sidebar__nav-item"
              data-menu="Filters"
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
              data-menu="Filters"
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
              data-menu="Filters"
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

        </div>
      </div>
    </section>
  )
};

export default SideBar;
