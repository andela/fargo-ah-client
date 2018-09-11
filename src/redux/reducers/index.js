import { combineReducers } from 'redux';
import userReducer from './userReducer';
import resetReducer from './reset';

const rootReducer = combineReducers({
  currentUser: userReducer,
  resetReducer,
});

export default rootReducer;
