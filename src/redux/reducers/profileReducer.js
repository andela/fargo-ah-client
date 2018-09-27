import actions from '../actions/actionTypes';

const initialState = {
  user: {},
  error: {},
  articles: [],
  articleError: {},
};

const {
  GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_USER_ARTICLES_SUCCESS, GET_USER_ARTICLES_FAILURE,
} = actions;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case GET_USER_ARTICLES_FAILURE:
      return {
        ...state,
        articleError: action.payload,
      };
    default:
      return state;
  }
};
