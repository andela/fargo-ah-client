import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import userReducer from './userReducer';
import resetReducer from './reset';
import article from './articleReducers';
import currentArticle from './currentArticle';
import comment from './commentReducers';
import loadedCategoryArticles from './loadedCategoryArticles';
import userProfile from './profileReducer';
import deletedArticle from './deleteArticleReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  article,
  loadedCategories,
  loadedArticles,
  resetReducer,
  currentArticle,
  comment,
  loadedCategoryArticles,
  userProfile,
  deletedArticle,
});

export default rootReducer;
