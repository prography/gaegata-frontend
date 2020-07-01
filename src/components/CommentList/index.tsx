import React from 'react';
import Comment from 'components/Comment';
import { IComment } from 'models/comment';

interface params {
  list: IComment[];
  handleSubmit: (data: { parent?: number; comment: string }) => {};
  isLoggedIn: boolean;
}

const CommentList = ({ list, handleSubmit, isLoggedIn }: any) => {
  return list.map(({ id, user, comment, created_at, reply }: any) => (
    <Comment
      key={id}
      id={id}
      user={user}
      body={comment}
      created_at={created_at}
      handleSubmit={handleSubmit}
      isLoggedIn={isLoggedIn}
      reply={reply}
    />
  ));
};

export default CommentList;
