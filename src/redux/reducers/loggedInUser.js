const loggedInUser = (state = null, action) => {
  switch (action.type) {
    case 'LOGGEDIN_USER':
      return action.payload;
    default:
      return state;
  }
};

export default loggedInUser;
