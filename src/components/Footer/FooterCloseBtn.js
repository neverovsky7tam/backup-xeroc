import React from 'react';
import { useDispatch } from 'react-redux';
import { mainContent } from '../../store/actions';
import { ReactComponent as CloseCross } from '../../assets/img/close-cross.svg';

const FooterCloseBtn = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="footer__close-btn"
      onClick={() => dispatch(mainContent('sign-up'))}>
      <CloseCross />
    </div>
  )
}

export default FooterCloseBtn;