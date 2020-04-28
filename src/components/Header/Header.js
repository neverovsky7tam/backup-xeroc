import React from 'react';
import { useSelector } from 'react-redux';
import MenuPoints from '../MainMenu/MenuPoints';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu/UserMenu';
import Cart from '../Cart/Cart';
import { ReactComponent as LogoIcon } from '../../assets/img/Header/corex-logo.svg';

const Header = () => {
  const isLogin = useSelector((state) => state.accountMenu);

  return (
    <header className="header p-relative d-flex justify-content-between">
      <div className="logo-wrapper d-flex align-items-center">
        <LogoIcon />
        <LangSwitcher />
      </div>
      <div className="main-menu d-flex align-items-center">
        <MenuPoints linkStyle={"desctop-menu-points-separator"} />
      </div>
      <div className="account-menu d-flex align-items-center">
        <div className="account-menu__btn-group d-flex align-items-center">
          {isLogin ? <UserMenu /> : <GuestMenu />}
        </div>
        <div className="cart d-flex align-items-center">
          <Cart isLogin={isLogin} />
        </div>
      </div>
    </header>
  )
}

export default Header;