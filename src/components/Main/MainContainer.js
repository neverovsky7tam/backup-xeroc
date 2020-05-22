import React from 'react';
import { useSelector } from 'react-redux';
import PageTop from '../PageTop/PageTop';
import HomeDesctop from './HomeDesctop/HomeDesctop';
import OnSale from './OnSale/OnSale';
import Footer from '../Footer/Footer';
import SignUp from './Auth/SignIn';
import LogIn from './Auth/LogIn';
import Terms from './Terms/Terms';

const MainContainer = () => {
  const contentVar = useSelector((state) => state.mainContent);
  const isMobile = useSelector((state) => state.deviceType);

  let footerState = 'footer-standart';
  let content = null;

  if (contentVar === 'home') {
    content = (isMobile) ? <OnSale /> : <HomeDesctop />;
  }
  if (contentVar === 'sign-up') content = <SignUp />;
  if (contentVar === 'log-in') content = <LogIn />;
  if (contentVar === 'terms') {
    footerState = 'footer-mini';
    content = <Terms />;
  };

  return (
    <>
      {isMobile && <PageTop />}
      <main className="main">
        {content}
      </main>
      {!isMobile && <Footer footerState={footerState} />}
    </>
  );
};

export default MainContainer;