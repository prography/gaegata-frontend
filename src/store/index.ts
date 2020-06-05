import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from './auth';
import TeamReducer, { TeamState } from './team';
import ApplyReducer, { ApplyTeamState } from './apply';

export type RootState = {
  auth: AuthState;
  team: TeamState;
  applyTeam: ApplyTeamState;
};

export default combineReducers({
  auth: AuthReducer,
  team: TeamReducer,
  applyTeam: ApplyReducer,
});
