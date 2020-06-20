import { produce } from 'immer';
import { combineReducers } from 'redux';
import { User } from 'models/user';

export type MyPageState = {
  profile: User;
};

const initialState: MyPageState = {
  profile: {
    id: -1,
    username: '',
    email: '',
    phone: '',
    livingArea: '',
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
      case 'MY_PAGE_FAILURE':
        draft = initialState.profile;
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  profile: myPageReducer,
});
