import { combineReducers } from 'redux';
import currentUser from './userReducer';
import loadedCategories from './loadCategories';
import loadedArticles from './loadedArticles';

const rootReducer = combineReducers({
  loadedCategories,
  currentUser,
  loadedArticles,
});

export default rootReducer;
