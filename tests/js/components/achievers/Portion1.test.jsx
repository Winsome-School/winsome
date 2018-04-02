import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Portion1 from '../../../../src/js/components/achievers/Portion1';

Enzyme.configure({ adapter: new Adapter() });

describe('Test the Portion1 Component', () => {
	const achieversData = {
		firstPart: {
			heading: '',
			text: ''
		},
		class17Data: {
			textYear: '',
			data: [
				{
					id: 1,
					textHeading: '',
					text: '',
					image: ''
				},
				{
					id: 2,
					textHeading: 'Ahmed',
					text: '',
					image: ''
				},
				{
					id: 3,
					textHeading: 'Waqar',
					text: '',
					image: ''
				},
				{
					id: 4,
					textHeading: 'Ahsan',
					text: '',
					image: ''
				},
				{
					id: 5,
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
					id: 1,
					textHeading: '',
					text: '',
					image: ''
				},
				{
					id: 2,
					textHeading: 'Ahmed',
					text: '',
					image: ''
				},
				{
					id: 3,
					textHeading: 'Waqar',
					text: '',
					image: ''
				}
			]
		}
	};

	const wrapper = shallow(<Portion1 achieversData={achieversData} />);
	it('test the rendring', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('test the data in the array', () => {
		expect(achieversData.class17Data.data[0].id).toBe(1);
	});
});
