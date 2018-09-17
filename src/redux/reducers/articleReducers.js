import { CREATE_ARTICLE, GET_ALL_TAGS } from '../actions/types';

const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        isAuthenticated: action.payload.username,
        userDetails: action.payload,
      };

    case GET_ALL_TAGS:
      return {
        ...state,
        tags: action.payload.tags,
      };
    default:
      return state;
  }
};
export default articleReducer;
