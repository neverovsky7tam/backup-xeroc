import React from 'react';
import { BoxDecorThick } from '../../Parts/BoxDecor';
import { ReactComponent as FacebookIcon } from '../../../assets/img/Social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/Social/twitter.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/img/Social/google.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/img/Social/telegram.svg';
import { ReactComponent as InfoIcon } from '../../../assets/img/info.svg';

const SignUp = ({ setLogin }) => {
  return (
    <section className="auth-content">
      <h2>sign up</h2>
      <div className="auth-content__social-wrapper d-flex justify-content-center">
        <a className="auth-content__social-link" href="#">
          <FacebookIcon />
          <BoxDecorThick />
        </a>
        <a className="auth-content__social-link" href="#">
          <TwitterIcon />
          <BoxDecorThick />
        </a>
        <a className="auth-content__social-link" href="#">
          <GoogleIcon />
          <BoxDecorThick />
        </a>
        <a className="auth-content__social-link" href="#">
          <TelegramIcon />
          <BoxDecorThick />
        </a>
      </div>
      <div className="auth-content__or">or</div>
      <form className="auth-content__form">
        <div className="p-relative">
          <input type="text" placeholder="Enter your first name" required />
          <InfoIcon className="info-icon" />
          <BoxDecorThick />
        </div>
        <div className="p-relative">
          <input type="text" placeholder="Enter your last name" required />
          <InfoIcon className="info-icon" />
          <BoxDecorThick />
        </div>
        <div className="p-relative">
          <input type="password" placeholder="Enter your password" required />
          <InfoIcon className="info-icon" />
          <BoxDecorThick />
        </div>
        <div className="p-relative">
          <input type="password" placeholder="Confirm password" />
          <BoxDecorThick />
        </div>
        <div className="p-relative">
          <input type="email" placeholder="Enter your e-mail" />
          <BoxDecorThick />
        </div>
      </form>
      <button className="auth-content__btn cursor-pointer" onClick={() => setLogin(true)}>Sign up</button>
    </section>
  )
}

export default SignUp;