import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../../components/Main/Home/HomeGeneral';
import Footer from '../Footer/Footer';
import SignUp from '../Main/Auth/SignIn';
import LogIn from '../Main/Auth/LogIn';
import Terms from './Terms/Terms';

const MainContainer = () => {
  const contentVar = useSelector((state) => state.mainContent);
  let footerState = 'footer-standart';
  let Content = null;

  if (contentVar === 'home') Content = Home;
  if (contentVar === 'sign-up') Content = SignUp;
  if (contentVar === 'log-in') Content = LogIn;
  if (contentVar === 'terms') {
    footerState = 'footer-mini';
    Content = Terms;
  };

  return (
    <>
      <main className="main">
        <Content />
      </main>
      <Footer footerState={footerState} />
    </>
  );
};

export default MainContainer;