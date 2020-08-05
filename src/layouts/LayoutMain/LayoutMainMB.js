import React, { useEffect } from 'react';
import { setPageTopStyle } from 'store/actions';
import {setActionData, scrollProcess, onTouchEnd} from 'mod/PageTop/scrollProcess';

const LayoutMainMB = ({ children, isHomePage }) => {
  setActionData(setPageTopStyle, 'p-absolute', document.documentElement);

  useEffect(() => {
    document.addEventListener('scroll', scrollProcess);
    return () => document.removeEventListener('scroll', scrollProcess);
  }, []);

  let wrapperClass = 'wrapper-mob';
  if (isHomePage) wrapperClass = 'home-mob';

  return (
    <div
      className={wrapperClass}
      onTouchEnd={onTouchEnd}>
      {children}
    </div>
  );
};

export default LayoutMainMB;