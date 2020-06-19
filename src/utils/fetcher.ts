import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.fit-ple.com/',
});

export default instance;
