import calenderReducer from '../../../src/js/reducers/calenderReducer';
import * as types from '../../../src/js/constants';

describe('test the reducers', () => {
	describe('test the calenderReducer', () => {
		const initial = {};
		it('test the initial state', () => {
			expect(calenderReducer(undefined, {})).toEqual(initial);
		});
		it('test the getCalenderDataSuccess', () => {
			const expectedState = { one: 1 };
			const action = {
				type: types.GET_CALENDER_DATA_SUCCESS,
				payload: { one: 1 }
			};
			expect(calenderReducer(initial, action)).toEqual(expectedState);
		});
		it('test the getCalenderDataAttempt', () => {
			const expectedState = {};
			const action = {
				type: types.GET_CALENDER_DATA_ATTEMPT
			};
			expect(calenderReducer(initial, action)).toEqual(expectedState);
		});
		it('test the getCalenderDataFail', () => {
			const expectedState = { message: 'Api Failure' };
			const action = {
				type: types.GET_CALENDER_DATA_FAIL,
				payload: { message: 'Api Failure' }
			};
			expect(calenderReducer(initial, action)).toEqual(expectedState);
		});
		it('test the ArrowLeft', () => {
			const initialState = { counter: 0, events: [{}, {}, {}, {}] };
			const expectedState = { counter: -1, events: [{}, {}, {}, {}] };
			const action = {
				type: types.ARROW_LEFT,
				payload: 1
			};
			if (initialState.counter <= 0) {
				expect(calenderReducer(initialState, action)).toEqual({
					counter: 0,
					events: [{}, {}, {}, {}]
				});
			} else {
				expect(calenderReducer(initialState, action)).toEqual(
					expectedState
				);
			}
		});

		it('test the ArrowRight', () => {
			const initialState = {
				counter: 0,
				events: [{}, {}, {}, {}, {}, {}]
			};
			const expectedState = {
				counter: 1,
				events: [{}, {}, {}, {}, {}, {}]
			};
			const action = {
				type: types.ARROW_RIGHT,
				payload: 1
			};
			if (initialState.counter >= initialState.events.length - 4) {
				expect(calenderReducer(initialState, action)).toEqual({
					counter: initialState.events.length - 4
				});
			} else {
				expect(calenderReducer(initialState, action)).toEqual(
					expectedState
				);
			}
		});
	});
});
