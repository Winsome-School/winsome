import * as actions from '../../../src/js/actions';
import * as constants from '../../../src/js/constants';

describe('Test Actions', () => {
	it('should test the onClickRightArrow function', () => {
		const expectedActionRightArrow = {
			type: constants.ARROW_RIGHT,
			payload: 1
		};
		expect(actions.onClickRightArrow()).toEqual(expectedActionRightArrow);
	});
	it('should test the onClickLeftArrow function', () => {
		const expectedActionLeftArrow = {
			type: constants.ARROW_LEFT,
			payload: 1
		};
		expect(actions.onClickLeftArrow()).toEqual(expectedActionLeftArrow);
	});
});
