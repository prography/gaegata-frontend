import { produce } from 'immer';
import { combineReducers } from 'redux';
import { User } from 'models/user';
import { Team } from 'models/team';

export type MyPageState = {
  profile: User;
  getMyApplicationList: {
    list: Team[];
    status: string;
  };
};

const initialState: MyPageState = {
  profile: {
    id: -1,
    username: '',
    email: '',
    phone: '',
    livingArea: '',
  },
  getMyApplicationList: {
    list: [],
    status: 'INIT',
  },
};

const myPageReducer = (
  state = initialState.profile,
  action: any,
): MyPageState['profile'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'MY_PAGE_REQUEST':
        return draft;
      case 'MY_PAGE_SUCCESS':
        draft.email = action.payload.profile.email;
        draft.username = action.payload.profile.username;
        return draft;
      case 'MY_PAGE_FAILTURE':
        draft = initialState.profile;
        return draft;
      default:
        return draft;
    }
  });
};

const getMyApplicationListReducer = (
  state = initialState.getMyApplicationList,
  action: any,
): MyPageState['getMyApplicationList'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'GET_MY_APPLICATION_LIST_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'GET_MY_APPLICATION_LIST_SUCCESS':
        draft.list = action.payload.myApplication;
        draft.status = 'SUCCESS';
        return draft;
      case 'GET_MY_APPLICATION_LIST_FAILTURE':
        draft.status = 'FAILTURE';
        return draft;
      case 'GET_MY_TEAM_LIST_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'GET_MY_TEAM_LIST_SUCCESS':
        draft.list = action.payload.myTeam;
        draft.status = 'SUCCESS';
        return draft;
      case 'GET_MY_TEAM_LIST_FAILTURE':
        draft.status = 'FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  profile: myPageReducer,
  getMyApplicationList: getMyApplicationListReducer,
});
