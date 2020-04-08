import React from 'react';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as FacebookIcon } from '../../../assets/img/Social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/Social/twitter.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/img/Social/google.svg';
import { ReactComponent as TelegramIcon } from '../../../assets/img/Social/telegram.svg';

const SocialAuth = () => {
  const decorFacebook = React.createRef();
  const decorTwitter = React.createRef();
  const decorGoogle = React.createRef();
  const decorTelegram = React.createRef();

  return (
    <div className="auth-content__social-wrapper d-flex justify-content-center">
      <a className="auth-content__social-link" href="#"
        onMouseEnter={() => hideDecor(decorFacebook, 'none')}
        onMouseLeave={() => hideDecor(decorFacebook, '')}>
        <FacebookIcon />
        <BoxDecor ref={decorFacebook} />
      </a>
      <a className="auth-content__social-link" href="#"
        onMouseEnter={() => hideDecor(decorTwitter, 'none')}
        onMouseLeave={() => hideDecor(decorTwitter, '')}>
        <TwitterIcon />
        <BoxDecor ref={decorTwitter} />
      </a>
      <a className="auth-content__social-link" href="#"
        onMouseEnter={() => hideDecor(decorGoogle, 'none')}
        onMouseLeave={() => hideDecor(decorGoogle, '')}>
        <GoogleIcon />
        <BoxDecor ref={decorGoogle} />
      </a>
      <a className="auth-content__social-link" href="#"
        onMouseEnter={() => hideDecor(decorTelegram, 'none')}
        onMouseLeave={() => hideDecor(decorTelegram, '')}>
        <TelegramIcon />
        <BoxDecor ref={decorTelegram} />
      </a>
    </div>
  )
}

export default SocialAuth;