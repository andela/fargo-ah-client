import axios from 'axios';
import actionTypes from './actionTypes';

export const setCurrentUser = payload => ({
  type: actionTypes.SET_CURRENT_USER,
  payload,
});
export default userData => dispatch => axios.post(`${process.env.BACKEND_URL}/api/users`, userData)
  .then((res) => {
    const {
      username, firstname, lastname, email, image,
    } = res.data.user;
    dispatch(setCurrentUser({
      username, firstname, lastname, email, image,
    }));
    localStorage.setItem('token', res.data.user.token);
    return res.data;
  });
