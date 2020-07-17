import React from 'react';
import { MainBlockMob } from 'components/BlocksUI/MainBlockMob';
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  RedditIcon
} from 'svg/svgSocials';

export const Socials = () => {
  return (
    <>
      <h2>social media</h2>
      <div className="content">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<span className="social-icon__facebook">{FacebookIcon}</span>}
            header={'Facebook'}
            span={'Join us'} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<span className="social-icon__big">{TwitterIcon}</span>}
            header={'Twitter'}
            span={'Join us'} />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<span className="social-icon__big">{YoutubeIcon}</span>}
            header={'YouTube'}
            span={'Join us'} />
        </a>
        <a href="https://www.reddit.com/" target="_blank" rel="noreferrer noopener">
          <MainBlockMob
            icon={<span className="social-icon__big">{RedditIcon}</span>}
            header={'Reddit'}
            span={'Join us'} />
        </a>
      </div>
    </>
  )
}