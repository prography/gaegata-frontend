import { combineReducers } from 'redux';
import AuthReducer, { AuthState } from './auth';
import TeamReducer, { TeamState } from './team';

export type RootState = {
  auth: AuthState;
  team: TeamState;
};

export default combineReducers({
  auth: AuthReducer,
  team: TeamReducer,
});
