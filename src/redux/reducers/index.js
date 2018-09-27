import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import userReducer from './userReducer';
import resetReducer from './reset';
import currentUser1 from './loggedInUser';
import article from './articleReducers';
import currentArticle from './currentArticle';

const rootReducer = combineReducers({
  currentUser: userReducer,
  article,
  loadedCategories,
  currentUser1,
  loadedArticles,
  resetReducer,
  currentArticle,
});

export default rootReducer;
