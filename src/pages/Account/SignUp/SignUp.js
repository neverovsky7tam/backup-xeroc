import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAccountMenu } from 'store/actions';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { onInputChange, checkInputValue, checkInputCorrect } from '../inputs';
import LayoutMain from 'layouts/LayoutMain';
import { useAuthPage } from '../LogIn/';

const SignUp = ({ setConfirm }) => {
  const dispatch = useDispatch();
  const nameError = React.createRef();
  const lastnameError = React.createRef();
  const emailError = React.createRef();
  const passwordError = React.createRef();
  const passwordConfirmError = React.createRef();
  const passwordField = React.createRef();
  const form = React.createRef();

  const isMobile = useSelector((state) => state.deviceType);

  const checkInput = (e, errorElem, password) => {
    const input = e.target;
    const errorElement = errorElem.current;
    if (e.type === 'change') onInputChange(input, errorElement, password);
    if (e.type === 'blur') checkInputValue(input, errorElement, password);

    if (+e.target.dataset.password) {
      const valLength = e.target.value.length;
      e.target.value = new Array(valLength).fill('*').join('');
    }
  };

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
      };
    };
    if (nextStep) {
      dispatch(setAccountMenu(true));
      setConfirm(true);
    };
  };

  useAuthPage();

  const content = (
    <div className="auth-content">
      {!isMobile && <h2>sign up</h2>}
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
            data-password="1"
            ref={passwordField}
            type="text"
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
            data-password="1"
            type="text"
            placeholder="Confirm password"
            onChange={(e) => checkInput(e, passwordConfirmError, passwordField.current)}
            onBlur={(e) => checkInput(e, passwordConfirmError, passwordField.current)} />
          <div className="password-confirm-error" ref={passwordConfirmError}>Passwords are different</div>
          <BoxDecor />
        </div>
      </form>
      <div className="auth-content__terms">
        By signing up, you agree to our&nbsp;
        <Link
          to="/terms"
          className="terms-link">
          Terms and Conditions
        </Link>
      </div>
      <div className="auth-content__btn">
        <ButtonMain
          text={'Sign up'}
          func={globalCheck} />
      </div>
    </div>
  )

  if (isMobile) return (<LayoutMain>{content}</LayoutMain>);
  else return content;
};

export default SignUp;