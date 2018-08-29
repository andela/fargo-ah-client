import React from 'react';
<<<<<<< HEAD
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './router';
import './styles/index.scss';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
render(<App />, document.getElementById('index'));
=======
import ReactDOM from 'react-dom';
import Routes from './router';
import './scss/style.scss';

ReactDOM.render(<Routes />, document.getElementById('index'));
>>>>>>> ch(router): Setup react router
