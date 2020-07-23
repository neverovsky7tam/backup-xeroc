import React from 'react';
import { hideDecor } from 'components/Parts/BoxDecor';
import { BoxDecor } from 'components/Parts/BoxDecor';
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  RedditIcon
} from 'svg/svgSocials';

export const Facebook = () => {
  const decorFacebook = React.createRef();
  return (
    <a className="social__link" href="https://www.facebook.com/"
      onMouseEnter={() => hideDecor(decorFacebook, 'none')}
      onMouseLeave={() => hideDecor(decorFacebook, '')}>
      <div className="d-flex" style={{ width: '8.11px', height: '15px' }}>{FacebookIcon}</div>
      <BoxDecor ref={decorFacebook} />
    </a>
  );
};

export const Twitter = () => {
  const decorTwitter = React.createRef();
  return (
    <a className="social__link" href="https://twitter.com/"
      onMouseEnter={() => hideDecor(decorTwitter, 'none')}
      onMouseLeave={() => hideDecor(decorTwitter, '')}>
      <div className="d-flex" style={{ width: '16px', height: '13px' }}>{TwitterIcon}</div>
      <BoxDecor ref={decorTwitter} />
    </a>
  );
};

export const Youtube = () => {
  const decorYoutube = React.createRef();
  return (
    <a className="social__link" href="https://www.youtube.com/"
      onMouseEnter={() => hideDecor(decorYoutube, 'none')}
      onMouseLeave={() => hideDecor(decorYoutube, '')}>
      {YoutubeIcon}
      <BoxDecor ref={decorYoutube} />
    </a>
  );
};

export const Reddit = () => {
  const decorReddit = React.createRef();
  return (
    <a className="social__link" href="https://www.reddit.com/"
      onMouseEnter={() => hideDecor(decorReddit, 'none')}
      onMouseLeave={() => hideDecor(decorReddit, '')}>
      {RedditIcon}
      <BoxDecor ref={decorReddit} />
    </a>
  );
};
