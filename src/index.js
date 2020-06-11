import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';

const browser = window.navigator.userAgent;
const isYandexBro = browser.toLowerCase().includes('yabrowser');
const isIEBro = !!document.documentMode;

if (!isYandexBro && !isIEBro) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
