import client from 'lib/client';
import { ILoginUser } from 'models/user';

const postLogin = async (payload: ILoginUser) => {
  return await client.post(`/account/token/`, payload);
};

const getAuthStatus = async (payload: string) => {
  return await client.get(`/account/self/`, payload);
};

export default {
  postLogin,
  getAuthStatus,
};
