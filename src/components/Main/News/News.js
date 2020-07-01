import React from 'react';
import { useSelector } from 'react-redux';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as BannerLogo } from '../../../assets/img/Banners/logo-banner-1.svg';
import { ReactComponent as Illustration } from '../../../assets/img/Banners/illustration.svg';

const News = () => {
  const contentVar = useSelector((state) => state.generalBlockContent.current);

  let cssClass = 'news';
  if (contentVar === 'productDetails') cssClass = 'news news_pdp'

  return (
    <section className={cssClass}>
      <div className="main-header">
        <h2>news</h2>
      </div>
      <div className="news__body main-body">
        <div className="scroll-container">
          <div className="banner-wrapper">
            <div className="banner">
              <div className="banner__logo-buffer"></div>
              <div className="banner__logo"><BannerLogo /></div>
              <div className="banner__title-buffer"></div>
              <h2>THE STANDARD FOR CRYPTO CONSULTING</h2>
              <div className="banner__benefits-buffer"></div>
              <ul>
                <li>Mining Operations</li>
                <li>ICO (Initial Coin Offering)</li>
                <li>New Business Investment</li>
                <li>Blockchain Technology</li>
              </ul>
              <div className="banner__illustration-buffer"></div>
              <div className="banner__illustration"><Illustration /></div>
              <div className="banner__bottom-buffer"></div>
            </div>
            <BoxDecor />
          </div>
        </div>
      </div>
    </section>
  )
};

export default News;