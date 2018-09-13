import LOAD_CATEGORY from '../constants/LOAD_CATEGORY';

const loadCategories = payload => ({
  type: LOAD_CATEGORY,
  payload,
});

export default loadCategories;
