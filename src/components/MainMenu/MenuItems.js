import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainContent } from '../../store/actions';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';

const MenuItems = React.forwardRef(({ isOverlayMenu, setOverlayMenu, isSeparator, mobile }, items) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.langObj.header.menu);

  const setContent = (e, page) => {
    e.preventDefault();
    if (mobile) {
      if (e.target.classList.contains('active')) dispatch(setMainContent(page));
    } else {
      dispatch(setMainContent(page));
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
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          className="p-relative"
          data-menu="sell"
          onClick={(e) => setContent(e, 'sell')}>
          {lang.sell}
          {isOverlayMenu && <div className="overlay-menu-background">menu</div>}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          data-menu="host"
          onClick={(e) => setContent(e, 'host')}>
          {lang.host}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          data-menu="about"
          onClick={(e) => setContent(e, 'about')}>
          {lang.about}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
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
