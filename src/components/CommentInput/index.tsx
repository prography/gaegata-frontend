import React, { useState, useCallback, useEffect } from 'react';
import { Input, Button, message } from 'antd';

const CommentInput = ({ commentUpdate }: any) => {
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  const cleanUp = useCallback(() => {
    setBody('');
    setLoading(false);
  }, []);

  const onSubmit = async () => {
    // 댓글을 아무것도 적지 않았을 때
    if (!body) {
      message.error('댓글은 한글자 이상 입력해주세요.');

      return false;
    }

    setLoading(true);

    await commentUpdate(body);

    cleanUp();
  };

  // 클린업 함수로 초기화
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, []);

  return (
    <div className="comment-input-wrap pb-20">
      <Input.TextArea
        className="comment-input"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <div className="comment-btn-wrap">
        <div className="comment-btn-list">
          <Button className="add-btn" onClick={onSubmit} loading={loading}>
            {'등록'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
