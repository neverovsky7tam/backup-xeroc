import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarState, setCloseCrossRight } from 'store/actions';
import MenuItems from 'mod/MainMenu/MenuItems';
import OverlayMenu from 'mod/MainMenu/OverlayMenu';
import CartButton from 'mod/Cart/components/CartButton';
import LangSwitcher from 'components/LangSwitcher';
import CloseCrossBtn from 'components/BlocksUI/Buttons/CloseCrossBtn';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu';
import { LogoIcon, BurgerBtn, ControlsMob } from 'svg/svgHeader';

const Header = ({ isMobile }) => {
  const [overlayMenu, setOverlayMenu] = useState(false);
  const dispatch = useDispatch();

  const headerNavbarClassName = useSelector((state) => state.headerNavbarCssClass);
  const isLogin = useSelector((state) => state.accountMenu);
  const closeCrossLeft = useSelector((state) => state.closeCrossLeft);
  const closeCrossRight = useSelector((state) => state.closeCrossRight);

  const burgerClick = (e) => {
    e.preventDefault();
    setOverlayMenu(true);
  };

  const onSidebarClick = () => {
    dispatch(setSidebarState(true));
    if (closeCrossRight) dispatch(setCloseCrossRight(false));
  };

  return (
    <header className="header">
      <div
        className={headerNavbarClassName}>
        {
          (!closeCrossLeft && isMobile) &&
          <button className="controls-btn controls-btn_open">
            <div className="d-flex" onClick={onSidebarClick}>{ControlsMob}</div>
          </button>
        }
        {(closeCrossLeft && isMobile) && <CloseCrossBtn />}
        <div className="logo-wrapper d-flex align-items-center">
          <Link to="/">
            <div className="logo">{LogoIcon}</div>
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
              <a href="#" onClick={burgerClick}>{BurgerBtn}</a>
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
          {(closeCrossRight && isMobile) ?
            <CloseCrossBtn /> :
            (<div className="cart-btn-holder d-flex align-items-center">
              <CartButton isLogin={isLogin} />
            </div>)
          }
        </div>
      </div>
      {overlayMenu && <OverlayMenu setOverlayMenu={setOverlayMenu} />}
    </header>
  );
};

export default Header;
