import { DELETE_ARTICLE } from '../constants/articles';

const deleteArticle = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return {
        ...state,
        articleDeleted: true,
      };
    default:
      return state;
  }
};

export default deleteArticle;
