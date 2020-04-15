import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMainContainerHeight } from '../../store/actions';
import Home from '../../components/Main/Home/HomeGeneral';
import Footer from '../Footer/Footer';
import SignUp from '../Main/Auth/SignIn';
import LogIn from '../Main/Auth/LogIn';
import Terms from './Terms/Terms';

const MainContainer = () => {
  const HEADER_AND_FOOTER_HEIGHT = 354;
  const BREAK_POINT_PAD = 786;

  const contentVar = useSelector((state) => state.mainBlock);
  let footerState = 'footer-standart';
  let Content = null;

  if (contentVar === 'home') Content = Home;
  if (contentVar === 'sign-up') Content = SignUp;
  if (contentVar === 'log-in') Content = LogIn;
  if (contentVar === 'terms') {
    footerState = 'footer-mini';
    Content = Terms;
  }


  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const setMainHeight = () => {
      if (document.documentElement.clientWidth > BREAK_POINT_PAD) {
        setTimeout(() => {
          const height = document.documentElement.clientHeight - HEADER_AND_FOOTER_HEIGHT;
          dispatch(setMainContainerHeight(`${height}px`));
        }, 500);
      } else {
        dispatch(setMainContainerHeight('auto'));
      }
    }

    window.addEventListener('resize', setMainHeight);
    setMainHeight();
    return () => window.removeEventListener('resize', setMainHeight);
  }, []);

  const height = useSelector((state) => state.mainContainerHeight);

  return (
    <>
      <main className="main" style={{ height: `${height}` }}>
        <Content />
      </main>
      <Footer footerState={footerState} />
    </>
  )
}

export default MainContainer;