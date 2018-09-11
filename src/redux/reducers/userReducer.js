import actionTypes from '../actions/actionTypes';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        isAuthenticated: !!action.payload.username,
        detail: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
