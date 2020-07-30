import React from 'react';
import Account from './Account';
import Notify from './Notify';
import Balance from './Balance';
import { MenuSeparate } from 'svg/svgHeader';

const UserMenu = () => {
  const onHover = (element, state) => {
    element.current.style.display = state;
  }

  return (
    <>
      <Account onHover={onHover} />
      <span className="user-menu__separate">{MenuSeparate}</span>
      <Notify onHover={onHover} />
      <span className="user-menu__separate">{MenuSeparate}</span>
      <Balance onHover={onHover} />
    </>
  )
}

export default UserMenu;
