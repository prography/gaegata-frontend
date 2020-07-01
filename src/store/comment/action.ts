import { createEntity } from '../../utils/redux';
import * as commentApi from '../../api/comment';

export const GET_COMMENTS = 'GET_COMMENTS';

export const getCommentsEntity = createEntity(
  GET_COMMENTS,
  commentApi.getComments,
);
export const getComments = (params: number) => ({
  type: GET_COMMENTS,
  params,
});

export type GetComments = ReturnType<typeof getComments>;
