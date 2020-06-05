import { produce } from 'immer';
import { combineReducers } from 'redux';

export type ApplyTeamState = {
  applyTeam: {
    applyStatus: string;
  };
  applicants: {
    applyList: {
      team: number;
      applications: [];
      message: string;
    };
    status: string;
  };
};

const initialState: ApplyTeamState = {
  applyTeam: {
    applyStatus: 'INIT',
  },
  applicants: {
    applyList: {
      team: 0,
      applications: [],
      message: '',
    },
    status: '',
  },
};

const applyTeamReducer = (
  state = initialState.applyTeam,
  action: any,
): ApplyTeamState['applyTeam'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'APPLY_TEAM_REQUEST':
        draft.applyStatus = 'FETCHING';
        return draft;
      case 'APPLY_TEAM_SUCCESS':
        draft.applyStatus = 'SUCCESS';
        return draft;
      case 'APPLY_TEAM_FAILURE':
        draft.applyStatus = 'FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

const applicantsReducer = (
  state = initialState.applicants,
  action: any,
): ApplyTeamState['applicants'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'APPLICANT_LIST_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'APPLICANT_LIST_SUCCESS':
        console.log(action.payload);
        draft.applyList = {
          ...action.payload,
        };
        draft.status = 'SUCCESS';
        return draft;
      case 'APPLICANT_LIST_FAILURE':
        draft.status = 'FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  applyTeam: applyTeamReducer,
  applicants: applicantsReducer,
});
