import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGeneralBlockContent } from 'store/actions';
import { MenuSeparate } from 'svg/svgHeader';

const MenuItems = React.forwardRef(({ isOverlayMenu, setOverlayMenu, isSeparator, mobile }, items) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.langObj.header.menu);

  const setContent = (e, page) => {
    e.preventDefault();
    if (mobile) {
      if (e.target.classList.contains('active')) dispatch(setGeneralBlockContent(page));
    } else {
      dispatch(setGeneralBlockContent(page));
      if (isOverlayMenu) setOverlayMenu(false);
    }
  };

  return (
    <nav className="main-menu__wrapper">
      <ul className="main-menu__items" ref={items}>
        <li
          data-menu="home"
          onClick={(e) => setContent(e, 'home')}>
          {lang.home}
        </li>
        {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
        <li
          className="p-relative"
          data-menu="sell"
          onClick={(e) => setContent(e, 'sell')}>
          {lang.sell}
          {isOverlayMenu && <div className="overlay-menu-background">menu</div>}
        </li>
        {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
        <li
          data-menu="host"
          onClick={(e) => setContent(e, 'host')}>
          {lang.host}
        </li>
        {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
        <li
          data-menu="about"
          onClick={(e) => setContent(e, 'about')}>
          {lang.about}
        </li>
        {isSeparator && <span className="main-menu__items-separator">{MenuSeparate}</span>}
        <li
          data-menu="support"
          onClick={(e) => setContent(e, 'support')}>
          {lang.support}
        </li>
      </ul>
    </nav>
  );
});

export default MenuItems;
