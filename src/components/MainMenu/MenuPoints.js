import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';

const MenuPoints = ({ linkStyle }) => {
  const lang = useSelector((state) => state.langObj.header.menu);
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <nav className="main-menu__points line-height-8">
      <a href="#" onClick={handleClick}>{lang.home}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>{lang.sell}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>{lang.host}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>{lang.about}</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>{lang.support}</a>
    </nav>
  )
}

export default MenuPoints;
