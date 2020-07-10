import React, { useState } from 'react';
import {
  ApplicantItemWrap,
  ApplicantName,
  ApplicantImage,
  ApplyButton,
  ApplicantItemContainer,
  ApplicantContent,
  Answer,
  QnAWrap,
  Question,
} from './styled';
import { Applicants, IAnswer } from 'models/apply';
import { IQuestion } from 'models/question';

const ApplicantItem = ({
  id,
  applicant,
  join_status,
  job,
  created_at,
  handleApprove,
  handleRefuse,
  questions,
  answers,
}: Applicants & {
  handleApprove: (id: number) => {};
  handleRefuse: (id: number) => {};
  questions: IQuestion[];
  answers: IAnswer[];
}) => {
  const { username, image } = applicant;
  const [show, setShow] = useState(false);

  const jobName = new Map();
  jobName.set('Developer', '개발자');
  jobName.set('Designer', '디자이너');
  jobName.set('Planner', '기획자');
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <ApplicantItemContainer>
      <ApplicantItemWrap>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#f7f8fb',
            padding: '10px',
            width: '300px',
            borderRadius: '10px',
          }}
        >
          <ApplicantImage>
            <img
              src={image}
              style={{ borderRadius: '100%', height: '100%', width: '100%' }}
            />
          </ApplicantImage>
          <div>
            <ApplicantName>{username}</ApplicantName>
            <span
              style={{
                fontSize: '1rem',
                color: '#BDBDBD',
                display: 'inline-block',
              }}
            >
              {jobName.get(job)}
            </span>
          </div>
        </div>
        {join_status == 'Waiting' ? (
          <>
            <ApplyButton onClick={() => handleApprove(id)}>
              승인하기
            </ApplyButton>
            <ApplyButton onClick={() => handleRefuse(id)}>거절하기</ApplyButton>
          </>
        ) : join_status == 'Rejected' ? (
          <ApplyButton>거절</ApplyButton>
        ) : (
          <ApplyButton>승인</ApplyButton>
        )}
        <div
          style={{ marginTop: '5%', marginRight: '2%' }}
          onClick={() => handleShow()}
        >
          <img
            src="/images/arrow.png"
            style={{ height: '16px' }}
            alt="상세보기"
          />
        </div>
      </ApplicantItemWrap>
      <ApplicantContent show={show}>
        <div>신청일 : {created_at}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <QnAWrap>
            <Question>{questions[0].question}</Question>
            <Answer>{answers[0].answer}</Answer>
          </QnAWrap>
          <QnAWrap>
            <Question>{questions[1].question}</Question>
            <Answer>{answers[1].answer}</Answer>
          </QnAWrap>
          <QnAWrap>
            <Question>{questions[2].question}</Question>
            <Answer>{answers[2].answer}</Answer>
          </QnAWrap>
        </div>
      </ApplicantContent>
    </ApplicantItemContainer>
  );
};

export default ApplicantItem;
