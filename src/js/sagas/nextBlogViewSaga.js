import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export default function* nextBlogViewSaga() {
	yield put(actions.nextView());
	yield put(actions.nextRespView());
}
