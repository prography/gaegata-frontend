import React, { FormEvent, useState, ChangeEvent } from 'react';
import {
  ApplyWrap,
  ApplyTitle,
  FieldWrap,
  NumberInput,
  NumberInputWrap,
  ApplyButton,
  Hr,
  TextArea,
  ItemWrap,
} from './styled';
import { useDispatch } from 'react-redux';
import { IQuestion } from 'models/question';
import { applyTeam01 } from 'store/apply/action';

interface Props {
  question: IQuestion;
}

const ApplyTeam: React.FunctionComponent<Props> = ({ question }) => {
  const dispatch = useDispatch();
  const [job, setJob] = useState('');
  const [jobError, setJobError] = useState('');

  const [answer1, setAnswer1] = useState('');
  const [answer1Error, setAnswer1Error] = useState('');

  const handleJob = (e: ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
    setJobError('');
  };

  const handleQuestion1 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer1(e.target.value);
    setAnswer1Error('');
  };

  const validation = (): boolean => {
    if (job == '') {
      setJobError('원하는 직무를 선택해주세요.');
      return false;
    }
    if (answer1.length > 100 || answer1 == '') {
      setAnswer1Error('질문에 성실히 답해주세요.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    if (!validation()) {
      return;
    }

    e.preventDefault();
    const params = {
      job,
      answer1: {
        question: question.id,
        answer: answer1,
      },
    };
    dispatch(applyTeam01(params));
  };

  return (
    <ApplyWrap>
      <ApplyTitle>프로젝트 지원하기</ApplyTitle>
      <div>
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
            1
          </div>
          <span style={{ color: '#3562ff' }}>단계 1</span>
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
              border: '1px solid #e1e2e3',
              width: '40px',
              height: '40px',
              textAlign: 'center',
              lineHeight: '40px',
            }}
          >
            3
          </div>
          단계 3
        </div>
      </div>
      <FieldWrap>
        <NumberInputWrap>
          기획자{' '}
          <NumberInput
            onChange={handleJob}
            id="planner"
            type="radio"
            value="Planner"
            name="job"
          ></NumberInput>{' '}
        </NumberInputWrap>
        <NumberInputWrap>
          개발자{' '}
          <NumberInput
            onChange={handleJob}
            id="developer"
            type="radio"
            value="Developer"
            name="job"
          ></NumberInput>{' '}
        </NumberInputWrap>
        <NumberInputWrap>
          디자이너{' '}
          <NumberInput
            onChange={handleJob}
            id="designer"
            type="radio"
            value="Designer"
            name="job"
          ></NumberInput>
        </NumberInputWrap>
      </FieldWrap>
      <div style={{ color: 'red', fontSize: '12px' }}>{jobError}</div>
      <ItemWrap>
        {
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: 'red' }}>* </span>필수 질문)
            {question.question}
          </div>
        }
        <TextArea
          id="question1"
          placeholder="질문에 성실히 답해주세요."
          onChange={handleQuestion1}
          error={answer1Error}
        ></TextArea>
        <div style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>
          {answer1Error}
        </div>
      </ItemWrap>
      <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
    </ApplyWrap>
  );
};

export default ApplyTeam;
