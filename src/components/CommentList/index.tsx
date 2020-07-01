import React from 'react';
import Comment from 'components/Comment';
import { IComment } from 'models/comment';

interface params {
  list: IComment[];
  handleSubmit: (data: string) => {};
  isLoggedIn: boolean;
}

const CommentList = ({ list, handleSubmit, isLoggedIn }: any) => {
  return list.map(
    ({ id, user, comment, team, parent, created_at, reply }: any) => (
      <Comment
        key={id}
        user={user}
        body={comment}
        team_id={team}
        parent_id={parent}
        created_at={created_at}
        isChild={!!parent}
        handleSubmit={handleSubmit}
        isLoggedIn={isLoggedIn}
      />
    ),
  );
};

export default CommentList;
