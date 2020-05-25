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
  const isSidebar = useSelector((state) => state.sidebarState);

  const menuCssClass = (isSidebar) ? 'main main_covered' : 'main'

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
  let isTouchEnd = false;
  let distanceSave = 0;

  const scrollProcessing = (e) => {
    const scrollTop = e.target.documentElement.scrollTop;
    console.log('scrollTop', scrollTop);
    if (isTouchEnd && (scrollTop < (checkPoint - 5))) {
      dispatch(setPageTopState(null, true));
    };
    isTouchEnd = false;

    if (flag) {
      const delta = scrollTop - checkPoint;

      if (delta < 0) {
        checkPoint = scrollTop;
      }

      if (delta > 100) {
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

  const onTouchEnd = (e) => {
    isTouchEnd = true;
  };

  return (
    <>
      {isMobile && <PageTop />}
      <main
        className={menuCssClass}
        onTouchEnd={onTouchEnd}>
        {content}
      </main>
      {!isMobile && <Footer footerState={footerState} />}
    </>
  );
};

export default MainContainer;