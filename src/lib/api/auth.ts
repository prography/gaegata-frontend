import client from 'lib/client';
import { ILoginUser, IUser } from 'models/user';

const postLogin = async (payload: ILoginUser) => {
  return await client.post('/account/token/', payload);
};

const getAuthStatus = async (payload: string) => {
  return await client.get('/account/self/', payload);
};

const idCheck = async (payload: { username: string }) => {
  return client.post('/account/check/duplication/', payload);
};

const postRigster = async (payload: IUser) => {
  return client.post('/account/', payload);
};

export default {
  postLogin,
  getAuthStatus,
  idCheck,
  postRigster,
};
