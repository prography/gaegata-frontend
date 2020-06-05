import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import {
  ApplyWrap,
  ApplyTitle,
  FieldWrap,
  NumberInput,
  NumberInputWrap,
  ApplyButton,
  Hr,
} from './styled';
import { ApplyTeamParams } from 'api/applyTeam';
import { useDispatch, useSelector } from 'react-redux';
import { applyTeam } from 'store/apply/action';

interface Props {
  handleCancel: () => {};
}

const ApplyTeam: React.FunctionComponent<Props> = ({ handleCancel }) => {
  const dispatch = useDispatch();
  const { applyStatus } = useSelector(
    (state: StoreState) => state.applyTeam.applyTeam,
  );
  const { id } = useSelector((state: StoreState) => state.team.team);

  const [applyTeamContent, setApplyTeamContent] = useState<ApplyTeamParams>({
    apply_id: -1,
    team_id: -1,
    job: '',
    name: '',
    email: '',
  });

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => {
    setApplyTeamContent({
      ...applyTeamContent,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await dispatch(
      applyTeam({
        apply_id: applyTeamContent.apply_id,
        team_id: id,
        job: applyTeamContent.job,
        name: applyTeamContent.name,
        email: applyTeamContent.email,
      }),
    );
  };

  useEffect(() => {
    if (applyStatus === 'SUCCESS') {
      window.alert('팀에 지원 되었습니다.');
      handleCancel();
    }
    if (applyStatus === 'CREATE_FAILTURE') {
      window.alert('팀에 지원되지 않았습니다.');
    }
  }, [applyStatus]);

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
      <form onSubmit={handleSubmit}>
        <FieldWrap>
          <NumberInputWrap>
            기획자{' '}
            <NumberInput
              onChange={handleChange}
              id="planner"
              type="radio"
              value="Planner"
              name="job"
            ></NumberInput>{' '}
          </NumberInputWrap>
          <NumberInputWrap>
            개발자{' '}
            <NumberInput
              onChange={handleChange}
              id="developer"
              type="radio"
              value="Developer"
              name="job"
            ></NumberInput>{' '}
          </NumberInputWrap>
          <NumberInputWrap>
            디자이너{' '}
            <NumberInput
              onChange={handleChange}
              id="designer"
              type="radio"
              value="Designer"
              name="job"
            ></NumberInput>
          </NumberInputWrap>
        </FieldWrap>
        <ApplyButton type="submit">지원 완료</ApplyButton>
      </form>
    </ApplyWrap>
  );
};

export default ApplyTeam;
