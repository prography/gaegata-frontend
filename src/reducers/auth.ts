import produce from 'immer';
import { AuthAction } from 'actions/auth';
import {
  POST_LOGIN,
  POST_LOGOUT,
  POST_AUTH_STATUS,
  REQUEST,
  SUCCESS,
  FAILURE,
  SET_LOGGED_INFO,
} from 'constants/ActionTypes';

export interface IAuthUser {
  status: string;
  error: string;
  isLoggedIn: boolean;
  userInfo: {
    user_id: number;
    username: string;
    nickname: string;
  };
}
export interface IAuthLogin {
  authStatus: string;
  error: string;
}

export interface IAuthState {
  user: IAuthUser;
  login: IAuthLogin;
}

const initialState: IAuthState = {
  user: {
    status: 'INIT',
    error: '',
    isLoggedIn: false,
    userInfo: {
      user_id: -1,
      username: '',
      nickname: '',
    },
  },
  login: {
    authStatus: 'INIT',
    error: '',
  },
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  return produce(state, draft => {
    switch (action.type) {
      case POST_LOGIN[REQUEST]: {
        draft.login.authStatus = 'FETCHING';

        return draft;
      }
      case POST_LOGIN[SUCCESS]: {
        draft.login.authStatus = 'SUCCESS';
        draft.user.userInfo = action.payload;
        draft.user.isLoggedIn = true;

        return draft;
      }
      case POST_LOGIN[FAILURE]: {
        draft.login.authStatus = 'FAILURE';
        draft.user.isLoggedIn = false;

        return draft;
      }
      case POST_AUTH_STATUS[REQUEST]: {
        draft.login.authStatus = 'FETCHING';

        return draft;
      }
      case POST_AUTH_STATUS[SUCCESS]: {
        draft.login.authStatus = 'SUCCESS';
        draft.user.userInfo = action.payload;
        draft.user.isLoggedIn = true;
        return draft;
      }
      case POST_AUTH_STATUS[FAILURE]: {
        draft.login.authStatus = 'FAILURE';
        draft.user.isLoggedIn = false;
        draft.user.userInfo = initialState.user.userInfo;

        return draft;
      }
      case POST_LOGOUT: {
        draft.login.authStatus = 'INIT';
        draft.user.isLoggedIn = false;
        draft.user.userInfo = initialState.user.userInfo;

        return draft;
      }
      case SET_LOGGED_INFO: {
        draft.user.isLoggedIn = true;
        return draft;
      }
    }
  });
};

export default authReducer;
