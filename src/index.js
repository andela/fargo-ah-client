import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import store from './redux/store';
import Routes from './router';
import './styles/index.scss';
import { setAuthorizationHeader, getTokenFromStorage } from './redux/api';


if (getTokenFromStorage('authorsHaven-token')) {
  const token = getTokenFromStorage('authorsHaven-token');
  const { exp } = decode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  if (exp > currentTime) {
    setAuthorizationHeader(token);
  }
}


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
render(<App />, document.getElementById('index'));
