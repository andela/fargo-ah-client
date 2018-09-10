const loadedArticles = (state = [], action) => {
  switch (action.type) {
    case 'ARTICLES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default loadedArticles;
