import React from 'react';
import MenuItems from './';
import { CloseCross } from 'svg/svgHeader';

const OverlayMenu = ({ setOverlayMenu }) => {
  return (
    <div className="overlay-menu">
      <button
        onClick={() => setOverlayMenu(false)}>
        {CloseCross}
      </button>
      <MenuItems isOverlayMenu={true} setOverlayMenu={setOverlayMenu} isSeparator={true} />
    </div>
  );
};

export default OverlayMenu;