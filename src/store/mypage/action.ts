import { createEntity } from '../../utils/redux';
import * as myPageApi from '../../api/myPage';

export const MY_PAGE = 'MY_PAGE';
export const GET_MY_APPLICATION_LIST = 'GET_MY_APPLICATION_LIST';

export const myPageEntity = createEntity(MY_PAGE, myPageApi.getMyPage);
export const myPage = () => ({
  type: MY_PAGE,
});

export const getMyApplicationListEntity = createEntity(
  GET_MY_APPLICATION_LIST,
  myPageApi.getMyApplicationList,
);
export const getMyApplicationList = () => ({
  type: GET_MY_APPLICATION_LIST,
});

export type MyPage = ReturnType<typeof myPage>;
export type GetMyApplicationList = ReturnType<typeof getMyApplicationList>;
