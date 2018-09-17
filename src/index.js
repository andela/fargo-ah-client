import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';
import './styles/index.scss';
import socialAuthAction from './redux/actions/socialAuthAction';

if (window.location.search.startsWith('?username')) {
  const temp = window.location.search.replace('?username=', '').replace('token=', '');
  window.history.replaceState({}, document.title, '/');
  const [username, token] = temp.split('&&');
  store.dispatch(socialAuthAction(username, token));
}

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
render(<App />, document.getElementById('index'));
