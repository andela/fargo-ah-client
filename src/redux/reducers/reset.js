import actions from '../actions/index';

const initialState = {
  user: [],
  email: {},
  response: {},
};

const {
  RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE,
} = actions;

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: action.email,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        response: action.result,
      };
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        response: action.result,
      };
    default:
      return state;
  }
};
