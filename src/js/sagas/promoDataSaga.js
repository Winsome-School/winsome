import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as actions from '../actions';
// import * as types from '../constants';
import * as api from '../api';

export default function* promoDataSaga(action) {
  const response = yield call(api.promoDataApi);
  yield put(actions.getPromoData(response));
}
