import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTop from '../PageTop/PageTop';
import HomeDesctop from './HomeDesctop/HomeDesctop';
import OnSale from './OnSale/OnSale';
import Footer from '../Footer/Footer';
import SignUp from './Auth/SignIn';
import LogIn from './Auth/LogIn';
import Terms from './Terms/Terms';
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

  let checkPoint = 1;
  let flag = true;
  let distanceSave = 0;
  let isTouchEnd = false;
  let fixTouchEndPoint = null;

  const scrollProcessing = () => {
    const scrollTop = document.documentElement.scrollTop;
    // console.log('scrollTop', scrollTop);
    // console.log('isTouchEnd', isTouchEnd);
    // console.log('flag', flag);
    if (isTouchEnd && (scrollTop < (fixTouchEndPoint - 10))) {
      dispatch(setPageTopState(null, true));
    };
    isTouchEnd = false;

    if (flag) {
      const delta = scrollTop - checkPoint;
      if (delta < 0) {
        checkPoint = scrollTop;
      }

      if (delta > 10) {
        flag = false;
        checkPoint = scrollTop;
        dispatch(setPageTopState(null, true, 'p-absolute'));
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

  document.addEventListener('scroll', scrollProcessing);

  const onTouchEnd = () => {
    isTouchEnd = true;
    fixTouchEndPoint = checkPoint;
    // console.log('TOUCHEND-TOUCHEND-TOUCHEND-TOUCHEND-TOUCHEND', fixTouchEndPoint);
  };

  return (
    <>
      {isMobile && <PageTop />}
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