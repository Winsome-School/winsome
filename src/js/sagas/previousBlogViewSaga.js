import { call, put } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from '../actions';

export default function* previousBlogViewSaga() {
	try {
		yield put(actions.previousView());
		yield put(actions.previousRespView());
	} catch (e) {
		console.log(e);
	}
}
