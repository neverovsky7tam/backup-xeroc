import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuItems from '../MainMenu/MenuItems';
import CarouselMenu from '../MainMenu/CarouselMenu';
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
  const headerNavbarClassName = useSelector((state) => state.headerNavbarCssClass);

  // const headerElement = React.createRef();
  const dispatch = useDispatch();

  const burgerClick = (e) => {
    e.preventDefault();
    setOverlayMenu(true);
  };

  // useEffect(() => {
  //   // console.log('headerElement', headerElement.current);
  //   headerElement.current.addEventListener('DOMSubtreeModified', (e) => {
  //     console.log('e', e);
  //   })
  // })

  return (
    <>
      <header className="header">
        <div
          className={headerNavbarClassName}>
          <button className="controls-btn">
            <ControlsMob />
          </button>
          <div className="logo-wrapper d-flex align-items-center">
            <LogoIcon
              className="logo"
              onClick={() => dispatch(setMainContent('home'))} />
            <LangSwitcher />
          </div>
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
          <div className="account-menu d-flex align-items-center">
            <div className="account-menu__btn-group d-flex align-items-center">
              {isLogin ? <UserMenu /> : <GuestMenu />}
            </div>
            <button className="cart d-flex align-items-center">
              <Cart isLogin={isLogin} />
            </button>
          </div>
        </div>
        {overlayMenu && <OverlayMenu setOverlayMenu={setOverlayMenu} />}
      </header>
      <div className="header__title">
        <CarouselMenu />
      </div>
    </>
  );
};

export default Header;
