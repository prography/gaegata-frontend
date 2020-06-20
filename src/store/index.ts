import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from './auth';
import TeamReducer, { TeamState } from './team';
import ApplyReducer, { ApplyTeamState } from './apply';
import MyPageReudecer, { MyPageState } from './mypage';

export type RootState = {
  auth: AuthState;
  team: TeamState;
  applyTeam: ApplyTeamState;
  myPage: MyPageState;
};

export default combineReducers({
  auth: AuthReducer,
  team: TeamReducer,
  applyTeam: ApplyReducer,
  myPage: MyPageReudecer,
});
