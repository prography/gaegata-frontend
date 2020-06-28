import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.fit-ple.com/',
});

export default instance;
