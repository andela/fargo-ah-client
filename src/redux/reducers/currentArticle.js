const singleArticle = (state = {}, action) => {
  switch (action.type) {
    case 'SINGLE_ARTICLE':
      return action.payload;
    default:
      return state;
  }
};

export default singleArticle;
