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
  let content = null;

  if (contentVar === 'home') content = <Home />;
  if (contentVar === 'sign-up') content = <SignUp />;
  if (contentVar === 'log-in') content = <LogIn />;
  if (contentVar === 'terms') {
    footerState = 'footer-mini';
    content = <Terms />;
  };

  return (
    <>
      <main className="main">
        {content}
      </main>
      <Footer footerState={footerState} />
    </>
  );
};

export default MainContainer;