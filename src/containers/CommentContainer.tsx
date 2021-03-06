import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import * as commentAPI from 'api/comment';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import { getComments } from 'store/comment/action';

const CommentContainer = ({ team_id }: { team_id: number }) => {
  const { isLoggedIn } = useSelector((state: StoreState) => state.auth.me);
  const { list } = useSelector(
    (state: StoreState) => state.comment.getComments,
  );
  const { parent_comments } = list;
  const dispatch = useDispatch();

  // 댓글 불러오기
  const getComment = useCallback(() => {
    dispatch(getComments(team_id));
  }, [dispatch, team_id]);

  // 댓글 등록
  const handleSubmit = async (data: { comment: string; parent?: number }) => {
    try {
      const params = {
        ...data,
        team: team_id,
      };

      await commentAPI.postComment(params);
      getComment();

      message.success('댓글 등록에 성공했습니다.');
    } catch (err) {
      message.error('댓글 등록에 실패했습니다.');
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <div id="#comment" style={{ padding: '50px 0 100px' }}>
        <h2 style={{ fontFamily: 'Noto Sans Bold' }}>
          {parent_comments.length}개의 댓글
        </h2>
        {isLoggedIn ? (
          <div style={{ marginBottom: '20px!important' }}>
            <CommentInput commentUpdate={handleSubmit} />
          </div>
        ) : (
          ''
        )}
        {parent_comments ? (
          <CommentList
            list={parent_comments}
            handleSubmit={handleSubmit}
            isLoggedIn={isLoggedIn}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default CommentContainer;
