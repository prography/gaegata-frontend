import produce from 'immer';
import { AuthAction } from 'actions/auth';
import {
  EMAIL_CHECK,
  POST_LOGIN,
  POST_LOGOUT,
  POST_AUTH_STATUS,
  SET_LOGGED_INFO,
  POST_REGISTER,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOGIN_MODAL_CANCEL,
} from 'constants/ActionTypes';

import {IAuthUser, IAuthLogin} from 'models/user';


export interface IAuthState {
  user: IAuthUser;
  login: IAuthLogin;
}

const initialState: IAuthState = {
  user: {
    error: '',
    isLoggedIn: false,
    userInfo: {
      user_id: -1,
      username: '',
      nickname: '',
      introduction: '',
      image: '',
      is_github_authenticated: '',
    },
  },
  login: {
    username: '',
    password: '',
    authStatus: 'INIT',
    error: '',
    progressStatus: 'INIT',
  },
};

//authStatus INIT, FETCHING, PASSWORD, REGISTER

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
        draft.login.progressStatus = 'FINISH';
        return draft;
      }
      case POST_LOGIN[FAILURE]: {
        draft.login.authStatus = 'FAILTURE';
        draft.user.isLoggedIn = false;
        draft.login.error = 'passwordError';
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

      case LOGIN_MODAL_CANCEL: {
        draft.login.authStatus = 'INIT';
        draft.login.progressStatus = 'INIT';
        return draft;
      }

      case SET_LOGGED_INFO: {
        draft.user.isLoggedIn = true;
        return draft;
      }
      case POST_REGISTER[REQUEST]:
        return draft;

      case POST_REGISTER[SUCCESS]:
        return draft;

      case POST_REGISTER[FAILURE]:
        return draft;

      case EMAIL_CHECK[REQUEST]: {
        draft.login.authStatus = 'FETCHING';
        draft.login.username = action.payload.username;
        return draft;
      }
      case EMAIL_CHECK[SUCCESS]: {
        draft.login.authStatus = 'SUCCESS';
        draft.login.progressStatus = action.payload; // 아이디 있을땐 PASSWORD 없을땐 REGISTER

        return draft;
      }
      case EMAIL_CHECK[FAILURE]: {
        draft.login.authStatus = 'FAILURE';
        draft.user.userInfo = initialState.user.userInfo;
      }
    }
  });
};

export default authReducer;
