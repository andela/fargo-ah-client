const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: action.isAuthenticated || true,
        detail: action.user,
      };
    default:
      return state;
  }
};
export default userReducer;
