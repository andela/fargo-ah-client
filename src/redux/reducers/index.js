import { combineReducers } from 'redux';

const fakeReducer = (state = []) => state;
const rootReducer = combineReducers({ fakeReducer });

export default rootReducer;
