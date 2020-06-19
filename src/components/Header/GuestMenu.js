import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent } from '../../store/actions';
import { ReactComponent as PencilIcon } from '../../assets/img/Header/pencil-icon.svg';
import { ReactComponent as LoginIcon } from '../../assets/img/Header/login-icon.svg';

const GuestMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="header__btn"
        onClick={() => dispatch(setMainContent('sign-up'))}>
        <PencilIcon className="pencil-icon" />sign up
      </button>
      <button
        className="header__btn"
        onClick={() => dispatch(setMainContent('log-in'))}
        style={{ marginRight: '90px' }}>
        <LoginIcon className="login-icon" />log in
      </button>
    </>
  )
}

export default GuestMenu;
