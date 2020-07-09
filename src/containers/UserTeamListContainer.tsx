import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamRow from 'components/TeamRow';
import { Skeleton } from 'antd';
import { getMyApplicationList, getMyTeamList } from 'store/mypage/action';

interface Props {
  teamType: string;
}

const UserTeamListContainer = ({ teamType }: Props) => {
  const dispatch = useDispatch();

  const { list, status } = useSelector(
    (state: StoreState) => state.myPage.getMyApplicationList,
  );

  const getMyApplication = async () => {
    if (teamType == 'application') await dispatch(getMyApplicationList());
    else await dispatch(getMyTeamList());
  };
  useEffect(() => {
    getMyApplication();
  }, []);

  return (
    <>
      {status == 'SUCCESS' ? (
        list.map(data => (
          <TeamRow {...data} key={data.id} teamType={teamType} />
        ))
      ) : (
        <Skeleton active />
      )}
    </>
  );
};

export default UserTeamListContainer;
