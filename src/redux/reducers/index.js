import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';
import userReducer from './userReducer';
import resetReducer from './reset';
import currentUser1 from './loggedInUser';
import articleSearchReducer from './articleSearchReducer';
import article from './articleReducers';

const rootReducer = combineReducers({
  currentUser: userReducer,
  article,
  loadedCategories,
  currentUser1,
  loadedArticles,
  resetReducer,
  articleSearchReducer,
});

export default rootReducer;
