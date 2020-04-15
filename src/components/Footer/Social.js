import React from 'react';
import { hideDecor } from '../Parts/BoxDecor';
import { BoxDecor } from '../Parts/BoxDecor';
import { ReactComponent as FacebookIcon } from '../../assets/img/Social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/img/Social/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/img/Social/youtube.svg';
import { ReactComponent as RedditIcon } from '../../assets/img/Social/reddit.svg';

const Social = () => {
  const decorFacebook = React.createRef();
  const decorTwitter = React.createRef();
  const decorYoutube = React.createRef();
  const decorReddit = React.createRef();

  return (
    <div className="social d-flex">
      <a className="social__link" href="https://www.facebook.com/"
        onMouseEnter={() => hideDecor(decorFacebook, 'none')}
        onMouseLeave={() => hideDecor(decorFacebook, '')}>
        <FacebookIcon style={{ width: '8.11px', height: '15px' }} />
        <BoxDecor ref={decorFacebook} />
      </a>
      <a className="social__link" href="https://twitter.com/"
        onMouseEnter={() => hideDecor(decorTwitter, 'none')}
        onMouseLeave={() => hideDecor(decorTwitter, '')}>
        <TwitterIcon style={{ width: '16px', height: '13px' }} />
        <BoxDecor ref={decorTwitter} />
      </a>
      <a className="social__link" href="https://www.youtube.com/"
        onMouseEnter={() => hideDecor(decorYoutube, 'none')}
        onMouseLeave={() => hideDecor(decorYoutube, '')}>
        <YoutubeIcon />
        <BoxDecor ref={decorYoutube} />
      </a>
      <a className="social__link" href="https://www.reddit.com/"
        onMouseEnter={() => hideDecor(decorReddit, 'none')}
        onMouseLeave={() => hideDecor(decorReddit, '')}>
        <RedditIcon />
        <BoxDecor ref={decorReddit} />
      </a>
    </div>
  )
}

export default Social;