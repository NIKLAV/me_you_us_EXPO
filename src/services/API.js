import axios from 'axios';
axios.defaults.baseURL = 'http://77.120.241.80:8871';

export const auth = {
  login: (body) => axios.post('/api/login', body),
  signUp: (body) => axios.post('/api/register', body),
};
