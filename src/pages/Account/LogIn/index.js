import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setAccountMenu, setSidebarState, setPageTopContent, setCloseCrossRight } from 'store/actions';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import SocialAuth from '../modules/SocialAuth';
import { onInputChange } from '../inputs';
import LayoutMain from 'layouts/LayoutMain';
import AccountMenu from 'pages/Account/modules/AccountMenu';

export const useAuthPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTopContent(AccountMenu));
    dispatch(setCloseCrossRight(true));
    return () => dispatch(setCloseCrossRight(false));
  }, []);
};

const LogIn = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.deviceType);

  const success = () => {
    dispatch(setAccountMenu(true));
    if (isMobile) dispatch(setSidebarState(true));
  };

  useAuthPage();

  const content = (
    <div className="auth-content">
      {!isMobile && <h2>log in</h2>}
      <SocialAuth />
      <div className="auth-content__or">or</div>
      <form className="auth-content__form">
        <div className="auth-content__input-wrapper">
          <input
            type="text"
            placeholder="Enter your login"
            data-error="0"
            onChange={(e) => onInputChange(e.target)} />
          <BoxDecor />
        </div>
        <div className="auth-content__input-wrapper">
          <input
            type="password"
            placeholder="Enter your password"
            data-error="0"
            onChange={(e) => onInputChange(e.target)} />
          <BoxDecor />
        </div>
      </form>
      <div className="auth-content__terms">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}>
          Forgot your password?
        </a>
      </div>
      <div className="auth-content__btn">
        <ButtonMain
          func={success}>
          <Link to="/" className="link-to">Log in</Link>
        </ButtonMain>
      </div>
    </div>);

  if (isMobile) return (<LayoutMain>{content}</LayoutMain>);
  else return content;
};

export default LogIn;