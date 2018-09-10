import { combineReducers } from 'redux';
import loadedCategories from './loadCategories';
import currentUser from './loggedInUser';
import loadedArticles from './loadedArticles';

const rootReducer = combineReducers({
  loadedCategories,
  currentUser,
  loadedArticles,
});

export default rootReducer;
