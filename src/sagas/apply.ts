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
} from '../store/apply/action';

const fetchApplyTeam = fetchEntity(applyTeamEntity);
const fetchApplicantList = fetchEntity(applicantsEntity);
const fetchAproveApplicant = fetchEntity(approveApplicantEntity);
const fetchRefuseApplicant = fetchEntity(refuseApplicantEntity);

function* watchApplyTeam() {
  while (true) {
    const { params }: ApplyTeam = yield take(APPLY_TEAM);
    yield call(fetchApplyTeam, params);
  }
}

function* watchApplicantList() {
  while (true) {
    const { params }: Applicants = yield take(APPLICANT_LIST);
    yield call(fetchApplicantList, params);
  }
}

function* watchAproveApplicant() {
  while (true) {
    const { params }: Applicants = yield take(APPROVE_APPLICANT);
    yield call(fetchAproveApplicant, params);
  }
}

function* watchRefuseApplicant() {
  while (true) {
    const { params }: RefuseApplicant = yield take(REFUSE_APPLICANT);
    yield call(fetchRefuseApplicant, params);
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
