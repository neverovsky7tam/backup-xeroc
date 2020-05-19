import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainContent } from '../../store/actions';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';

const MenuItems = React.forwardRef(({ background, setOverlayMenu, isSeparator }, items) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.langObj.header.menu);

  const setContent = (e, page) => {
    e.preventDefault();
    dispatch(setMainContent(page));
    if (background) setOverlayMenu(false);
  };

  return (
    <nav className="main-menu__items" ref={items}>
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.home}</a>
      {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
      <a className="p-relative" href="#" onClick={(e) => setContent(e, 'home')}>
        {lang.sell}
        {background && <div className="overlay-menu-background">menu</div>}
      </a>
      {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.host}</a>
      {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.about}</a>
      {isSeparator && <MenuSeparate className="main-menu__items-separator" />}
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.support}</a>
    </nav>
  );
});

export default MenuItems;
