import SINGLE_ARTICLE from '../constants/SINGLE_ARTICLE';

const currentArticle = payload => ({
  type: SINGLE_ARTICLE,
  payload,
});

export default currentArticle;
