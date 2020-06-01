import { produce } from 'immer';
import { combineReducers } from 'redux';
import { Team } from 'models/team';

export type TeamState = {
  team: Team & {
    status: string;
  };
};

const initialState: TeamState = {
  team: {
    id: -1,
    title: '',
    description: '',
    planner: 0,
    developer: 0,
    designer: 0,
    region: '',
    status: '',
    goal: '',
    kind: '',
    people: '',
    image: '',
    created_at: '',
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
        draft.id = action.payload.id;
        draft.status = 'CREATE_SUCCESS';
        return draft;
      case 'CREAT_TEAM_FAILURE':
        draft.status = 'CREATE_FAILTURE';
        return draft;
      case 'DETAIL_TEAM_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'DETAIL_TEAM_SUCCESS':
        draft = {
          ...action.payload,
        };
        draft.status = 'DETAIL_SUCCESS';
        return draft;
      case 'DETAIL_TEAM_FAILURE':
        draft.status = 'DETAIL_FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  team: teamReducer,
});
