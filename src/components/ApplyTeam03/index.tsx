import React from 'react';
import { ApplyWrap, ApplyTitle, ApplyButton, Hr, ItemWrap } from './styled';
import { IQuestion } from 'models/question';

interface Props {
  questions: IQuestion[];
  handleSubmit: () => {};
  job: string;
  answer1: string;
  answer2: string;
  answer3: string;
}

const ApplyTeam03: React.FunctionComponent<Props> = ({
  questions,
  handleSubmit,
  job,
  answer1,
  answer2,
  answer3,
}) => {
  const jobName = new Map();
  jobName.set('Developer', '개발자');
  jobName.set('Designer', '디자이너');
  jobName.set('Planner', '기획자');

  return (
    <ApplyWrap>
      <ApplyTitle>프로젝트 지원하기</ApplyTitle>
      <div>
        <div style={{ display: 'inline-block' }}>
          <div
            style={{
              borderRadius: '50%',

              border: '1px solid #e1e2e3',
              width: '40px',
              height: '40px',
              textAlign: 'center',
              lineHeight: '40px',
            }}
          >
            1
          </div>
          단계 1
        </div>
        <Hr />
        <div style={{ display: 'inline-block' }}>
          <div
            style={{
              borderRadius: '50%',
              border: '1px solid #e1e2e3',
              width: '40px',
              height: '40px',
              textAlign: 'center',
              lineHeight: '40px',
            }}
          >
            2
          </div>
          단계 2
        </div>
        <Hr />
        <div style={{ display: 'inline-block' }}>
          <div
            style={{
              borderRadius: '50%',
              backgroundColor: '#3562ff',
              width: '40px',
              height: '40px',
              textAlign: 'center',
              lineHeight: '40px',
              color: '#fff',
            }}
          >
            3
          </div>
          <span style={{ color: '#3562ff' }}>단계 3</span>
        </div>
      </div>
      <ItemWrap style={{ textAlign: 'left' }}>
        <div style={{ margin: '4% 0' }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>
            필수질문) {questions[0].question}
          </div>
          <div
            style={{
              backgroundColor: '#f7f8fb',
              minHeight: '100px',
              borderRadius: '5px',
              margin: '5px 0',
              maxHeight: '200px',
              overflowY: 'scroll',
              padding: '15px',
            }}
          >
            {answer1}
          </div>
        </div>
        <div style={{ margin: '4% 0' }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>
            필수질문) {questions[1].question}
          </div>
          <div
            style={{
              backgroundColor: '#f7f8fb',
              minHeight: '100px',
              borderRadius: '5px',
              margin: '5px 0',
              maxHeight: '200px',
              overflowY: 'scroll',
              padding: '15px',
            }}
          >
            {answer2}
          </div>
        </div>
        <div style={{ margin: '4% 0' }}>
          <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>
            필수질문) {questions[2].question}
          </div>
          <div
            style={{
              backgroundColor: '#f7f8fb',
              minHeight: '100px',
              borderRadius: '5px',
              margin: '5px 0',
              maxHeight: '200px',
              overflowY: 'scroll',
              padding: '15px',
            }}
          >
            {answer3}
          </div>
        </div>
        <div style={{ fontSize: '1.15rem', fontWeight: 600 }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>
            {jobName.get(job)}
          </span>
          로 지원하는게 맞으신가요?
        </div>
      </ItemWrap>
      <ApplyButton onClick={handleSubmit}>지원 완료</ApplyButton>
    </ApplyWrap>
  );
};

export default ApplyTeam03;
