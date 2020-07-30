import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { MenuSeparate } from 'svg/svgHeader';

const MenuItems = React.forwardRef(({ isOverlayMenu, setOverlayMenu, isSeparator }, items) => {
  const isMobile = useSelector((state) => state.deviceType);
  const lang = useSelector((state) => state.langObj.header.menu);

  const setContent = () => {
    if (isOverlayMenu) setOverlayMenu(false);
  };

  if (isMobile) {
    return (
      <nav className="main-menu__wrapper">
        <ul className="main-menu__items" ref={items}>
          <li data-link="/">{lang.home}</li>
          <li data-link="/sell">{lang.sell}</li>
          <li data-link="/host">{lang.host}</li>
          <li data-link="/about">{lang.about}</li>
          <li data-link="/support">{lang.support}</li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="main-menu__wrapper">
        <ul className="main-menu__items" ref={items}>
          <li
            onClick={setContent}>
            <Link to="/">{lang.home}</Link>
          </li>
          {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
          <li
            className="p-relative"
            onClick={setContent}>
            <Link to="/sell">{lang.sell}</Link>
            {isOverlayMenu && <div className="overlay-menu-background">menu</div>}
          </li>
          {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
          <li
            onClick={setContent}>
            <Link to="/host">{lang.host}</Link>
          </li>
          {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
          <li
            onClick={setContent}>
            <Link to="/about">{lang.about}</Link>
          </li>
          {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
          <li
            onClick={setContent}>
            <Link to="/support">{lang.support}</Link>
          </li>
        </ul>
      </nav>
    )
  }
});

export default MenuItems;
