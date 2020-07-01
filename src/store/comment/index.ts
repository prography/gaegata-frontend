import { produce } from 'immer';
import { combineReducers } from 'redux';
import { IComment } from 'models/comment';

export type CommentState = {
  getComments: {
    list: {
      parent_comments: IComment[];
    };
    status: string;
  };
};

const initialState: CommentState = {
  getComments: {
    list: {
      parent_comments: [],
    },
    status: 'INIT',
  },
};

const getCommentsReducer = (
  state = initialState.getComments,
  action: any,
): CommentState['getComments'] => {
  return produce(state, draft => {
    switch (action.type) {
      case 'GET_COMMENTS_REQUEST':
        console.log('555');
        draft.status = 'FETCHING';
        return draft;
      case 'GET_COMMENTS_SUCCESS':
        draft.list = {
          ...action.payload,
        };
        draft.status = 'SUCCESS';
        return draft;
      case 'GET_COMMENTS_FAILTURE':
        draft.status = 'FAILTURE';
        return draft;
      default:
        return draft;
    }
  });
};

export default combineReducers({
  getComments: getCommentsReducer,
});
