import {
  POST_LOGIN,
  POST_LOGOUT,
  POST_AUTH_STATUS,
  REQUEST,
  SUCCESS,
  FAILURE,
  SET_LOGGED_INFO,
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

export const setLoggedAction = () => createAction(SET_LOGGED_INFO);

// 로그아웃 구현
// export const logoutActions = {
//   logoutRequest: (): any => createAction(POST_LOGOUT[REQUEST]),
//   logoutSuccess: (): any => createAction(POST_LOGOUT[SUCCESS]),
//   logoutFailure: (): any => createAction(POST_LOGOUT[FAILURE]),
// };
// export type Logout = ReturnType<typeof logoutActions.logoutRequest>;
// export type AuthAction =
//   | ActionsUnion<typeof loginActions>
//   | ActionsUnion<typeof logoutActions>;

export const logout = () => ({ type: POST_LOGOUT });

export type Login = ReturnType<typeof loginActions.loginRequest>;
export type AuthStatus = ReturnType<typeof authStatusActions.authStatusRequest>;
export type Logout = ReturnType<typeof logout>;
export type SetLoggedInfo = ReturnType<typeof setLoggedAction>;

export type AuthAction =
  | ActionsUnion<typeof loginActions>
  | ActionsUnion<typeof authStatusActions>
  | Logout
  | SetLoggedInfo;
