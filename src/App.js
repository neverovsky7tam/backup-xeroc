import React, {useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from './store/actions';
import Header from './components/Header/Header';

import MainContainer from './components/Main/MainContainer';
import TermsCloseBtn from './components/Main/Terms/TermsCloseBtn';

function App() {
  // useLayoutEffect(() => {
  //   console.log('doc', document.documentElement.scrollHeight);
    
  // })

  const dispatch = useDispatch();
  const termsCloseBtn = useSelector((state) => state.termsCloseBtn)

  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  return (
    <>
      <Header isMobile={isMobile} />
      <MainContainer />
      {termsCloseBtn && <TermsCloseBtn />}
    </>
  );
};

export default App;
