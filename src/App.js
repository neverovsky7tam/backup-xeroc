import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from './store/actions';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TermsCloseBtn from './components/Main/Terms/TermsCloseBtn';

function App() {
  const dispatch = useDispatch();
  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  const termsCloseBtn = useSelector((state) => state.termsCloseBtn);
  // let footerState = ;
  // if 
  // footerState = ;

  return (
    <>
      <Header isMobile={isMobile} />
      <Main />
      {!isMobile && <Footer footerState={(termsCloseBtn) ? 'footer-mini' : 'footer-standart'} />}
      {termsCloseBtn && <TermsCloseBtn />}
    </>
  );
};

export default App;
