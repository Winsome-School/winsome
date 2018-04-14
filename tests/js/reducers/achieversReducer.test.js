import achieversReducer from '../../../src/js/reducers/achieversReducer';
import * as types from '../../../src/js/constants';

describe('test the reducers', () => {
	describe('test the achieversReducer', () => {
		const initial = {};
		it('test the initial state', () => {
			expect(achieversReducer(undefined, {})).toEqual(initial);
		});
		it('test the getAchieversDataSuccess', () => {
			const expectedState = { one: 1 };
			const action = {
				type: types.GET_ACHIEVERS_DATA_SUCCESS,
				payload: { one: 1 }
			};
			expect(achieversReducer(initial, action)).toEqual(expectedState);
		});
		it('test the getAchieversDataAttempt', () => {
			const expectedState = {};
			const action = {
				type: types.GET_ACHIEVERS_DATA_ATTEMPT
			};
			expect(achieversReducer(initial, action)).toEqual(expectedState);
		});
		it('test the getAchieversDataFail', () => {
			const expectedState = { message: 'Api Failure' };
			const action = {
				type: types.GET_ACHIEVERS_DATA_FAIL,
				payload: { message: 'Api Failure' }
			};
			expect(achieversReducer(initial, action)).toEqual(expectedState);
		});
	});
});
