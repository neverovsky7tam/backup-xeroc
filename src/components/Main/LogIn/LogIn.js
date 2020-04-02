import React from 'react';
import { BoxDecorThick } from '../../Parts/BoxDecor';
import { ReactComponent as FacebookIcon } from '../../../assets/img/Social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/Social/twitter.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/img/Social/google.svg';

const LogIn = ({ setLogin }) => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section className="auth-content">
      <h2>log in</h2>
      <div className="auth-content__social-wrapper d-flex justify-content-center">
        <div className="auth-content__social-box">
          <FacebookIcon />
          <BoxDecorThick />
        </div>
        <div className="auth-content__social-box">
          <TwitterIcon />
          <BoxDecorThick />
        </div>
        <div className="auth-content__social-box">
          <GoogleIcon />
          <BoxDecorThick />
        </div>
      </div>
      <div className="auth-content__or">or</div>
      <form className="auth-content__form">
        <div className="p-relative">
          <input type="text" placeholder="Enter your login" required />
          <BoxDecorThick />
        </div>
        <div className="p-relative">
          <input type="password" placeholder="Enter your password" required />
          <BoxDecorThick />
        </div>
        <div className="auth-content__forgot-pass"><a href="#" onClick={handleClick}>Forgot your password?</a></div>
      </form>
      <button className="auth-content__btn" onClick={() => setLogin(true)}>Log in</button>
    </section>
  )
}

export default LogIn;