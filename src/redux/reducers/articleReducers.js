import { CREATE_ARTICLE } from '../actions/types';

const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        isAuthenticated: action.payload.username,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};
export default articleReducer;
