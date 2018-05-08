import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export default function* previousBlogViewSaga() {
	yield put(actions.previousView());
	yield put(actions.previousRespView());
}
