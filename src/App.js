import React from 'react';
import { Switch, Route } from "react-router-dom";
import Layout from 'layouts';
import Home from 'pages/Home';
import ProductDetails from 'pages/ProductDetails';
import SignUp from 'components/Auth/SignIn';
import LogIn from 'components/Auth/LogIn';
import Terms from 'pages/Terms';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/product-details/:item/:id"><ProductDetails /></Route>
        <Route path="/sign-up"><SignUp /></Route>
        <Route path="/log-in"><LogIn /></Route>
        <Route path="/terms"><Terms /></Route>
      </Switch>
    </Layout>
  );
};

export default App;
