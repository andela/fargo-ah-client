import axios from 'axios';
import process from '../../api';

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 10000,
});


export const setAuthorizationHeader = (token = null) => {
  const defaultHeader = instance.defaults.headers.common;
  if (token) {
    defaultHeader.Authorization = `Bearer ${token}`;
  } else {
    delete defaultHeader.Authorization;
  }
  return defaultHeader;
};

export const setTokenToStorage = (key = 'authorsHaven-token', data) => {
  localStorage.setItem(key, (data));
};
export const getTokenFromStorage = (key = 'authorsHaven-token') => (localStorage.getItem(key));

export const removeTokenFromStorage = (key = 'authorsHaven-token') => {
  localStorage.removeItem(key);
};

export default instance;
