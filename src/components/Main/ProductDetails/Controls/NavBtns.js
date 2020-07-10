import React from 'react';
import { ReactComponent as Arrow } from '../../../../assets/img/toggle-arrow.svg';

const NavBtns = ({ func }) => {
  return (
    <nav>
      <button onClick={() => func(false)}>
        <Arrow className="toggle-arrow arrow-left" />
        <span>prv</span>
      </button>
      <span>&nbsp;/&nbsp;</span>
      <button onClick={() => func(true)}>
        <span>nxt</span>
        <Arrow className="toggle-arrow arrow-right" />
      </button>
    </nav>
  );
};

export default NavBtns;