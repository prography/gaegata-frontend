import { produce } from 'immer';
import { combineReducers } from 'redux';
import { User } from 'models/user';
import { setAuthToken } from 'utils/auth';

export type AuthState = {
  register: {
    status: string;
  };
  login: {
    loginStatus: string;
  };
  emailCheck: {
    email: string;
    status: string;
  };
  me: User & {
    isLoggedIn: boolean;
  };
};

const initialState: AuthState = {
  register: {
    status: 'INIT',
  },
  login: {
    loginStatus: 'INIT',
  },
  emailCheck: {
    email: '',
    status: 'INIT',
  },
  me: {
    id: -1,
    username: '',
    email: '',
    isLoggedIn: false,
  },
};

const loginReducer = (
  state = initialState.login,
  action: any,
): AuthState['login'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        draft.loginStatus = 'FETCHING';
        return draft;
      case 'LOGIN_SUCCESS':
        draft.loginStatus = 'SUCCESS';
        setAuthToken(action.payload.token);
        return draft;
      case 'LOGIN_FAILURE':
        draft.loginStatus = 'FAILTURE';
        return draft;
      case 'RESET':
        draft = initialState.login;
      default:
        return draft;
    }
  });
};

const registerReducer = (
  state: AuthState['register'] = initialState.register,
  action: any,
): AuthState['register'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'REGISTER_REQUEST':
        draft.status = 'REQUEST';
        return draft;
      case 'REGISTER_SUCCESS':
        draft.status = 'SUCCESS';
        return draft;
      case 'REGISTER_FAILURE':
        draft.status = 'FAILURE';
        return draft;
      case 'RESET':
        draft = initialState.register;
      default:
        return draft;
    }
  });
};

const emailCheckReducer = (
  state = initialState.emailCheck,
  action: any,
): AuthState['emailCheck'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'EMAIL_CHECK_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'EMAIL_CHECK_SUCCESS':
        draft.email = action.payload.email;
        draft.status = action.payload.message;
        return draft;
      case 'EMAIL_CHECK_FAILURE':
        draft.status = 'FAILTURE';
        return draft;
      case 'RESET':
        draft = initialState.emailCheck;
      default:
        return draft;
    }
  });
};

const meReducer = (
  state: AuthState['me'] = initialState.me,
  action: any,
): AuthState['me'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ME_REQUEST':
        return draft;
      case 'ME_SUCCESS':
        draft = {
          ...action.payload,
          isLoggedIn: true,
        };
        return draft;
      case 'ME_FAILURE':
        draft = {
          ...initialState.me,
          isLoggedIn: false,
        };
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  register: registerReducer,
  login: loginReducer,
  emailCheck: emailCheckReducer,
  me: meReducer,
});
