import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { setAccountMenu, setHeaderNavbarCssClass, setSidebarState } from 'store/actions';
import { ButtonDark } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import PageCloseBtn from 'components/BlocksUI/Buttons/PageCloseBtn';
import SocialAuth from '../modules/SocialAuth';
import { onInputChange } from '../inputs';

const LogIn = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.deviceType);

  useEffect(() => {
    dispatch(setHeaderNavbarCssClass('header__navbar header__navbar_auth'));
    return () => {
      dispatch(setHeaderNavbarCssClass('header__navbar'));
    }
  });

  const success = () => {
    dispatch(setAccountMenu(true));
    if (isMobile) dispatch(setSidebarState(true));
  };

  return (
    <section className="auth-content">
      <PageCloseBtn cssClass={'auth__close-btn'} path={'/'} />
      <h2>log in</h2>
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
        <ButtonDark
          func={success}>
          <Link to="/" className="link-to">Log in</Link>
        </ButtonDark>
      </div>
      <Link to="/sign-up" className="auth-content__btn-switcher">Sign up</Link>
    </section>
  );
};

export default LogIn;