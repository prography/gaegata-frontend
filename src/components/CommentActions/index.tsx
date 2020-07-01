import React, { useMemo } from 'react';
import { Button } from './styled';

// 댓글 달기/숨기기 토글 버튼
export const ToggleBtn = ({
  setToggleInput,
  openInput,
  child_comments_count,
}: any) => {
  const commentActionText = useMemo(() => {
    return openInput
      ? '숨기기'
      : child_comments_count
      ? `${child_comments_count}개의 답글`
      : '댓글 달기';
  }, [openInput, child_comments_count]);

  return (
    <Button onClick={() => setToggleInput(!openInput)}>
      {commentActionText}
    </Button>
  );
};
