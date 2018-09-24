import axios from 'axios';
import process from '../../api';

const instance = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 10000,
});

export default instance;
