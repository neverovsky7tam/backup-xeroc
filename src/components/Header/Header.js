import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import MenuItems from 'components/MainMenu/MenuItems';
import OverlayMenu from 'components/MainMenu/OverlayMenu';
import SideBar from 'components/SideBar/SideBar';
import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu/UserMenu';
import Cart from 'components/Cart/Cart';
import CloseCrossBtn from 'components/BlocksUI/Buttons/CloseCrossBtn';
import { setMainContent, setGeneralBlockContent, setSidebarState } from 'store/actions';
import { LogoIcon, BurgerBtn, ControlsMob } from 'svg/svgHeader';

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
            <span onClick={() => dispatch(setSidebarState(true))}>{ControlsMob}</span>
          </button>
        }
        {(closeCrossState && isMobile) && <CloseCrossBtn isSidebar={isSidebar} />}
        <div className="logo-wrapper d-flex align-items-center">
          <Link to="/">
            <span className="logo">{LogoIcon}</span>
          </Link>
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
                {BurgerBtn}
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
