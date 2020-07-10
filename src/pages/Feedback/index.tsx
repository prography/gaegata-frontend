import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextArea, CreateButton } from './styled';
import { postFeedback } from 'api/feedback';
import { message } from 'antd';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const params = {
      feedback,
    };
    try {
      const status = await postFeedback(params);

      if (status == 'ok') {
        message.success('피드백 주셔서 감사합니다.');
        setFeedback('');
      }
    } catch (err) {
      message.error('피드백 전송 실패했습니다.');
    }
  };
  return (
    <div
      style={{
        paddingTop: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '50%',
          backgroundColor: '#fff',
          minHeight: '50%',
          minWidth: '50%',
          boxShadow: '4px 4px 4px 4px rgba(40, 50, 60, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '1.25rem', margin: '10px 0' }}>
          서비스 피드백을 주세요.
        </div>
        <div>서비스 이용 시 개선되었으면 하는 사항을 적어주세요.</div>
        <div>여러분의 목소리를 담아 더욱 발전된 서비스를 제공하겠습니다.</div>
        <TextArea value={feedback} onChange={handleFeedback}></TextArea>
        <CreateButton onClick={handleSubmit}>피드백 주기</CreateButton>
      </div>
    </div>
  );
};

export default Feedback;
