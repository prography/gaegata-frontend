import { combineReducers } from 'redux';
import AuthReducer, { IAuthState } from 'reducers/auth';

export type RootState = {
  auth: IAuthState;
};

export default combineReducers({
  auth: AuthReducer,
});
