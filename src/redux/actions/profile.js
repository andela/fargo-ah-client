import api from '../api';
import actionTypes from './actionTypes';

const { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } = actionTypes;

const profile = username => dispatch => api.get(`/api/profiles/${username}`)
  .then((result) => {
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: result.data,
    });
  })
  .catch((error) => {
    if (error.response && error.response.data) {
      dispatch({
        type: GET_PROFILE_FAILURE,
        payload: error.response.data,
      });
    }
  });

export default profile;
