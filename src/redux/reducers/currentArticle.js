import { CLEAR_CURRENT_ARTICLE } from '../constants/articles';

const singleArticle = (state = {}, action) => {
  switch (action.type) {
    case 'SINGLE_ARTICLE':
      return action.payload;

    case CLEAR_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: undefined,
      };
    default:
      return state;
  }
};

export default singleArticle;
