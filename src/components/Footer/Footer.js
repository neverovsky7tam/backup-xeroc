import React, { useState } from 'react';
import FeedbackPopup from './FeedbackPopup';
import AwardsPopup from './AwardsPopup';
import { Facebook, Twitter, Youtube, Reddit } from '../Socials/Socials';
import { ReactComponent as RatingStar } from '../../assets/img/rating-star.svg';
import { ReactComponent as AchieveGold } from '../../assets/img/achievment_gold.svg';
import { ReactComponent as AchieveSilver } from '../../assets/img/achievment_silver.svg';
import { ReactComponent as AchievePlatinum } from '../../assets/img/achievment_platinum.svg';
import { ReactComponent as AchieveBronze } from '../../assets/img/achievment_bronze.svg';


const Footer = ({ footerState }) => {
  const feedbackPop = React.createRef();
  const awardsPop = React.createRef();

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
    <footer className={footerState}>
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
          <Facebook />
          <Twitter />
          <Youtube />
          <Reddit />
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