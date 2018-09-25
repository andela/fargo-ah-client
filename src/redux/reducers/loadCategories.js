const loadCategories = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_CATEGORY':
      return action.payload;
    default:
      return state;
  }
};

export default loadCategories;
