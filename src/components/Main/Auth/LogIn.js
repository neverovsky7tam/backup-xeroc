import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMainContent, setAccountMenu, setHeaderCssClass } from '../../../store/actions';
import AuthCloseBtn from './AuthCloseBtn';
import SocialAuth from './SocialAuth';
import { onInputChange } from './inputs';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';

const LogIn = () => {
  const dispatch = useDispatch();
  const boxDecor = React.createRef();

  useEffect(() => {
    dispatch(setHeaderCssClass('header_navbar-short header-navbar-padding-bottom-140'));
    return () => {
      dispatch(setHeaderCssClass('header_navbar-full'));
    }
  });

  const onLogIn = () => {
    dispatch(setAccountMenu(true));
    dispatch(setMainContent('home'));
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
      <button
        className="auth-content__btn cursor-pointer p-relative"
        onClick={onLogIn}
        onMouseEnter={() => hideDecor(boxDecor, 'none')}
        onMouseLeave={() => hideDecor(boxDecor, '')}>
        Log in
        <BoxDecor ref={boxDecor} />
      </button>
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