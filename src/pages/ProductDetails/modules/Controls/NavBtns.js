import React from 'react';
import { Link } from "react-router-dom";
import { ToggleArrow } from 'svg/svg';

const NavBtns = ({ links }) => {
  return (
    <nav>
      <button>
        <Link to={links.prevPath} className="link-to">
          <span className="toggle-arrow arrow-left">{ToggleArrow}</span>
          <span>prv</span>
        </Link>
      </button>
      <span>&nbsp;/&nbsp;</span>
      <button>
        <Link to={links.nextPath} className="link-to">
          <span>nxt</span>
          <span className="toggle-arrow arrow-right">{ToggleArrow}</span>
        </Link>
      </button>
    </nav>
  );
};

export default NavBtns;