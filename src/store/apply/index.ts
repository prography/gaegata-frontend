import { produce } from 'immer';
import { combineReducers } from 'redux';
import { IApply } from 'models/apply';

export type ApplyTeamState = {
  applyTeam: IApply & {
    progress: string;
    status: string;
  };
  applicants: {
    applyList: {
      team: number;
      applications: [];
      message: string;
    };
    status: string;
  };
  aproveApplicant: {
    status: string;
  };
};

const initialState: ApplyTeamState = {
  applyTeam: {
    job: '',
    answer1: { question: -1, answer: '' },
    answer2: { question: -1, answer: '' },
    answer3: { question: -1, answer: '' },
    progress: 'INIT',
    status: 'INIT',
  },
  applicants: {
    applyList: {
      team: 0,
      applications: [],
      message: '',
    },
    status: '',
  },
  aproveApplicant: {
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
        draft.status = 'FETCHING';
        return draft;
      case 'APPLY_TEAM_SUCCESS':
        draft.status = 'SUCCESS';
        return draft;
      case 'APPLY_TEAM_FAILURE':
        draft.status = 'FAILTURE';
        return draft;
      case 'APPLY_TEAM_1':
        draft.job = action.params.job;
        draft.answer1 = action.params.answer1;
        draft.progress = '2';
        return draft;
      case 'APPLY_TEAM_2':
        draft.answer2 = action.params.answer2;
        draft.answer3 = action.params.answer3;
        draft.progress = '3';
        return draft;
      case 'RESET':
        draft = initialState.applyTeam;
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

const applyApplicantReducer = (
  state = initialState.aproveApplicant,
  action: any,
): ApplyTeamState['aproveApplicant'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'APROVE_APPLICANT_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'APROVE_APPLICANT_SUCCESS':
        draft.status = 'SUCCESS';
        return draft;
      case 'APROVE_APPLICANT_FAILURE':
        draft.status = 'FAILTURE';
      case 'REFUSE_APPLICANT_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'REFUSE_APPLICANT_SUCCESS':
        draft.status = 'SUCCESS';
        return draft;
      case 'REFUSE_APPLICANT_FAILURE':
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
  aproveApplicant: applyApplicantReducer,
});
