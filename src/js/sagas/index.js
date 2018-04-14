import getAchieversDataSaga from './getAchieversDataSaga';
import getCalenderDataSaga from './getCalenderDataSaga';
import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../constants';

function* watchAchieversDataSaga() {
	yield takeLatest(types.GET_ACHIEVERS_DATA, getAchieversDataSaga);
}
function* watchCalenderDataSaga() {
	yield takeLatest(types.GET_CALENDER_DATA, getCalenderDataSaga);
}

export default function* rootSaga() {
	yield all([watchAchieversDataSaga(),watchCalenderDataSaga()]);
}
