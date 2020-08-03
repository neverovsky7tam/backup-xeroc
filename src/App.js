import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDeviceType } from 'store/actions';
import Layout from 'layouts';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import SignUp from 'pages/Account/SignUp';
import LogIn from 'pages/Account/LogIn';
import Terms from 'pages/Account/Terms';

const App = () => {
  const dispatch = useDispatch();

  let isUnserviced = false;
  const screenWidth = document.documentElement.clientWidth;
  if (screenWidth >= 768 && screenWidth < 1023) {
    isUnserviced = true;
  };
  let [unserviced, setUnserviced] = useState(isUnserviced);

  let isMobile = (document.documentElement.clientWidth < 768) ? true : false;
  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  window.addEventListener('resize', () => {
    setTimeout(() => {
      const screenWidth = document.documentElement.clientWidth;
      const isDesctop = (screenWidth < 768) ? false : true;

      if (isDesctop === isMobile) {
        if (isMobile) {
          dispatch(setDeviceType(false));
          isMobile = false;
        } else {
          dispatch(setDeviceType(true));
          isMobile = true;
        }
      }

      if (screenWidth >= 768 && screenWidth < 1023) {
        if (!unserviced) setUnserviced(true);
      } else {
        if (unserviced) setUnserviced(false);
      }
    }, 100);
  });

  if (unserviced) {
    return (
      <div className="plug"><p>This resolution is not supported.</p></div>
    )
  } else {
    return (
      <Layout isMobile={isMobile}>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/product-details/:item/:id"><ProductDetails /></Route>
          <Route path="/sign-up"><SignUp /></Route>
          <Route path="/log-in"><LogIn /></Route>
          <Route path="/terms"><Terms /></Route>
          <Route path="/sell"><Home /></Route>
          <Route path="/host"><Home /></Route>
          <Route path="/about"><Home /></Route>
          <Route path="/support"><Home /></Route>
        </Switch>
      </Layout>
    );
  }
};

export default App;
