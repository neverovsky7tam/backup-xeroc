import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';

const userAgent = window.navigator.userAgent;
const isYaBrowser = userAgent.toLowerCase().includes('yabrowser');
const isIEBrowser = !!document.documentMode;

if (!isYaBrowser && !isIEBrowser) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
