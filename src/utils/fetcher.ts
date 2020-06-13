import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.api.fit-ple.com/',
});

export default instance;
