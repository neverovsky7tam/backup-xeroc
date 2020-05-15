import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainContent } from '../../store/actions';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';

const MenuItems = ({ background }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.langObj.header.menu);

  const setContent = (e, page) => {
    e.preventDefault();
    dispatch(setMainContent(page));
  };

  return (
    <nav className="main-menu__items line-height-8">
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.home}</a>
      <MenuSeparate className="main-menu__items-separator" />
      <a className="p-relative" href="#" onClick={(e) => setContent(e, 'home')}>
        {lang.sell}
        {background && <div className="overlay-menu-background">menu</div>}
      </a>
      <MenuSeparate className="main-menu__items-separator" />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.host}</a>
      <MenuSeparate className="main-menu__items-separator" />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.about}</a>
      <MenuSeparate className="main-menu__items-separator" />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.support}</a>
    </nav>
  );
};

export default MenuItems;
