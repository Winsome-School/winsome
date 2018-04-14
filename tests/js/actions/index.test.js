import * as actions from '../../../src/js/actions';
import * as constants from '../../../src/js/constants';

describe('Test Actions', () => {
	describe('Calender Actions', () => {
		it('should test the onClickRightArrow function', () => {
			const expectedActionRightArrow = {
				type: constants.ARROW_RIGHT,
				payload: 1
			};
			expect(actions.onClickRightArrow()).toEqual(
				expectedActionRightArrow
			);
		});
		it('should test the onClickLeftArrow function', () => {
			const expectedActionLeftArrow = {
				type: constants.ARROW_LEFT,
				payload: 1
			};
			expect(actions.onClickLeftArrow()).toEqual(expectedActionLeftArrow);
		});
	});
	describe('test the Achievers Actions', () => {
		it('test the getAcheiversData action', () => {
			const expectedAction = {
				type: constants.GET_ACHIEVERS_DATA
			};
			expect(actions.getAchieversData()).toEqual(expectedAction);
		});
		it('test the getAcheiversDataSuccess action', () => {
			const expectedAction = {
				type: constants.GET_ACHIEVERS_DATA_SUCCESS,
				payload: { id: 7 }
			};
			expect(actions.getAchieversDataSuccess({ id: 7 })).toEqual(
				expectedAction
			);
		});
		it('test the getAcheiversDataAttempt action', () => {
			const expectedAction = {
				type: constants.GET_ACHIEVERS_DATA_ATTEMPT
			};
			expect(actions.getAchieversDataAttempt()).toEqual(expectedAction);
		});
		it('test the getAcheiversDataFail action', () => {
			const expectedAction = {
				type: constants.GET_ACHIEVERS_DATA_FAIL,
				payload: { message: 'Api Fail' }
			};
			expect(
				actions.getAchieversDataFail({ message: 'Api Fail' })
			).toEqual(expectedAction);
		});
	});
});
