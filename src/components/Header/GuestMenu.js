import React from 'react';
import { ReactComponent as PencilIcon } from '../../assets/img/Header/pencil-icon.svg';
import { ReactComponent as LoginIcon } from '../../assets/img/Header/login-icon.svg';

const GuestMenu = ({ setMainContent }) => {
  return (
    <>
      <button onClick={() => setMainContent('signin')}>
        <PencilIcon className="pencil-icon" />sign up
      </button>
      <button onClick={() => setMainContent('login')} style={{marginRight: '90px'}}>
        <LoginIcon className="login-icon" />log in
      </button>
    </>
  )
}

export default GuestMenu;
