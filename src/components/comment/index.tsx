import React, { memo, useState } from 'react';
import { Comment as AntComment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

import CommentInput from 'components/CommentInput';
import CommentList from 'components/CommentList';
import * as CommentActions from 'components/CommentActions';
import { User } from 'models/user';
import { IComment } from 'models/comment';
import { CommentNickname, CommentContent } from './styled';

type CommentProrps = {
  id: number;
  user: User;
  body: string;
  created_at: string;
  handleSubmit: (data: { parent?: number; comment: string }) => {};
  isLoggedIn: boolean;
  reply: IComment[];
};

const Comment = ({
  id,
  user,
  body,
  created_at,
  handleSubmit,
  isLoggedIn,
  reply,
}: CommentProrps) => {
  const [openInput, setToggleInput] = useState(false);

  const commentSubmit = async (data: any) => {
    const params = {
      parent: id,
      comment: data.comment,
    };

    const re = await handleSubmit(params);

    return re;
  };

  const actions = () => {
    const actionArr = [];
    if (reply.length > 0 || isLoggedIn) {
      actionArr.unshift(
        <CommentActions.ToggleBtn
          setToggleInput={setToggleInput}
          openInput={openInput}
          child_comments_count={reply.length}
        />,
      );
    }

    return actionArr;
  };

  return (
    <>
      <AntComment
        style={{ borderBottom: '1px solid #efefef' }}
        actions={actions()}
        author={<CommentNickname>{user.username}</CommentNickname>}
        content={
          <div>
            <CommentContent>{body}</CommentContent>
          </div>
        }
        avatar={<Avatar src={user.image} alt={user.username} />}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(created_at).fromNow()}</span>
          </Tooltip>
        }
      >
        {openInput && (
          <div>
            {reply.length ? (
              <CommentList
                list={reply}
                handleSubmit={handleSubmit}
                isLoggedIn={isLoggedIn}
              />
            ) : (
              ''
            )}
            {isLoggedIn ? (
              <div style={{ paddingTop: '20px!important' }}>
                <CommentInput commentUpdate={commentSubmit} />
              </div>
            ) : (
              ''
            )}
          </div>
        )}
      </AntComment>
    </>
  );
};
export default memo(Comment);
