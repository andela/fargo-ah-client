import actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        isAuthenticated: !!action.payload.username,
        detail: action.payload,
      };
    case actionTypes.UNSET_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
