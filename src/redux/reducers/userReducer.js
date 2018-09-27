import actionTypes from '../actions/actionTypes';
import { setTokenToStorage } from '../api';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      setTokenToStorage('authorsHaven-user', JSON.stringify({
        username: action.payload.username,
      }));
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
