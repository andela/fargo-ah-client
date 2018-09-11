import axios from 'axios';

export default token => () => axios(`${process.env.BACKEND_URL}/api/users/verify/${token}`);
export const resendEmail = email => () => axios.post(`${process.env.BACKEND_URL}/api/users/reverify`, { user: { email } });
