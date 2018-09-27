import api, { setAuthorizationHeader } from '../api';
import { setCurrentUser } from './signupAction';

setAuthorizationHeader(localStorage.getItem('authorsHaven-token'));
export default (userData, imageData) => (dispatch) => {
  const formData = new FormData();
  if (imageData) formData.append('file', imageData);
  formData.append('data', JSON.stringify({ user: userData }));
  return api.put(`/api/profiles/${userData.username}`, formData)
    .then((res) => {
      const {
        username, firstname, lastname, email, image, bio,
      } = res.data.user;
      dispatch(setCurrentUser({
        username, firstname, lastname, email, image, bio,
      }));
      return res.data;
    });
};
