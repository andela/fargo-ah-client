import { setCurrentUser } from './signupAction';
import api from '../api';

export default (currentUsername, token) => dispatch => api.get(`/api/profiles/${currentUsername}`)
  .then((res) => {
    const {
      username, firstname, lastname, email, image,
    } = res.data.user;
    dispatch(setCurrentUser({
      username, firstname, lastname, email, image,
    }));
    localStorage.setItem('authorsHaven-token', token);
  });
