import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import TermsCloseBtn from './components/Main/Terms/TermsCloseBtn';

function App() {
  const termsCloseBtn = useSelector((state) => state.termsCloseBtn)

  return (
    <>
      <Header />
      <MainContainer />
      {termsCloseBtn && <TermsCloseBtn />}
    </>
  );
};

export default App;
