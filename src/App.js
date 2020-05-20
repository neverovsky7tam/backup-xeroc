import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from './store/actions';
import Header from './components/Header/Header';
import PageTop from './components/PageTop/PageTop';
import MainContainer from './components/Main/MainContainer';
import TermsCloseBtn from './components/Main/Terms/TermsCloseBtn';

function App() {
  const dispatch = useDispatch();
  const termsCloseBtn = useSelector((state) => state.termsCloseBtn)

  const isMob = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMob) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  return (
    <>
      <Header />
      {isMob && <PageTop />}
      <MainContainer />
      {termsCloseBtn && <TermsCloseBtn />}
    </>
  );
};

export default App;
