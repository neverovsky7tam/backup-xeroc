import React from 'react';
import MenuItems from './MenuItems';
import { ReactComponent as BurgerClose } from '../../assets/img/Header/hamburger-close.svg';

const OverlayMenu = ({ setOverlayMenu }) => {
  return (
    <div className="overlay-menu">
      <button
        onClick={() => setOverlayMenu(false)}>
        <BurgerClose />
      </button>
      <MenuItems background={true} setOverlayMenu={setOverlayMenu} />
    </div>
  );
};

export default OverlayMenu;