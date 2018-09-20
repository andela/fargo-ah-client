import { GET_ARTICLE_SEARCH, ARTICLE_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  articles: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ARTICLE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_ARTICLE_SEARCH:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    default: // need this for default case
      return state;
  }
}
