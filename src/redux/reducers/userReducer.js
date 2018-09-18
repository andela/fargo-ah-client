// const initialState = {
//   isAuthenticated: false,
//   detail: {},
// };
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: !!action.payload.username,
        detail: action.payload,
      };
    default:
      return state;
  }
};
