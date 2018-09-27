const loadedCategoryArticles = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORY_ARTICLE':
      return action.payload.rows;
    default:
      return state;
  }
};

export default loadedCategoryArticles;
