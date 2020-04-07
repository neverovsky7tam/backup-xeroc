import React from 'react';
import Account from './Account';
import Notify from './Notify';
import Balance from './Balance';
import { ReactComponent as MenuSeparate } from '../../../assets/img/Header/menu-separate.svg';

const UserMenu = () => {
  const onHover = (element, action) => {
    element.current.style.display = action;
  }

  return (
    <>
      <Account onHover={onHover} />
      <MenuSeparate className="user-menu__separate" />
      <Notify onHover={onHover} />
      <MenuSeparate className="user-menu__separate" />
      <Balance onHover={onHover} />
    </>
  )
}

export default UserMenu;
