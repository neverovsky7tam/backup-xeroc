import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent, setAccountMenu, setHeaderNavbarCssClass } from '../../../store/actions';
import AuthCloseBtn from './AuthCloseBtn';
import { ButtonDark } from '../../BlocksUI/Buttons/Buttons';
import SocialAuth from './SocialAuth';
import { onInputChange } from './inputs';
import { BoxDecor } from '../../Parts/BoxDecor';

const LogIn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderNavbarCssClass('header__navbar header__navbar_auth'));
    return () => {
      dispatch(setHeaderNavbarCssClass('header__navbar'));
    }
  });

  const onLogIn = () => {
    dispatch(setAccountMenu(true));
    dispatch(setMainContent('general'));
  };

  const onSwicher = (e) => {
    e.preventDefault()
    dispatch(setMainContent('sign-up'));
  };

  return (
    <section className="auth-content">
      <AuthCloseBtn />
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
          text={'Log in'}
          func={onLogIn} />
      </div>
      <a
        className="auth-content__btn-switcher"
        href="#"
        onClick={onSwicher}>
        Sign up
      </a>
    </section>
  );
};

export default LogIn;