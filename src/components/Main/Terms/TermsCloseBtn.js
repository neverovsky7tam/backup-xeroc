import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent } from '../../../store/actions';
import { ReactComponent as CloseCross } from '../../../assets/img/close-cross.svg';

const TermsCloseBtn = () => {
  const dispatch = useDispatch();

  const onCloseBtn = () => {
    dispatch(setMainContent('sign-up'));
  };

  return (
    <div
      className="terms__close-btn"
      onClick={onCloseBtn}>
      <CloseCross />
    </div>
  );
};

export default TermsCloseBtn;