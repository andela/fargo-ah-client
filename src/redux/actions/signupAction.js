import actionTypes from './actionTypes';
import api from '../api';

export const setCurrentUser = payload => ({
  type: actionTypes.SET_CURRENT_USER,
  payload,
});
export default userData => dispatch => api.post('/api/users', userData)
  .then((res) => {
    const {
      username, firstname, lastname, email, image, bio,
    } = res.data.user;
    dispatch(setCurrentUser({
      username, firstname, lastname, email, image, bio,
    }));
    localStorage.setItem('authorsHaven-token', res.data.user.token);
    return res.data;
  });
