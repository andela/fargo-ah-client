import { combineReducers } from 'redux';
import currentUser from './userReducer';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import loadedCategoryArticles from './loadedCategoryArticles';
import createArticle from './articleReducers';
import currentArticle from './currentArticle';

const rootReducer = combineReducers({
  loadedCategories,
  currentUser,
  loadedArticles,
  currentArticle,
  article: createArticle,
  loadedCategoryArticles,
});

export default rootReducer;
