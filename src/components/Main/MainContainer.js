import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTop from '../PageTop/PageTop';
import HomeDesctop from './HomeDesctop/HomeDesctop';
import OnSale from './OnSale/OnSale';
import Footer from '../Footer/Footer';
import SignUp from './Auth/SignIn';
import LogIn from './Auth/LogIn';
import Terms from './Terms/Terms';
import Sell from './Sell/Sell';
import { setPageTopState } from '../../store/actions';

const MainContainer = () => {
  const dispatch = useDispatch();
  const contentVar = useSelector((state) => state.mainContent);
  const isMobile = useSelector((state) => state.deviceType);

  let footerState = 'footer-standart';
  let content = null;

  if (contentVar === 'home') {
    content = (isMobile) ? <OnSale /> : <HomeDesctop />;
  }
  if (contentVar === 'sign-up') content = <SignUp />;
  if (contentVar === 'log-in') content = <LogIn />;
  if (contentVar === 'terms') {
    footerState = 'footer-mini';
    content = <Terms />;
  };
  if (contentVar === 'sell') content = <Sell />;

  let checkPoint = 1;
  let flag = true;
  let distanceSave = 0;
  let isTouchEnd = false;
  let fixTouchEndPoint = null;

  const scrollProcessing = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (isTouchEnd && (scrollTop < (fixTouchEndPoint - 8))) {
      dispatch(setPageTopState(null));
    };

    if (flag) {
      const delta = scrollTop - checkPoint;
      if (delta < 0) {
        checkPoint = scrollTop;
      }

      if (delta > 10) {
        flag = false;
        checkPoint = scrollTop;
        dispatch(setPageTopState(null, 'p-absolute'));
      }
    } else {
      const distanceCurrent = scrollTop - checkPoint;

      if (distanceCurrent >= distanceSave) {
        distanceSave = distanceCurrent;
      } else {
        flag = true;
        checkPoint = scrollTop;
        distanceSave = 0;
      }
    }
  }

  useEffect(() =>   document.addEventListener('scroll', scrollProcessing), [])

  const onTouchEnd = () => {
    isTouchEnd = true;
    setTimeout(() => isTouchEnd = false, 100);
    fixTouchEndPoint = document.documentElement.scrollTop;
  };

  let isPageTop = false;
  if (isMobile) {
    if (contentVar !== 'sign-up' && contentVar !== 'log-in' && contentVar !== 'terms') isPageTop = true;
  }

  return (
    <>
      {isPageTop && <PageTop />}
      <main
        className="main"
        onTouchEnd={onTouchEnd}>
        {content}
      </main>
      {!isMobile && <Footer footerState={footerState} />}
    </>
  );
};

export default MainContainer;