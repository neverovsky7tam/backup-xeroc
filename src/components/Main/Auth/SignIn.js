import React from 'react';
import { useDispatch } from 'react-redux';
import { setAccountMenu } from '../../../store/actions';
import { mainContent } from '../../../store/actions';
import SocialAuth from './SocialAuth';
import { onInputChange } from '../../../utils/inputs';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as InfoIcon } from '../../../assets/img/info.svg';

const SignUp = () => {
  const dispatch = useDispatch();
  const boxDecor = React.createRef();

  return (
    <section className="auth-content">
      <h2>sign up</h2>
      <SocialAuth />
      <div className="auth-content__or">or</div>
      <form className="auth-content__form">
        <div className="p-relative">
          <input type="text" placeholder="Enter your first name" required onChange={onInputChange} />
          <InfoIcon className="info-icon" />
          <BoxDecor />
        </div>
        <div className="p-relative">
          <input type="text" placeholder="Enter your last name" required onChange={onInputChange} />
          <InfoIcon className="info-icon" />
          <BoxDecor />
        </div>
        <div className="p-relative">
          <input type="password" placeholder="Enter your password" required onChange={onInputChange} />
          <InfoIcon className="info-icon" />
          <BoxDecor />
        </div>
        <div className="p-relative">
          <input type="password" placeholder="Confirm password" onChange={onInputChange} />
          <BoxDecor />
        </div>
        <div className="p-relative">
          <input type="email" placeholder="Enter your e-mail" onChange={onInputChange} />
          <BoxDecor />
        </div>
        <div className="auth-content__form-tips">
          By signing up, you agree to our <a
            href="#"
            style={{ textDecoration: 'underline' }}
            onClick={() => dispatch(mainContent('terms'))}>
            Terms and Conditions</a>
        </div>
      </form>
      <button
        className="auth-content__btn cursor-pointer p-relative"
        onClick={() => dispatch(setAccountMenu(true))}
        onMouseEnter={() => hideDecor(boxDecor, 'none')}
        onMouseLeave={() => hideDecor(boxDecor, '')}>
        Sign up
        <BoxDecor ref={boxDecor} />
      </button>
    </section>
  )
}

export default SignUp;