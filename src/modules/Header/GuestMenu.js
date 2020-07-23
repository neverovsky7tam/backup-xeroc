import React from 'react';
import { Link } from "react-router-dom";
import { PencilIcon, LoginIcon } from 'svg/svgHeader';

const GuestMenu = () => {
  return (
    <>
      <button className="header__btn">
        <Link to="/sign-up" className="vertical-center">
          <div className="pencil-icon vertical-center">{PencilIcon}</div>
          <span>sign up</span>
        </Link>
      </button>
      <button
        className="header__btn"
        style={{ marginRight: '90px' }}>
        <Link to="/log-in" className="vertical-center">
          <div className="login-icon vertical-center">{LoginIcon}</div>
          <span>log in</span>
        </Link>
      </button>
    </>
  )
}

export default GuestMenu;
