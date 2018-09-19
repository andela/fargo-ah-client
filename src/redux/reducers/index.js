import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import currentUser from './loggedInUser';
import loadedArticles from './loadedArticles';
import createArticle from './articleReducers';

const rootReducer = combineReducers({
  loadedCategories,
  currentUser,
  loadedArticles,
  createArticle,
});

export default rootReducer;
