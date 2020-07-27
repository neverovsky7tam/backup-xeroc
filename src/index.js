import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './App';

const userAgent = window.navigator.userAgent;
const isYaBrowser = userAgent.toLowerCase().includes('yabrowser');
const isIEBrowser = !!document.documentMode;

if (!isYaBrowser && !isIEBrowser) {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};
