import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  ApplyWrap,
  ApplyTitle,
  ApplyButton,
  Hr,
  TextArea,
  ItemWrap,
} from './styled';
import { useDispatch } from 'react-redux';

import { IQuestion } from 'models/question';
import { applyTeam02 } from 'store/apply/action';

interface Props {
  question2: IQuestion;
  question3: IQuestion;
}

const ApplyTeam02: React.FunctionComponent<Props> = ({
  question2,
  question3,
}) => {
  const dispatch = useDispatch();

  const [answer2, setAnswer2] = useState('');
  const [answer2Error, setAnswer2Error] = useState('');

  const [answer3, setAnswer3] = useState('');
  const [answer3Error, setAnswer3Error] = useState('');

  const handleAnswer2 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer2(e.target.value);
    setAnswer2Error('');
  };

  const handleAnswer3 = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer3(e.target.value);
    setAnswer3Error('');
  };

  const validation = (): boolean => {
    if (answer2.length > 100 || answer2 == '') {
      setAnswer2Error('질문에 성실히 답해주세요.');
      return false;
    }
    if (answer3.length > 100 || answer3 == '') {
      setAnswer3Error('질문에 성실히 답해주세요.');
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
      answer2: {
        question: question2.id,
        answer: answer2,
      },

      answer3: {
        question: question3.id,
        answer: answer3,
      },
    };
    dispatch(applyTeam02(params));
  };

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
              backgroundColor: '#3562ff',
              width: '40px',
              height: '40px',
              textAlign: 'center',
              lineHeight: '40px',
              color: '#fff',
            }}
          >
            2
          </div>
          <span style={{ color: '#3562ff' }}>단계 2</span>
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
      <ItemWrap>
        {
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: 'red' }}>* </span>필수 질문)
            {question2.question}
          </div>
        }
        <TextArea
          id="answer2"
          placeholder="질문에 성실히 답해주세요."
          onChange={handleAnswer2}
        ></TextArea>
        <div style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>
          {answer2Error}
        </div>
      </ItemWrap>
      <ItemWrap>
        {
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: 'red' }}>* </span>필수 질문)
            {question3.question}
          </div>
        }
        <TextArea
          id="answer3"
          placeholder="질문에 성실히 답해주세요."
          onChange={handleAnswer3}
        ></TextArea>
        <div style={{ color: 'red', fontSize: '12px', textAlign: 'left' }}>
          {answer3Error}
        </div>
      </ItemWrap>
      <ApplyButton onClick={handleSubmit}>다음</ApplyButton>
    </ApplyWrap>
  );
};

export default ApplyTeam02;
