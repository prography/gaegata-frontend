import React, { useCallback, useEffect } from 'react';
import { ApplicantCheckWrap, ApplicantCheckTitle } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import ApplicantItem from '../ApplicantItem';
import { applicants } from 'store/apply/action';

interface Props {
  team_id: object;
}

const ApplicantCheck: React.FunctionComponent<Props> = ({ team_id }) => {
  const dispatch = useDispatch();
  const { applyList } = useSelector(
    (state: StoreState) => state.applyTeam.applicants,
  );

  const getApplicantList = useCallback(() => {
    dispatch(applicants(team_id));
  }, [dispatch, team_id]);

  useEffect(() => {
    getApplicantList();
  }, []);

  return (
    <ApplicantCheckWrap>
      <ApplicantCheckTitle>지원자 확인</ApplicantCheckTitle>
      <div style={{ height: '60px' }}>
        {applyList !== undefined && applyList.message != 'No results.'
          ? applyList.applications.map(applyData => (
              <ApplicantItem {...applyData}></ApplicantItem>
            ))
          : '신청자가 아직 없습니다.'}
      </div>
    </ApplicantCheckWrap>
  );
};

export default ApplicantCheck;
