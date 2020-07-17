import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from 'store/actions';
import Header from 'components/Header/Header';

import Main from 'templates/Main/Main';
import SignUp from 'components/Auth/SignIn';
import LogIn from 'components/Auth/LogIn';
import Terms from 'components/Terms/Terms';
import TermsCloseBtn from 'components/Terms/TermsCloseBtn';
import Footer from 'components/Footer/Footer';


function App() {
  const dispatch = useDispatch();
  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  const termsCloseBtn = useSelector((state) => state.termsCloseBtn);

  return (
    <Router>
      <Header isMobile={isMobile} />
      <main className="main">
        <Main />
        <Switch>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/log-in"><LogIn /></Route>
          <Route path="/terms"><Terms /></Route>
        </Switch>
      </main>
      {!isMobile && <Footer footerState={(termsCloseBtn) ? 'footer-mini' : 'footer-standart'} />}
      {termsCloseBtn && <TermsCloseBtn />}
    </Router>
  );
};

export default App;
