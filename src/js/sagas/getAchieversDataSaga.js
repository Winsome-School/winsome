import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../constants';
import * as api from '../api';

export default function* getAchieversDataSaga() {
	yield put(actions.getAchieversDataAttempt());

	try {
		const response = yield call(api.getAchieversData);
		yield call(delay, 1000);
		yield put(actions.getAchieversDataSuccess(response));
	} catch (e) {
		yield put(actions.getAchieversDataFail({ message: 'Api Failure' }));
	}
}
