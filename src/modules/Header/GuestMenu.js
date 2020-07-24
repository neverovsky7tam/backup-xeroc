import React from 'react';
import { Link } from "react-router-dom";

const GuestMenu = () => {
  return (
    <>
      <button className="header__btn">
        <Link to="/sign-up" className="vertical-center">
          <span>sign up</span>
        </Link>
      </button>
      <button
        className="header__btn"
        style={{ marginRight: '90px' }}>
        <Link to="/log-in" className="vertical-center">
          <span>log in</span>
        </Link>
      </button>
    </>
  )
}

export default GuestMenu;
