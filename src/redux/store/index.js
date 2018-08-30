import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = process.env.NODE_ENV === 'development'
  ? createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, reduxThunk)))
  : createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export default store;
