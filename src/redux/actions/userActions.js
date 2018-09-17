import axios from 'axios';

const BASE_URL_2 = 'https://fargo-ah-staging.herokuapp.com/api';

const setCurrentUser = data => ({
  type: 'SET_CURRENT_USER',
  payload: data,
});

export const login = details => dispatch => axios.post(`${BASE_URL_2}/users/login`, details).then((res) => {
  const detail = {
    username: res.data.user.username,
    firstname: res.data.user.firstname,
    lastname: res.data.user.lastname,
    email: res.data.user.email,
    image: res.data.user.image,
  };
  localStorage.setItem('authorsHaven-token', res.data.user.token);
  dispatch(setCurrentUser(detail));
});

export const logout = () => (dispatch) => {
  axios.defaults.headers.common.Authorization = '';
  localStorage.removeItem('authorsHaven-token');
  return dispatch({ type: 'UNSET_CURRENT_USER' });
};
