import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent } from 'store/actions';
import { PencilIcon, LoginIcon } from 'svg/svgHeader';

const GuestMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="header__btn"
        onClick={() => dispatch(setMainContent('sign-up'))}>
        <span className="pencil-icon">{PencilIcon}</span>
        sign up
      </button>
      <button
        className="header__btn"
        onClick={() => dispatch(setMainContent('log-in'))}
        style={{ marginRight: '90px' }}>
        <span className="login-icon">{LoginIcon}</span>
        log in
      </button>
    </>
  )
}

export default GuestMenu;
