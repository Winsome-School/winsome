import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { throwError } from 'redux-saga-test-plan/providers';
import { expectSaga } from 'redux-saga-test-plan';
import getAchieversDataSaga from '../../../src/js/sagas/getAchieversDataSaga';
import * as api from '../../../src/js/api';
import * as actions from '../../../src/js/actions';
import * as types from '../../../src/js/constants';

import achieversReducer from '../../../src/js/reducers/achieversReducer';

describe('test sagas', () => {
	describe('test getAchieversDataSaga', () => {
		it('test the getAchieversData', () => {
			return expectSaga(getAchieversDataSaga, actions.getAchieversData())
				.provide([
					[call(api.getAchieversData), { items: [{}, {}] }],
					[call(delay, 1000)]
				])
				.put(actions.getAchieversDataAttempt())
				.put(actions.getAchieversDataSuccess({ items: [{}, {}] }))
				.run();
		});
		it('test the Fail', () => {
			return expectSaga(getAchieversDataSaga, actions.getAchieversData())
				.provide([
					[
						call(api.getAchieversData),
						throwError({ message: 'Api Failure' })
					],
					[call(delay, 1000)]
				])
				.put(actions.getAchieversDataAttempt())
				.put(actions.getAchieversDataFail({ message: 'Api Failure' }))
				.run();
		});
	});
	describe('integration test', () => {
		it('test with achieversReducer', () => {
			return expectSaga(getAchieversDataSaga, actions.getAchieversData())
				.provide([
					[call(api.getAchieversData), { items: [{}, {}] }],
					[call(delay, 1000)]
				])
				.withReducer(achieversReducer)
				.hasFinalState({ items: [{}, {}] })
				.run();
		});
	});
});
