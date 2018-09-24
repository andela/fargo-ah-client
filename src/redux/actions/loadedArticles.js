import ARTICLES from '../constants/ARTICLES';

const loadCategories = payload => ({
  type: ARTICLES,
  payload,
});

export default loadCategories;
