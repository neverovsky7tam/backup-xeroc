import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent } from 'store/actions';
import { CloseCross } from 'svg/svg';

const TermsCloseBtn = () => {
  const dispatch = useDispatch();

  const onCloseBtn = () => {
    dispatch(setMainContent('sign-up'));
  };

  return (
    <div
      className="terms__close-btn"
      onClick={onCloseBtn}>
      {CloseCross}
    </div>
  );
};

export default TermsCloseBtn;