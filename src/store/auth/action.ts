import { createEntity } from '../../utils/redux';
import * as authApi from '../../api/auth';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const EMAIL_CHECK = 'EMAIL_CHECK';
export const RESET = 'RESET';
export const ME = 'ME';

export const registerEntity = createEntity(REGISTER, authApi.postRigster);
export const register = (params: authApi.RegisterParams) => ({
  type: REGISTER,
  params,
});
export const reset = () => ({
  type: RESET,
});

export const loginEntity = createEntity(LOGIN, authApi.postLogin);
export const login = (params: authApi.LoginParams) => ({
  type: LOGIN,
  params,
});

export const emailCheckEntity = createEntity(EMAIL_CHECK, authApi.emailCheck);
export const emailCheck = (params: authApi.EmailCheckParams) => ({
  type: EMAIL_CHECK,
  params,
});

export const meEntity = createEntity(ME, authApi.getUser);
export const me = (token?: string) => ({ type: ME, token });

export type Register = ReturnType<typeof register>;
export type Login = ReturnType<typeof login>;
export type EmailCheck = ReturnType<typeof emailCheck>;
export type Me = ReturnType<typeof me>;
