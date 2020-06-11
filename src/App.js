import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from './store/actions';
import Plug from './components/Plug/Plug';
import Header from './components/Header/Header';

import MainContainer from './components/Main/MainContainer';
import TermsCloseBtn from './components/Main/Terms/TermsCloseBtn';

function App() {
  console.log('check', window.navigator.userAgent);
  const browser = window.navigator.userAgent;
  const isYandexBro = browser.toLowerCase().includes('yabrowser');
  const isIEBro = !!document.documentMode;

  const dispatch = useDispatch();
  const termsCloseBtn = useSelector((state) => state.termsCloseBtn)

  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  if (isYandexBro || isIEBro) {
    return <Plug />
  } else {
    return (
      <>
        <Header isMobile={isMobile} />
        <MainContainer />
        {termsCloseBtn && <TermsCloseBtn />}
      </>
    );
  };
};

export default App;
