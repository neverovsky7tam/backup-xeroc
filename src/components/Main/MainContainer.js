import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../../components/Main/Home/HomeGeneral';
import Footer from '../Footer/Footer';
import SignUp from '../Main/Auth/SignIn';
import LogIn from '../Main/Auth/LogIn';
import Terms from './Terms/Terms';
import FooterCloseBtn from '../Footer/FooterCloseBtn';

const MainContainer = () => {
  const contentVar = useSelector((state) => state.mainBlock);
  let footerState = 'footer-standart';
  let Content = null;
  let closeBtn = null;

  if (contentVar === 'home') Content = Home;
  if (contentVar === 'sign-up') Content = SignUp;
  if (contentVar === 'log-in') Content = LogIn;
  if (contentVar === 'terms') {
    footerState = 'footer-mini';
    closeBtn = <FooterCloseBtn />
    Content = Terms;
  }

  return (
    <>
      <main className="main">
        <Content />
      </main>
      <Footer footerState={footerState} closeBtn={closeBtn} />
    </>
  )
}

export default MainContainer;