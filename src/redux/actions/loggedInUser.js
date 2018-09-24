import LOGGEDIN_USER from '../constants/LOGGEDIN_USER';

const loggedInUser = payload => ({
  type: LOGGEDIN_USER,
  payload,
});

export default loggedInUser;
