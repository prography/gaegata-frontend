import client from 'lib/client';
import { IAuthLogin,IRegisterUser } from 'models/user';

const postLogin = async (payload: IAuthLogin) => {
  return await client.post('/account/token/', payload);
};

const getAuthStatus = async (payload: string) => {
  console.log(payload);
  return await client.get('/account/self/', payload);
};

const idCheck = async (payload: { username: string }) => {
  return client.post('/account/check/duplication/', payload);
};

const postRigster = async (payload: IRegisterUser) => {
  return client.post('/account/', payload);
};

export default {
  postLogin,
  getAuthStatus,
  idCheck,
  postRigster,
};
