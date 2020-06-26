import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItems from '../MainMenu/MenuItems';
import OverlayMenu from '../MainMenu/OverlayMenu';
import SideBar from '../SideBar/SideBar';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu/UserMenu';
import Cart from '../Cart/Cart';
import CloseCross from '../BlocksUI/Buttons/CloseCross';
import { setMainContent, setGeneralBlockContent, setSidebarState } from '../../store/actions';
import { ReactComponent as LogoIcon } from '../../assets/img/Header/corex-logo.svg';
import { ReactComponent as BurgerBtn } from '../../assets/img/Header/burger-btn.svg';
import { ReactComponent as ControlsMob } from '../../assets/img/Header/controls-mob.svg';

const Header = ({ isMobile }) => {
  const [overlayMenu, setOverlayMenu] = useState(false);
  const dispatch = useDispatch();

  const headerNavbarClassName = useSelector((state) => state.headerNavbarCssClass);
  const isLogin = useSelector((state) => state.accountMenu);
  const isSidebar = useSelector((state) => state.sidebarState);
  const closeCrossState = useSelector((state) => state.closeCrossState);

  const burgerClick = (e) => {
    e.preventDefault();
    setOverlayMenu(true);
  };

  return (
    <header className="header">
      <div
        className={headerNavbarClassName}>
        {
          (!closeCrossState && isMobile) &&
          <button className="controls-btn controls-btn_open">
            <ControlsMob onClick={() => dispatch(setSidebarState(true))} />
          </button>
        }
        {(closeCrossState && isMobile) && <CloseCross isSidebar={isSidebar} />}
        <div className="logo-wrapper d-flex align-items-center">
          <LogoIcon
            className="logo"
            onClick={() => {
              dispatch(setMainContent('general'));
              dispatch(setGeneralBlockContent('home'));
            }} />
          <LangSwitcher />
        </div>
        {
          !isMobile &&
          <div className="main-menu d-flex align-items-center">
            <div className="responsive-1919">
              <MenuItems isSeparator={true} />
            </div>
            <nav className="burger-btn">
              <a href="#" onClick={burgerClick} >
                <BurgerBtn />
              </a>
            </nav>
          </div>
        }
        <div className="account-menu d-flex align-items-center">
          {
            !isMobile &&
            <div className="account-menu__btn-group d-flex align-items-center">
              {isLogin ? <UserMenu /> : <GuestMenu />}
            </div>
          }
          <div className="cart d-flex align-items-center">
            <Cart isLogin={isLogin} />
          </div>
        </div>
      </div>
      {overlayMenu && <OverlayMenu setOverlayMenu={setOverlayMenu} />}
      {isSidebar && <SideBar />}
    </header>
  );
};

export default Header;
