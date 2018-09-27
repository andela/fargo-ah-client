import api from '../api';
import actionTypes from './actionTypes';

const { GET_USER_ARTICLES_SUCCESS, GET_USER_ARTICLES_FAILURE } = actionTypes;

const profile = username => dispatch => api.get(`/api/user/articles/${username}?limit=9`)
  .then((result) => {
    dispatch({
      type: GET_USER_ARTICLES_SUCCESS,
      payload: result,
    });
  })
  .catch((error) => {
    if (error.response && error.response.data) {
      dispatch({
        type: GET_USER_ARTICLES_FAILURE,
        payload: error,
      });
    }
  });

export default profile;
