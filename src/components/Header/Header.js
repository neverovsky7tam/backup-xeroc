import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItems from '../MainMenu/MenuItems';
import OverlayMenu from '../MainMenu/OverlayMenu';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu/UserMenu';
import Cart from '../Cart/Cart';
import { setMainContent } from '../../store/actions';
import { ReactComponent as LogoIcon } from '../../assets/img/Header/corex-logo.svg';
import { ReactComponent as BurgerBtn } from '../../assets/img/Header/burger-btn.svg';
import { ReactComponent as ControlsMob } from '../../assets/img/Header/controls-mob.svg';

const Header = () => {
  const [overlayMenu, setOverlayMenu] = useState(false);
  const isLogin = useSelector((state) => state.accountMenu);
  const headerClassName = useSelector((state) => state.headerCssClass);
  
  const dispatch = useDispatch();

  const burgerClick = (e) => {
    e.preventDefault();
    setOverlayMenu(true);
  };

  return (
    <header className="header">
      <div 
        className={headerClassName}>
        <nav className="controls-mob">
          <a href="#">
            <ControlsMob />
          </a>
        </nav>
        <div className="logo-wrapper d-flex align-items-center">
          <LogoIcon 
            className="logo"
            onClick={() => dispatch(setMainContent('home'))} />
          <LangSwitcher />
        </div>
        <div className="main-menu d-flex align-items-center">
          <div className="responsive-1919">
            <MenuItems />
          </div>
          <nav className="burger-btn">
            <a href="#" onClick={burgerClick} >
              <BurgerBtn />
            </a>
          </nav>
        </div>
        <div className="account-menu d-flex align-items-center">
          <div className="account-menu__btn-group d-flex align-items-center">
            {isLogin ? <UserMenu /> : <GuestMenu />}
          </div>
          <div className="cart d-flex align-items-center">
            <Cart isLogin={isLogin} />
          </div>
        </div>
      </div>
      {overlayMenu && <OverlayMenu setOverlayMenu={setOverlayMenu} />}
    </header>
  );
};

export default Header;