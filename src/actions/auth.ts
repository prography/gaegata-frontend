import {
  POST_LOGIN,
  POST_LOGOUT,
  POST_AUTH_STATUS,
  SET_LOGGED_INFO,
  POST_REGISTER,
  REQUEST,
  SUCCESS,
  FAILURE,
  EMAIL_CHECK,
  LOGIN_MODAL_CANCEL,
} from 'constants/ActionTypes';
import { createAction } from './action-helpers';
import { IAuthUser, IAuthLogin, IRegisterUser } from 'models/user';
import { ActionsUnion } from 'actions/types';

export const loginActions = {
  loginRequest: (payload: IAuthLogin): any =>
    createAction(POST_LOGIN[REQUEST], payload),
  loginSuccess: (payload: IAuthUser): any =>
    createAction(POST_LOGIN[SUCCESS], payload),
  loginFailure: (): any => createAction(POST_LOGIN[FAILURE]),
};

export const authStatusActions = {
  authStatusRequest: (payload: IAuthLogin): any =>
    createAction(POST_AUTH_STATUS[REQUEST], payload),
  authStatusSuccess: (payload: IAuthUser): any =>
    createAction(POST_AUTH_STATUS[SUCCESS], payload),
  authStatusFailure: (): any => createAction(POST_AUTH_STATUS[FAILURE]),
};

export const registerActions = {
  registerRequest: (payload: IRegisterUser): any =>
    createAction(POST_REGISTER[REQUEST], payload),
  registerSuccess: (): any => createAction(POST_REGISTER[SUCCESS]),
  registerFailure: (): any => createAction(POST_REGISTER[FAILURE]),
};

export const emailCheckActions = {
  emailCheckRequest: (payload: IAuthLogin): any =>
    createAction(EMAIL_CHECK[REQUEST], payload),
  emailCheckSuccess: (payload: String): any =>
    createAction(EMAIL_CHECK[SUCCESS], payload),
  emailCheckFailure: (): any => createAction(EMAIL_CHECK[FAILURE]),
};

export const setLoggedAction = () => createAction(SET_LOGGED_INFO);
export const loginModalCancelAction = () => createAction(LOGIN_MODAL_CANCEL);
export const logout = () => ({ type: POST_LOGOUT });

export type Login = ReturnType<typeof loginActions.loginRequest>;
export type AuthStatus = ReturnType<typeof authStatusActions.authStatusRequest>;
export type Register = ReturnType<typeof registerActions.registerRequest>;
export type Logout = ReturnType<typeof logout>;
export type SetLoggedInfo = ReturnType<typeof setLoggedAction>;
export type EmailCheck = ReturnType<typeof emailCheckActions.emailCheckRequest>;
export type LoginModalCancel = ReturnType<typeof loginModalCancelAction>;

export type AuthAction =
  | ActionsUnion<typeof loginActions>
  | ActionsUnion<typeof authStatusActions>
  | ActionsUnion<typeof registerActions>
  | ActionsUnion<typeof emailCheckActions>
  | Logout
  | SetLoggedInfo
  | LoginModalCancel;
