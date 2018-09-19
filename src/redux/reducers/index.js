import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import userReducer from './userReducer';
import resetReducer from './reset';
import loadedCategoryArticles from './loadedCategoryArticles';

const rootReducer = combineReducers({
  loadedCategories,
  loadedArticles,
  currentUser: userReducer,
  resetReducer,
  loadedCategoryArticles,
});

export default rootReducer;
