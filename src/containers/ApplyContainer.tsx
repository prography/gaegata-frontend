import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../components/Modal/index';
import ApplyTeam from 'components/ApplyTeam';
import ApplyTeam02 from 'components/ApplyTeam02';
import ApplyTeam03 from 'components/ApplyTeam03';
import { listQuestion } from 'store/team/action';
import { applyTeam, reset } from 'store/apply/action';

interface ApplyProps {
  team_id: number;
  handleCancel: () => {};
  visible: boolean;
}

const ApplyContainer = ({ team_id, handleCancel, visible }: ApplyProps) => {
  const dispatch = useDispatch();
  const { progress, status } = useSelector(
    (state: StoreState) => state.applyTeam.applyTeam,
  );
  const { job, answer1, answer2, answer3 } = useSelector(
    (state: StoreState) => state.applyTeam.applyTeam,
  );
  const { list } = useSelector((state: StoreState) => state.team.questionList);

  const getQuestionList = async () => {
    await dispatch(listQuestion(team_id));
  };

  useEffect(() => {
    getQuestionList();

    if (status == 'SUCCESS') {
      alert('팀 신청이 완료되었습니다.');
      handleCancel();
      reset();
    }
  }, [progress, status]);

  const handleSubmit = async () => {
    const answer = [answer1, answer2, answer3];
    const params = {
      team: {
        job,
      },
      answers: answer,
    };
    await dispatch(applyTeam(params, team_id));
  };

  return (
    <>
      <ModalComponent handleCancel={handleCancel} visible={visible} width={600}>
        {progress === 'INIT' && list[0] !== undefined ? (
          <ApplyTeam question={list[0]}></ApplyTeam>
        ) : progress === '2' ? (
          <ApplyTeam02 question2={list[1]} question3={list[2]}></ApplyTeam02>
        ) : progress === '3' ? (
          <ApplyTeam03
            questions={list}
            handleSubmit={handleSubmit}
            job={job}
            answer1={answer1.answer}
            answer2={answer2.answer}
            answer3={answer3.answer}
          ></ApplyTeam03>
        ) : (
          ''
        )}
      </ModalComponent>
    </>
  );
};
export default ApplyContainer;
