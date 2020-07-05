import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import {
  APPLY_TEAM,
  ApplyTeam,
  applyTeamEntity,
  applicantsEntity,
  APPLICANT_LIST,
  Applicants,
  APPROVE_APPLICANT,
  approveApplicantEntity,
  RefuseApplicant,
  refuseApplicantEntity,
  REFUSE_APPLICANT,
  ApproveApplicant,
} from '../store/apply/action';

const fetchApplyTeam = fetchEntity(applyTeamEntity);
const fetchApplicantList = fetchEntity(applicantsEntity);
const fetchAproveApplicant = fetchEntity(approveApplicantEntity);
const fetchRefuseApplicant = fetchEntity(refuseApplicantEntity);

function* watchApplyTeam() {
  while (true) {
    const { params, team_id }: ApplyTeam = yield take(APPLY_TEAM);
    yield call(fetchApplyTeam, params, team_id);
  }
}

function* watchApplicantList() {
  while (true) {
    const { team_id }: Applicants = yield take(APPLICANT_LIST);
    yield call(fetchApplicantList, team_id);
  }
}

function* watchAproveApplicant() {
  while (true) {
    const { id }: ApproveApplicant = yield take(APPROVE_APPLICANT);
    yield call(fetchAproveApplicant, id);
  }
}

function* watchRefuseApplicant() {
  while (true) {
    const { id }: RefuseApplicant = yield take(REFUSE_APPLICANT);
    yield call(fetchRefuseApplicant, id);
  }
}

export default function* root() {
  yield all([
    fork(watchApplyTeam),
    fork(watchApplicantList),
    fork(watchAproveApplicant),
    fork(watchRefuseApplicant),
  ]);
}
