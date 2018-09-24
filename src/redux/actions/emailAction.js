import api from '../api';

export default token => () => api.get(`/api/users/verify/${token}`);
export const resendEmail = email => () => api.post('/api/users/reverify', { user: { email } });
