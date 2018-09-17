import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import currentUser from './userReducer';
import loadedArticles from './loadedArticles';
import createArticle from './articleReducers';

const rootReducer = combineReducers({
  loadedCategories,
  currentUser,
  loadedArticles,
  article: createArticle,
});

export default rootReducer;
