import { produce } from 'immer';
import { combineReducers } from 'redux';

export type TeamState = {
  team: {
    status: string;
  };
};

const initialState: TeamState = {
  team: {
    status: '',
  },
};

const teamReducer = (
  state = initialState.team,
  action: any,
): TeamState['team'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'CREAT_TEAM_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'CREAT_TEAM_SUCCESS':
        draft.status = 'SUCCESS';
        return draft;
      case 'CREAT_TEAM_FAILURE':
        draft.status = 'FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  team: teamReducer,
});
