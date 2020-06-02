import React from 'react';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ReactComponent as FacebookIcon } from '../../../assets/img/Social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/img/Social/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/img/Social/youtube.svg';
import { ReactComponent as RedditIcon } from '../../../assets/img/Social/reddit.svg';

export const Socials = () => {
  return (
    <>
      <h2>social media</h2>
      <div className="content">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<FacebookIcon className="social-icon__facebook" />}
            header={'Facebook'}
            span={'Join us'} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<TwitterIcon className="social-icon__big" />}
            header={'Twitter'}
            span={'Join us'} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<YoutubeIcon className="social-icon__big" />}
            header={'YouTube'}
            span={'Join us'} />
        </a>
        <a href="https://www.reddit.com/" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<RedditIcon className="social-icon__big" />}
            header={'Reddit'}
            span={'Join us'} />
        </a>
      </div>
    </>
  )
}