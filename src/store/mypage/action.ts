import { createEntity } from '../../utils/redux';
import * as myPageApi from '../../api/myPage';

export const MY_PAGE = 'MY_PAGE';

export const myPageEntity = createEntity(MY_PAGE, myPageApi.getMyPage);
export const myPage = () => ({
  type: MY_PAGE,
});

export type MyPage = ReturnType<typeof myPage>;
