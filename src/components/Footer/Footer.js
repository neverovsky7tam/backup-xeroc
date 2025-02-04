import React, { useState } from 'react';
import FeedbackPopup from './FeedbackPopup';
import AwardsPopup from './AwardsPopup';
import { hideDecor } from '../Parts/BoxDecor';
import { BoxDecor } from '../Parts/BoxDecor';
import { ReactComponent as RatingStar } from '../../assets/img/rating-star.svg';
import { ReactComponent as FacebookIcon } from '../../assets/img/Social/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/img/Social/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/img/Social/youtube.svg';
import { ReactComponent as RedditIcon } from '../../assets/img/Social/reddit.svg';
import { ReactComponent as AchieveGold } from '../../assets/img/achievment_gold.svg';
import { ReactComponent as AchieveSilver } from '../../assets/img/achievment_silver.svg';
import { ReactComponent as AchievePlatinum } from '../../assets/img/achievment_platinum.svg';
import { ReactComponent as AchieveBronze } from '../../assets/img/achievment_bronze.svg';

const Footer = () => {
  const feedbackPop = React.createRef();
  const awardsPop = React.createRef();
  const decorFacebook = React.createRef();
  const decorTwitter = React.createRef();
  const decorYoutube = React.createRef();
  const decorReddit = React.createRef();

  const onHover = (element, action) => {
    element.current.style.display = action;
  }

  const [awardsIcon, setAwardsIcon] = useState(null);
  const [diamodRight, setDiamodRight] = useState(null);

  const onHoverAwards = (awardsPop, action, right, icon) => {
    awardsPop.current.style.display = action;
    setAwardsIcon(icon);
    setDiamodRight(right);
  }

  return (
    <footer className="footer d-flex">
      <div className="footer-inner p-relative d-flex justify-content-between">
        <div
          className="feedback p-relative d-flex"
          onMouseEnter={() => onHover(feedbackPop, 'block')}>
          <span className="feedback__rate">4.9</span>
          <div className="feedback__message">
            <p>Great service and prices!</p>
            <div className="feedback__message-rating d-flex align-items-center">
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <span className="feedback__author">David Smith</span>
            </div>
          </div>
          <FeedbackPopup
            ref={feedbackPop}
            hidePop={onHover} />
        </div>
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
        <div className="awards p-relative d-flex align-items-center">
          <div className="awards__point">
            <AchieveGold />
            <div
              className="awards__point-layer"
              onMouseEnter={() => onHoverAwards(awardsPop, 'block', '87%', <AchieveGold style={{ width: '105px', height: '75px' }} />)}>
            </div>
          </div>
          <div className="awards__point">
            <AchieveSilver />
            <div
              className="awards__point-layer"
              onMouseEnter={() => onHoverAwards(awardsPop, 'block', '60%', <AchieveSilver style={{ width: '105px', height: '75px' }} />)}>
            </div>
          </div>
          <div className="awards__point">
            <AchievePlatinum />
            <div
              className="awards__point-layer"
              onMouseEnter={() => onHoverAwards(awardsPop, 'block', '33%', <AchievePlatinum style={{ width: '105px', height: '75px' }} />)}>
            </div>
          </div>
          <div className="awards__point">
            <AchieveBronze />
            <div
              className="awards__point-layer"
              onMouseEnter={() => onHoverAwards(awardsPop, 'block', '6%', <AchieveBronze style={{ width: '105px', height: '75px' }} />)}>
            </div>
          </div>
          <AwardsPopup
            ref={awardsPop}
            diamondRight={{ right: diamodRight }}
            icon={awardsIcon}
            onHover={onHoverAwards} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;