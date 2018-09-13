import { combineReducers } from 'redux';
import resetReducer from './reset';
import currentUser from './userReducer';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';

const rootReducer = combineReducers({
  resetReducer,
  loadedCategories,
  currentUser,
  loadedArticles,
});

export default rootReducer;
