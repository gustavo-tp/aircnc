import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aircnc-gustavo-tp.herokuapp.com',
});

export default api;
