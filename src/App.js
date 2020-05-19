import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import PageTop from './components/PageTop/PageTop';
import MainContainer from './components/Main/MainContainer';
import TermsCloseBtn from './components/Main/Terms/TermsCloseBtn';

function App() {
  const termsCloseBtn = useSelector((state) => state.termsCloseBtn)

  return (
    <>
      <Header />
      <PageTop />
      <MainContainer />
      {termsCloseBtn && <TermsCloseBtn />}
    </>
  );
};

export default App;
