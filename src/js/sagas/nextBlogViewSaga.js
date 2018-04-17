import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';

export default function* nextBlogViewSaga() {
	try {
		yield put(actions.nextView());
		yield put(actions.nextRespView());
	} catch (e) {
		console.log(e);
	}
}
