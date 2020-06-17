import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTop from '../PageTop/PageTop';
import GeneralBlock from './GeneralBlock/GeneralBlock';
import SignUp from './Auth/SignIn';
import LogIn from './Auth/LogIn';
import Terms from './Terms/Terms';
import { setPageTopState } from '../../store/actions';

const Main = () => {
  const dispatch = useDispatch();
  const contentVar = useSelector((state) => state.mainContent);
  const isMobile = useSelector((state) => state.deviceType);

  let content = null;

  if (contentVar === 'general') content = <GeneralBlock />
  if (contentVar === 'sign-up') content = <SignUp />;
  if (contentVar === 'log-in') content = <LogIn />;
  if (contentVar === 'terms') content = <Terms />;

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
      };

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
    };
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollProcessing);
    return () => document.removeEventListener('scroll', scrollProcessing);
  });

  const onTouchEnd = () => {
    isTouchEnd = true;
    setTimeout(() => isTouchEnd = false, 50);
    fixTouchEndPoint = document.documentElement.scrollTop;
  };

  let isPageTop = false;
  if (isMobile && contentVar === 'general') isPageTop = true;

  return (
    <>
      {isPageTop && <PageTop />}
      <main
        className="main"
        onTouchEnd={onTouchEnd}>
        {content}
      </main>
    </>
  );
};

export default Main;