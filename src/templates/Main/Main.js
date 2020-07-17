import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filters from 'components/Filters/Filters';
import Listings from 'components/Listings/Listings';
import News from 'components/News/News';
import Home from 'pages/Home';
import ProductDetails_DT from 'components/ProductDetails/ProductDetails_DT';
import { productsObj } from 'data/productsData';

const MainLayout = () => {
  let pageTopContent = null;

  return (
    <div className="general">
      <Filters />
      <section className="general__center">
        <Router>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/product-details"><ProductDetails_DT /></Route>
          </Switch>
        </Router>
      </section>
      <Listings productsObj={productsObj} />
      <News />
    </div>
  );
};

export default MainLayout;