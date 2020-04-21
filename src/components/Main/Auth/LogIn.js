import React from 'react';
import { useDispatch } from 'react-redux';
import { setAccountMenu } from '../../../store/actions';
import SocialAuth from './SocialAuth';
import { onInputChange } from './inputs';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';

const LogIn = () => {
  const dispatch = useDispatch();
  const boxDecor = React.createRef();

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section className="auth-content">
      <h2>log in</h2>
      <SocialAuth />
      <div className="auth-content__or">or</div>
      <form className="auth-content__form">
        <div className="p-relative">
          <input
            type="text"
            placeholder="Enter your login"
            required
            onChange={onInputChange} />
          <BoxDecor />
        </div>
        <div className="p-relative">
          <input
            type="password"
            placeholder="Enter your password"
            required
            onChange={onInputChange} />
          <BoxDecor />
        </div>
        <div className="auth-content__form-tips"><a href="#" onClick={handleClick}>Forgot your password?</a></div>
      </form>
      <button
        className="auth-content__btn cursor-pointer p-relative"
        onClick={() => dispatch(setAccountMenu(true))}
        onMouseEnter={() => hideDecor(boxDecor, 'none')}
        onMouseLeave={() => hideDecor(boxDecor, '')}>
        Log in
        <BoxDecor ref={boxDecor} />
      </button>
    </section>
  )
}

export default LogIn;