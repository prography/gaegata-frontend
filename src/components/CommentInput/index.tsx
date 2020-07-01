import React, { useState, useCallback, useEffect } from 'react';
import { Button, message } from 'antd';
import { CommetTextArea, CommentInputWrap, CommetBtnWrap } from './styled';

type CommentInputProps = {
  commentUpdate: (params: { parent?: number; comment: string }) => {};
};

const CommentInput = ({ commentUpdate }: CommentInputProps) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const cleanUp = useCallback(() => {
    setComment('');
    setLoading(false);
  }, []);

  const onSubmit = async () => {
    // 댓글을 아무것도 적지 않았을 때
    if (!comment) {
      message.error('댓글은 한글자 이상 입력해주세요.');

      return false;
    }

    setLoading(true);

    const params = {
      comment,
    };

    await commentUpdate(params);

    cleanUp();
  };

  // 클린업 함수로 초기화
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, []);

  return (
    <CommentInputWrap>
      <CommetTextArea
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <CommetBtnWrap>
        <Button
          style={{ color: '#fff', backgroundColor: '#5f76f3' }}
          onClick={onSubmit}
          loading={loading}
        >
          등록
        </Button>
      </CommetBtnWrap>
    </CommentInputWrap>
  );
};

export default CommentInput;
