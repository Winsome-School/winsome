import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Arrow } from '../../../../src/js/components/calender/Arrow';

Enzyme.configure({ adapter: new Adapter() });

describe('Test the Arrow Component', () => {
	const wrapper = shallow(<Arrow />);

	it('checks the rendring of the Arrow component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('checks the Left Click', () => {
		const onClickLeftArrow = jest.fn();
		wrapper.find('.arrowLeft').simulate('click');
		expect(onClickLeftArrow.mock.calls.length).toBe(0);
	});
	it('checks the Right Click', () => {
		const onClickRightArrow = jest.fn();
		wrapper.find('.arrowRight').simulate('click');
		expect(onClickRightArrow.mock.calls.length).toBe(0);
	});
	it('checks the Left Enter key Press', () => {
		const onClickLeftArrow = jest.fn();
		wrapper.find('.arrowLeft').simulate('onkeypress');
		expect(onClickLeftArrow.mock.calls.length).toBe(0);
	});
	it('checks the Right Click', () => {
		const onClickRightArrow = jest.fn();
		wrapper.find('.arrowRight').simulate('onkeypress');
		expect(onClickRightArrow.mock.calls.length).toBe(0);
	});
});
