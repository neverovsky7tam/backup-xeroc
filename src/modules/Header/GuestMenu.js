import React from 'react';
import { Link } from "react-router-dom";
import { PencilIcon, LoginIcon } from 'svg/svgHeader';

const GuestMenu = () => {
  return (
    <>
      <button className="header__btn">
        <span className="pencil-icon">{PencilIcon}</span>
        <Link to="/sign-up">sign up</Link>
      </button>
      <button
        className="header__btn"
        style={{ marginRight: '90px' }}>
        <span className="login-icon">{LoginIcon}</span>
        <Link to="/log-in">log in</Link>
      </button>
    </>
  )
}

export default GuestMenu;
