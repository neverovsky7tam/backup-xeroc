import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent } from '../../../store/actions';
import { ReactComponent as CloseCross } from '../../../assets/img/close-cross.svg';

const AuthCloseBtn = () => {
  const dispatch = useDispatch();

  const onCloseBtn = () => {
    dispatch(setMainContent('general'));
  };

  return (
    <div
      className="auth__close-btn"
      onClick={onCloseBtn}>
      <CloseCross />
    </div>
  );
};

export default AuthCloseBtn;