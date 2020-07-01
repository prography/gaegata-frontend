import React, { memo, useState } from 'react';
import { Comment as AntComment, Tooltip, Avatar } from 'antd';
import moment from 'moment';

import CommentInput from 'components/CommentInput';
import CommentList from 'components/CommentList';

const Comment = ({
  id,
  parent_id,
  user,
  body,
  isChild,
  created_at,
  handleSubmit,
  isLoggedIn,
}: any) => {
  const [openInput, setToggleInput] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const commentSubmit = async (data: any) => {
    const params = {
      parent: id,
      body: data.body,
    };

    const re = await handleSubmit(params);

    return re;
  };
  return (
    <>
      <AntComment
        className="team-comment"
        author={<span className="comment-nickname">{user.username}</span>}
        content={
          !isChange ? (
            <div>
              <p className="comment-content">{body}</p>
            </div>
          ) : (
            <div className="pt-20">
              <CommentInput
                id={id}
                parent_id={parent_id}
                isChange={isChange}
                value={body}
              />
            </div>
          )
        }
        avatar={<Avatar src={user.image} alt={user.username} />}
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment(created_at).fromNow()}</span>
          </Tooltip>
        }
      ></AntComment>
    </>
  );
};
export default memo(Comment);
