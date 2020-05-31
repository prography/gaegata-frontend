import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://fitple-last-dev.ap-northeast-2.elasticbeanstalk.com',
});

export default instance;
