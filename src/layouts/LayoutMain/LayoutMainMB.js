import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTopStyle } from 'store/actions';
import PageTop from 'mod/PageTop';

const LayoutMainMB = ({ children, isHomePage }) => {
  const dispatch = useDispatch();

  // scroll processing. hide/show 'page-top' component
  let checkPoint = 1;
  let flag = true;
  let distanceSave = 0;
  let endTouchPoint = null;

  const scrollProcessing = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (flag) {
      const delta = scrollTop - checkPoint;
      if (delta < 0) {
        checkPoint = scrollTop;
      };

      if (delta > 10) {
        flag = false;
        checkPoint = scrollTop;
        dispatch(setPageTopStyle('p-absolute'));
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

  const checkRules = () => {
    setTimeout(() => {
      const curretnScroll = document.documentElement.scrollTop;
      if (curretnScroll < (endTouchPoint - 8)) {
        dispatch(setPageTopStyle(null));
      };
    }, 100);
  };

  const onTouchEnd = () => {
    endTouchPoint = document.documentElement.scrollTop;
    checkRules();
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollProcessing);
    return () => document.removeEventListener('scroll', scrollProcessing);
  }, []);
  // END scroll processing

  let wrapperClass = 'wrapper-mob';
  if (isHomePage) wrapperClass = 'home-mob';

  return (
    <>
      <PageTop />
      <div
        className={wrapperClass}
        onTouchEnd={onTouchEnd}>
        {children}
      </div>
    </>
  );
};

export default LayoutMainMB;