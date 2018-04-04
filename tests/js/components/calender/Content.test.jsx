import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Content from '../../../../src/js/components/calender/Content';

Enzyme.configure({ adapter: new Adapter() });

describe('Test the Content Component of Calender', () => {
	const count = 0;
	const wrapper = shallow(<Content count={count} />);
	it('checks the rendering', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
