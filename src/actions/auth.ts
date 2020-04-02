import {
  POST_LOGIN,
  POST_LOGOUT,
  POST_AUTH_STATUS,
  SET_LOGGED_INFO,
  POST_REGISTER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from 'constants/ActionTypes';
import { createAction } from './action-helpers';
import { ILoginUser, IUser } from 'models/user';
import { ActionsUnion } from 'actions/types';

export const loginActions = {
  loginRequest: (payload: ILoginUser): any =>
    createAction(POST_LOGIN[REQUEST], payload),
  loginSuccess: (payload: IUser): any =>
    createAction(POST_LOGIN[SUCCESS], payload),
  loginFailure: (): any => createAction(POST_LOGIN[FAILURE]),
};

export const authStatusActions = {
  authStatusRequest: (payload: ILoginUser): any =>
    createAction(POST_AUTH_STATUS[REQUEST], payload),
  authStatusSuccess: (payload: IUser): any =>
    createAction(POST_AUTH_STATUS[SUCCESS], payload),
  authStatusFailure: (): any => createAction(POST_AUTH_STATUS[FAILURE]),
};

export const registerActions = {
  registerRequest: (payload: ILoginUser): any =>
    createAction(POST_REGISTER[REQUEST], payload),
  registerSuccess: (): any => createAction(POST_REGISTER[SUCCESS]),
  registerFailure: (): any => createAction(POST_REGISTER[FAILURE]),
};

export const setLoggedAction = () => createAction(SET_LOGGED_INFO);

export const logout = () => ({ type: POST_LOGOUT });

export type Login = ReturnType<typeof loginActions.loginRequest>;
export type AuthStatus = ReturnType<typeof authStatusActions.authStatusRequest>;
export type Register = ReturnType<typeof registerActions.registerRequest>;
export type Logout = ReturnType<typeof logout>;
export type SetLoggedInfo = ReturnType<typeof setLoggedAction>;

export type AuthAction =
  | ActionsUnion<typeof loginActions>
  | ActionsUnion<typeof authStatusActions>
  | ActionsUnion<typeof registerActions>
  | Logout
  | SetLoggedInfo;
