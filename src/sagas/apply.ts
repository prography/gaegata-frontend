import { all, fork, call, take } from 'redux-saga/effects';
import { fetchEntity } from '../utils/saga';
import {
  APPLY_TEAM,
  ApplyTeam,
  applyTeamEntity,
  applicantsEntity,
  APPLICANT_LIST,
  Applicants,
} from '../store/apply/action';

const fetchApplyTeam = fetchEntity(applyTeamEntity);
const fetchApplicantList = fetchEntity(applicantsEntity);

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

export default function* root() {
  yield all([fork(watchApplyTeam), fork(watchApplicantList)]);
}
