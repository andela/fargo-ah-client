import axios from 'axios';

const BASE_URL_2 = 'https://fargo-ah-staging.herokuapp.com/api';

const setCurrentUser = data => ({
  type: 'SET_CURRENT_USER',
  payload: data,
});

const login = details => dispatch => axios.post(`${BASE_URL_2}/users/login`, details).then((res) => {
  const detail = {
    username: res.data.user.username,
    email: res.data.user.email,
    image: res.data.user.image,
  };
  localStorage.setItem('authorsHaven-token', res.data.user.token);
  dispatch(setCurrentUser(detail));
});

export default login;
