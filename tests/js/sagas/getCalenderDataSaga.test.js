import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { throwError } from 'redux-saga-test-plan/providers';
import { expectSaga } from 'redux-saga-test-plan';
import getCalenderDataSaga from '../../../src/js/sagas/getCalenderDataSaga';
import * as api from '../../../src/js/api';
import * as actions from '../../../src/js/actions';
import * as types from '../../../src/js/constants';

import calenderReducer from '../../../src/js/reducers/calenderReducer';

describe('test sagas', () => {
	describe('test getCalenderDataSaga', () => {
		it('test the getCalenderData', () => {
			return expectSaga(getCalenderDataSaga, actions.getCalenderData())
				.provide([
					[call(api.getCalenderData), { items: [{}, {}] }],
					[call(delay, 1000)]
				])
				.put(actions.getCalenderDataAttempt())
				.put(actions.getCalenderDataSuccess({ items: [{}, {}] }))
				.run();
		});
		it('test the Fail', () => {
			return expectSaga(getCalenderDataSaga, actions.getCalenderData())
				.provide([
					[
						call(api.getCalenderData),
						throwError({ message: 'Api Failure' })
					],
					[call(delay, 1000)]
				])
				.put(actions.getCalenderDataAttempt())
				.put(actions.getCalenderDataFail({ message: 'Api Failure' }))
				.run();
		});
	});
	describe('integration test', () => {
		it('test with calenderReducer', () => {
			return expectSaga(getCalenderDataSaga, actions.getCalenderData())
				.provide([
					[call(api.getCalenderData), { items: [{}, {}] }],
					[call(delay, 1000)]
				])
				.withReducer(calenderReducer)
				.hasFinalState({ items: [{}, {}] })
				.run();
		});
	});
});
