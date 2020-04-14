import React from 'react';
import { useDispatch } from 'react-redux';
import { mainContent } from '../../store/actions';

import { ReactComponent as PencilIcon } from '../../assets/img/Header/pencil-icon.svg';
import { ReactComponent as LoginIcon } from '../../assets/img/Header/login-icon.svg';

const GuestMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(mainContent('sign-up'))}>
        <PencilIcon className="pencil-icon" />sign up
      </button>
      <button
        onClick={() => dispatch(mainContent('log-in'))}
        style={{ marginRight: '90px' }}>
        <LoginIcon className="login-icon" />log in
      </button>
    </>
  )
}

export default GuestMenu;
