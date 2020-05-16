import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccountMenu, setMainContent, setTermsCloseBtn, setHeaderCssClass } from '../../../store/actions';
import AuthCloseBtn from './AuthCloseBtn';
import SocialAuth from './SocialAuth';
import { onInputChange, checkInputValue, checkInputCorrect } from './inputs';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';

const SignUp = () => {
  const dispatch = useDispatch();
  const boxDecor = React.createRef();
  const nameError = React.createRef();
  const lastnameError = React.createRef();
  const emailError = React.createRef();
  const passwordError = React.createRef();
  const passwordConfirmError = React.createRef();
  const passwordField = React.createRef();
  const form = React.createRef();

  useEffect(() => {
    dispatch(setHeaderCssClass('header_navbar-short header-navbar-padding-bottom-90'));
    return () => {
      dispatch(setHeaderCssClass('header_navbar-full'));
    }
  });

  const onSwicher = (e) => {
    e.preventDefault()
    dispatch(setMainContent('log-in'));
  };

  const checkInput = (e, errorElem, password) => {
    const input = e.target;
    const errorElement = errorElem.current;
    if (e.type === 'change') onInputChange(input, errorElement, password);
    if (e.type === 'blur') checkInputValue(input, errorElement, password);
  }

  const globalCheck = () => {
    let nextStep = true;
    let passwordField = null;

    const formChildren = Object.values(form.current.children);

    for (let key in formChildren) {
      if (formChildren[key].childNodes[0].tagName === 'INPUT') {
        const input = formChildren[key].childNodes[0];
        const errorElement = formChildren[key].childNodes[1];

        if (input.dataset.type === 'pass') passwordField = input;
        checkInputCorrect(input, errorElement, passwordField);

        if (!+input.dataset.check) nextStep = false;
      }
    }
    if (nextStep) {
      dispatch(setAccountMenu(true));
      dispatch(setMainContent('home'));
    };
  };

  const onTermsClick = () => {
    dispatch(setMainContent('terms'));
    dispatch(setTermsCloseBtn(true));
  };

  return (
    <section className="auth-content">
      <AuthCloseBtn />
      <h2>sign up</h2>
      <SocialAuth />
      <div className="auth-content__or">or</div>
      <form className="auth-content__form" ref={form}>
        <div className="auth-content__input-wrapper">
          <input
            data-type="name"
            data-check="0"
            data-error="0"
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => checkInput(e, nameError)}
            onBlur={(e) => checkInput(e, nameError)} />
          <div className="field-error" ref={nameError}>This field is required</div>
          <BoxDecor />
        </div>
        <div className="auth-content__input-wrapper">
          <input
            data-type="name"
            data-check="0"
            data-error="0"
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => checkInput(e, lastnameError)}
            onBlur={(e) => checkInput(e, lastnameError)} />
          <div className="field-error" ref={lastnameError}>This field is required</div>
          <BoxDecor />
        </div>
        <div className="auth-content__input-wrapper">
          <input
            className="email"
            data-type="email"
            data-check="0"
            data-error="0"
            type="email"
            placeholder="Enter your e-mail"
            onChange={(e) => checkInput(e, emailError)}
            onBlur={(e) => checkInput(e, emailError)} />
          <div className="email-error" ref={emailError}>Wrong! Entereted e-mail address is invalid</div>
          <BoxDecor />
        </div>
        <div className="auth-content__input-wrapper">
          <input
            className="password"
            data-type="pass"
            data-check="0"
            data-error="0"
            ref={passwordField}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => checkInput(e, passwordError)}
            onBlur={(e) => checkInput(e, passwordError)} />
          <div className="password-error" ref={passwordError}>Your password is not secure enough</div>
          <BoxDecor />
        </div>
        <div className="auth-content__input-wrapper">
          <input
            className="password-confirm"
            data-type="confirm"
            data-check="0"
            data-error="0"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => checkInput(e, passwordConfirmError, passwordField.current)}
            onBlur={(e) => checkInput(e, passwordConfirmError, passwordField.current)} />
          <div className="password-confirm-error" ref={passwordConfirmError}>Passwords are different</div>
          <BoxDecor />
        </div>
      </form>
      <div className="auth-content__terms">
        By signing up, you agree to our&nbsp;
          <a
          href="#"
          className="terms-link"
          onClick={onTermsClick}>
          Terms and Conditions
          </a>
      </div>
      <button
        className="auth-content__btn cursor-pointer p-relative"
        onClick={globalCheck}
        onMouseEnter={() => hideDecor(boxDecor, 'none')}
        onMouseLeave={() => hideDecor(boxDecor, '')}>
        Sign up
        <BoxDecor ref={boxDecor} />
      </button>
      <a
        className="auth-content__btn-switcher"
        href="#"
        onClick={onSwicher}>
        Log in
      </a>
    </section>
  );
};

export default SignUp;