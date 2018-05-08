import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../api';

export default function* initialBlogViewSaga() {
	const data = yield call(api.blogDataApi);
	yield put(actions.initialView(data));
}
