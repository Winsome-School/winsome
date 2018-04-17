import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../api';

export default function* initialBlogViewSaga() {
	try {
		let data = yield call(api.blogDataApi);
		yield put(actions.initialView(data));
	} catch (e) {
		console.log(e);
	}
}
