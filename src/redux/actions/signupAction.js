import axios from 'axios';

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  ...user,
});
export default userData => dispatch => axios.post('http://localhost:3000/api/users', userData)
  .then((res) => {
    if (res.status === 200) {
      dispatch(setCurrentUser(userData));
      localStorage.setItem('token', res.data.user.token);
    }
    return res.data;
  });
