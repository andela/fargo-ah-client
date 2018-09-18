import axios from 'axios';
export default (email) => {
  axios.post().then();
}
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
