import actionTypes from '../actions/actionTypes';

const getComments = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default getComments;
