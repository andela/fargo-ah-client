import CATEGORY_ARTICLES from '../constants/CATEGORY_ARTICLES';

const loadCategoryArticles = payload => ({
  type: CATEGORY_ARTICLES,
  payload,
});

export default loadCategoryArticles;
