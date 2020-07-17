import { produce } from 'immer';
import { combineReducers } from 'redux';
import { User } from 'models/user';

export type UserProfileState = {
  userProfile: User;
};

const initialState: UserProfileState = {
  userProfile: {
    id: -1,
    username: '',
    email: '',
    phone: '',
    livingArea: '',
  },
};

const userProfileReducer = (
  state = initialState.userProfile,
  action: any,
): UserProfileState['userProfile'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'USER_PROFILE_FUCK_REQUEST':
        return draft;
      case 'USER_PROFILE_FUCK_SUCCESS':
        draft.email = action.payload.email;
        draft.username = action.payload.username;
        draft.image = action.payload.image;
        draft.introduce = action.payload.introduce;
        draft.phone = action.payload.phone;
        draft.livingArea = action.payload.livingArea;
        return draft;
      case 'USER_PROFILE_FUCK_FAILTURE':
        draft = initialState.userProfile;
        return draft;
      case 'RESET':
        draft = initialState.userProfile;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  userProfile: userProfileReducer,
});
