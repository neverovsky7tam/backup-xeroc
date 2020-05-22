import React from 'react';
import MenuItems from './MenuItems';
import { ReactComponent as CloseCross } from '../../assets/img/Header/close-cross.svg';

const OverlayMenu = ({ setOverlayMenu }) => {
  return (
    <div className="overlay-menu">
      <button
        onClick={() => setOverlayMenu(false)}>
        <CloseCross />
      </button>
      <MenuItems isOverlayMenu={true} setOverlayMenu={setOverlayMenu} isSeparator={true} />
    </div>
  );
};

export default OverlayMenu;