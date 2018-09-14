import axios from 'axios';
import process from '../../../api';

export default token => () => axios(`${process.env.BACKEND_URL}/api/users/verify/${token}`);
export const resendEmail = email => () => axios.post(`${process.env.BACKEND_URL}/api/users/reverify`, { user: { email } });
