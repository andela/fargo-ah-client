import axios from 'axios';
import actions from './index';

const {
  RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
  UPDATE_PASSWORD_FAILURE, UPDATE_PASSWORD_SUCCESS,
} = actions;
const BASE_URL_1 = 'https://fargo-ah-staging.herokuapp.com/api';

export const sendEmail = email => dispatch => axios.post(`${BASE_URL_1}/users/password/reset`, {
  user: {
    email,
  },
})
  .then((data) => {
    if (data) {
      localStorage.setItem('email', email);
    }
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.data,
      email,
    });
  })

  .catch(error => dispatch({
    type: RESET_PASSWORD_FAILURE,
    payload: error.response.data,
  }));

export const resetPassword = password => (dispatch) => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  return axios.put(`${BASE_URL_1}/users/password/reset/edit`, {
    user: {
      password,
    },

  }, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        result: data.data,
      });
    })
    .catch(error => dispatch({
      type: UPDATE_PASSWORD_FAILURE,
      result: error.response.data,
    }));
};
