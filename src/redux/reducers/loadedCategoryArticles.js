const loadedCategoryArticles = (state = [], action) => {
  switch (action.type) {
    case 'CATEGORY_ARTICLE':
      return [...action.payload];
    default:
      return state;
  }
};

export default loadedCategoryArticles;
