import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';
import './scss/style.scss';


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);


render(<App />, document.getElementById('index'));
