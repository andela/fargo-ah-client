import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import userReducer from './userReducer';
import resetReducer from './reset';

const rootReducer = combineReducers({
  loadedCategories,
  loadedArticles,
  currentUser: userReducer,
  resetReducer,
});

export default rootReducer;
