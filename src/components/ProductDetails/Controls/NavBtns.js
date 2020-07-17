import React from 'react';
import { ToggleArrow } from 'svg/svg';

const NavBtns = ({ func }) => {
  return (
    <nav>
      <button onClick={() => func(false)}>
        <span className="toggle-arrow arrow-left">{ToggleArrow}</span>
        <span>prv</span>
      </button>
      <span>&nbsp;/&nbsp;</span>
      <button onClick={() => func(true)}>
        <span>nxt</span>
        <span className="toggle-arrow arrow-right">{ToggleArrow}</span>
      </button>
    </nav>
  );
};

export default NavBtns;