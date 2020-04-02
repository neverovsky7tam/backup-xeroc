import React from 'react';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';

const MenuPoints = ({ linkStyle }) => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <nav className="main-menu__points">
      <a href="#" onClick={handleClick}>home</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>sell</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>host</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>about us</a>
      <MenuSeparate className={linkStyle} />
      <a href="#" onClick={handleClick}>support</a>
    </nav>
  )
}

export default MenuPoints;