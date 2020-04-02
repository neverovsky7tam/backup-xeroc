import React from 'react';
import MenuPoints from '../MainMenu/MenuPoints';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu';
import Cart from '../Cart/Cart';
import { ReactComponent as LogoIcon } from '../../assets/img/Header/corex-logo.svg';

const Header = ({ setMainContent, isLogin }) => {
  return (
    <header className="header d-flex justify-content-between">
      <div className="logo-wrapper d-flex align-items-center">
        <LogoIcon />
        <LangSwitcher />
      </div>
      <div className="main-menu d-flex align-items-center">
        <MenuPoints linkStyle={"points-separate-expand-menu"} />
      </div>
      <div className="account-menu d-flex align-items-center">
        <div className="account-menu__btn-group d-flex align-items-center">
          {isLogin ? <UserMenu /> : <GuestMenu setMainContent={setMainContent} />}
        </div>
        <div className="cart d-flex align-items-center">
          <Cart isLogin={isLogin} />
        </div>
      </div>
    </header>
  )
}

export default Header;