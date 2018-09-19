import { combineReducers } from 'redux';
import currentUser from './userReducer';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import createArticle from './articleReducers';

const rootReducer = combineReducers({
  loadedCategories,
  currentUser,
  loadedArticles,
  createArticle,
});

export default rootReducer;
