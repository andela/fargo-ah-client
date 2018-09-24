import actions from '../actions/actionTypes';

const initialState = {
  user: {},
  error: {},
};

const {
  GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE,
} = actions;

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
