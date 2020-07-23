import React from 'react';
import { Link } from "react-router-dom";
import NavBtns from './NavBtns';
import { Close } from 'svg/svgProductDetails';

const Controls = ({ links }) => {
  return (
    <div className="pdp-controls">
      <NavBtns links={links} />
      <button className="pdp-close-btn">
        <Link to="/" className="link-to">
          <span className="pdp-close-btn__txt">close</span>
          {Close}
        </Link>
      </button>
    </div>
  );
};

export default Controls;