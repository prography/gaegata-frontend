import { produce } from 'immer';
import { combineReducers } from 'redux';
import { Team } from 'models/team';
import { IQuestion } from 'models/question';

export type TeamState = {
  team: Team & {
    status: string;
    application: boolean;
  };
  teamList: {
    list: {
      count: number;
      next: null;
      previous: null;
      results: [];
    };
    status: string;
  };
  questionList: {
    list: IQuestion[];
    status: string;
  };
};

const initialState: TeamState = {
  team: {
    id: -1,
    title: '',
    author: { id: -1, username: '' },
    description: '',
    planner: 0,
    developer: 0,
    designer: 0,
    region: '',
    status: '',
    goal: '',
    image: '',
    created_at: '',
    application: false,
  },
  teamList: {
    list: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
    status: '',
  },
  questionList: {
    list: [],
    status: 'INIT',
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
        draft.id = action.payload.board.id;
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
          ...action.payload.board,
        };
        draft.application = action.payload.application;
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

const teamListReducer = (
  state = initialState.teamList,
  action: any,
): TeamState['teamList'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'LIST_TEAM_REQUEST':
        return draft;
      case 'LIST_TEAM_SUCCESS':
        draft.list = {
          ...action.payload,
        };
        draft.status = 'LIST_TEAM_SUCCESS';
        return draft;
      case 'LIST_TEAM_FAILTURE':
        return draft;
      default:
        return draft;
    }
  });
};

const questionListReducer = (
  state = initialState.questionList,
  action: any,
): TeamState['questionList'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'LIST_QUESTION_REQUEST':
        draft.status = 'FETCHING';
        return draft;
      case 'LIST_QUESTION_SUCCESS':
        draft.status = 'SUCCESS';
        draft.list = {
          ...action.payload,
        };
        return draft;
      case 'LIST_QUESTION_FAILTURE':
        draft.status = 'FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  team: teamReducer,
  teamList: teamListReducer,
  questionList: questionListReducer,
});
