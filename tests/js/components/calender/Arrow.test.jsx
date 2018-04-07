import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Arrow } from '../../../../src/js/components/calender/Arrow';
import * as constants from '../../../../src/js/constants';
import * as actions from '../../../../src/js/actions';

Enzyme.configure({ adapter: new Adapter() });

describe('Test the Arrow Component', () => {
	const onClickLeftArrow = jest.fn();
	const onClickRightArrow = jest.fn();

	const wrapper = shallow(<Arrow />);

	it('checks the rendring of the Arrow component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('checks the Left Click', () => {
		wrapper.find('.arrowLeft').simulate('click');
		expect(onClickLeftArrow.mock.calls.length).toBe(0);
	});
	it('checks the Right Click', () => {
		wrapper.find('.arrowRight').simulate('click');
		expect(onClickRightArrow.mock.calls.length).toBe(0);
	});
	it('checks the Left Enter key Press', () => {
		wrapper.find('.arrowLeft').simulate('onkeypress');
		expect(onClickLeftArrow.mock.calls.length).toBe(0);
	});
	it('checks the Right Click', () => {
		wrapper.find('.arrowRight').simulate('onkeypress');
		expect(onClickRightArrow.mock.calls.length).toBe(0);
	});
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
