import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mainContent } from '../../store/actions';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';

const MenuPoints = ({ linkStyle }) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.langObj.header.menu);

  const setContent = (e, page) => {
    e.preventDefault();
    dispatch(mainContent(page));
  }


  return (
    <nav className="main-menu__points line-height-8">
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.home}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.sell}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.host}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.about}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={(e) => setContent(e, 'home')}>{lang.support}</a>
    </nav>
  )
}

export default MenuPoints;
