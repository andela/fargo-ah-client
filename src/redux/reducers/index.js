import { combineReducers } from 'redux';
import resetReducer from './reset';
import currentUser from './userReducer';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import createArticle from './articleReducers';

const rootReducer = combineReducers({
  resetReducer,
  loadedCategories,
  currentUser,
  loadedArticles,
  article: createArticle,
});

export default rootReducer;
