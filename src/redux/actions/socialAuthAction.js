import axios from 'axios';
import { setCurrentUser } from './signupAction';
import process from '../../../api';

export default (currentUsername, token) => dispatch => axios.get(`${process.env.BACKEND_URL}/api/profiles/${currentUsername}`)
  .then((res) => {
    const {
      username, firstname, lastname, email, image,
    } = res.data.user;
    dispatch(setCurrentUser({
      username, firstname, lastname, email, image,
    }));
    localStorage.setItem('authorsHaven-token', token);
  });
