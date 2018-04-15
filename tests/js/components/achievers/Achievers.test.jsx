import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Achievers } from '../../../../src/js/components/achievers/Achievers';

Enzyme.configure({ adapter: new Adapter() });

describe('Test the Achievers Components', () => {
	const achieversData = {
		firstPart: {
			heading: '',
			text: ''
		},
		class17Data: {
			textYear: '',
			data: [
				{
					textHeading: '',
					text: '',
					image: ''
				},
				{
					textHeading: 'Ahmed',
					text: '',
					image: ''
				},
				{
					textHeading: 'Waqar',
					text: '',
					image: ''
				},
				{
					textHeading: 'Ahsan',
					text: '',
					image: ''
				},
				{
					textHeading: 'Hassan',
					text: '',
					image: ''
				}
			]
		},
		class16Data: {
			textYear: '',
			data: [
				{
					textHeading: 'Rehan',
					text: '',
					image: ''
				},
				{
					textHeading: 'Taimoor',
					text: '',
					image: ''
				},
				{
					textHeading: 'Mushraf',
					text: '',
					image: ''
				}
			]
		}
	};
	const getAchieversData = jest.fn();
	const wrapper = shallow(
		<Achievers
			achieversData={achieversData}
			getAchieversData={getAchieversData}
		/>
	);
	it('test the rendring', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('test the object', () => {
		expect(achieversData.firstPart.heading).toBe('');
	});
	it('test the object values', () => {
		expect(Object.keys(achieversData).length).toBe(3);
	});
	it('test the function', () => {
		expect(getAchieversData.mock.calls.length).toBe(1);
	});
});
