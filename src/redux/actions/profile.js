import api from '../api';
import actionTypes from './actionTypes';

const { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } = actionTypes;

const profile = username => dispatch => api.post('/profiles/:username', username)
  .then((result) => {
    console.log('>>>>>>>.profile', result);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: result,
    });
  })
  .catch((error) => {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error,
    });
  });

export default profile;
