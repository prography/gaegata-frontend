import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from './auth';
import TeamReducer, { TeamState } from './team';
import ApplyReducer, { ApplyTeamState } from './apply';
import MyPageReudecer, { MyPageState } from './mypage';
import CommentReudecer, { CommentState } from './comment';
import UserProfileReducer, { UserProfileState } from './profile';

export type RootState = {
  auth: AuthState;
  team: TeamState;
  applyTeam: ApplyTeamState;
  myPage: MyPageState;
  comment: CommentState;
  userProfile: UserProfileState;
};

export default combineReducers({
  auth: AuthReducer,
  team: TeamReducer,
  applyTeam: ApplyReducer,
  myPage: MyPageReudecer,
  comment: CommentReudecer,
  userProfile: UserProfileReducer,
});
