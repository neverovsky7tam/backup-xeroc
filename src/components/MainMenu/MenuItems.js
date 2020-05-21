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
    <nav>
      <ul className="main-menu__items" ref={items}>
        <li
          href="#"
          onClick={(e) => setContent(e, 'home')}>
          {lang.home}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          className="p-relative"
          href="#"
          onClick={(e) => setContent(e, 'home')}
          onSelect={(e) => e.preventDefault()}>
          {lang.sell}
          {isOverlayMenu && <div className="overlay-menu-background">menu</div>}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          href="#"
          onClick={(e) => setContent(e, 'home')}
          onSelect={(e) => e.preventDefault()}>
          {lang.host}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          href="#"
          onClick={(e) => setContent(e, 'home')}
          onSelect={(e) => e.preventDefault()}>
          {lang.about}
        </li>
        {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
        <li
          href="#"
          onClick={(e) => setContent(e, 'home')}
          onSelect={(e) => e.preventDefault()}>
          {lang.support}
        </li>
      </ul>
    </nav>
  );
});

export default MenuItems;
